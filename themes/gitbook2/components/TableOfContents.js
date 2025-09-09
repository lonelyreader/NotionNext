import { useGlobal } from '@/lib/global'
import { uuidToId } from 'notion-utils'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * GitBook风格目录组件 - 从文章正文提取H1/H2/H3标题生成目录
 * @param {*} props
 * @returns
 */
const TableOfContents = ({ post, mobile = false }) => {
  const { locale } = useGlobal()
  const [activeSection, setActiveSection] = useState(null)
  const [headings, setHeadings] = useState([])
  const tRef = useRef(null)

  // 提取标题
  useEffect(() => {
    if (!post || !post.blockMap) return

    const extractedHeadings = []
    
    // 遍历blockMap提取标题
    const extractHeadingsFromBlocks = (blocks) => {
      if (!blocks) return
      
      Object.values(blocks).forEach(block => {
        if (block?.value) {
          const { type, properties } = block.value
          
          // 检查是否是标题类型
          if (type === 'header' || type === 'sub_header' || type === 'sub_sub_header') {
            const title = properties?.title?.[0]?.[0] || ''
            if (title.trim()) {
              const level = type === 'header' ? 1 : type === 'sub_header' ? 2 : 3
              const id = uuidToId(block.value.id)
              
              extractedHeadings.push({
                id,
                text: title,
                level,
                indentLevel: level - 1
              })
            }
          }
        }
      })
    }

    extractHeadingsFromBlocks(post.blockMap)
    setHeadings(extractedHeadings)
  }, [post])

  // 监听滚动事件，高亮当前章节
  useEffect(() => {
    if (headings.length === 0) return

    const throttleMs = 200
    const actionSectionScrollSpy = () => {
      const sections = document.querySelectorAll('h1, h2, h3')
      let prevBBox = null
      let currentSectionId = activeSection

      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        
        if (!currentSectionId) {
          currentSectionId = section.id || section.getAttribute('data-id')
        }
        
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        
        if (bbox.top - offset < 0) {
          currentSectionId = section.id || section.getAttribute('data-id')
          prevBBox = bbox
          continue
        }
        break
      }
      
      setActiveSection(currentSectionId)
      
      // 自动滚动TOC
      if (tRef.current) {
        const index = headings.findIndex(h => h.id === currentSectionId)
        if (index >= 0) {
          tRef.current.scrollTo({ 
            top: 28 * index, 
            behavior: 'smooth' 
          })
        }
      }
    }

    const throttledScrollSpy = throttle(actionSectionScrollSpy, throttleMs)
    window.addEventListener('scroll', throttledScrollSpy)
    actionSectionScrollSpy()

    return () => {
      window.removeEventListener('scroll', throttledScrollSpy)
    }
  }, [headings, activeSection])

  // 如果标题少于3个，自动隐藏
  if (headings.length < 3) {
    return null
  }

  const tocContent = (
    <div className='h-full overflow-y-auto'>
      <div className='p-6'>
        <div className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4'>
          <i className='mr-2 fas fa-list' />
          {locale.COMMON.TABLE_OF_CONTENTS || '目录'}
        </div>

        <div
          ref={tRef}
          className='overflow-y-auto max-h-96 scroll-hidden'
        >
          <nav className='space-y-1'>
            {headings.map(heading => {
              const isActive = activeSection === heading.id
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`block px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium border-l-2 border-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                  style={{
                    paddingLeft: `${12 + heading.indentLevel * 16}px`
                  }}
                >
                  <span className={`truncate block ${
                    isActive ? 'font-medium' : ''
                  }`}>
                    {heading.text}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>

        {/* 统计信息 */}
        <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='text-xs text-gray-500 dark:text-gray-400'>
            <div className='flex justify-between'>
              <span>章节数:</span>
              <span>{headings.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // 如果是移动端，使用Portal插入到移动端容器
  if (mobile && typeof window !== 'undefined') {
    const mobileContainer = document.getElementById('mobile-toc-container')
    if (mobileContainer) {
      return createPortal(tocContent, mobileContainer)
    }
  }

  // 桌面端，使用Portal插入到桌面端容器
  if (!mobile && typeof window !== 'undefined') {
    const desktopContainer = document.getElementById('toc-container')
    if (desktopContainer) {
      return createPortal(tocContent, desktopContainer)
    }
  }

  return null
}

// 简单的throttle函数
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default TableOfContents
