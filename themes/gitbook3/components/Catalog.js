import { isBrowser } from '@/lib/utils'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { useCallback, useEffect, useState, useRef } from 'react'

/**
 * GitBook3 目录导航组件
 * 支持粘性定位、键盘导航和无障碍功能
 * @param toc
 * @returns {JSX.Element}
 * @constructor
 */
const Catalog = ({ post }) => {
  const toc = post?.toc
  const [activeSection, setActiveSection] = useState(null)
  const catalogRef = useRef(null)
  const [focusedIndex, setFocusedIndex] = useState(-1)

  // 监听滚动事件
  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy)
    actionSectionScrollSpy()
    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy)
    }
  }, [post])

  // 键盘导航支持
  const handleKeyDown = useCallback((e) => {
    if (!toc || toc.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => Math.min(prev + 1, toc.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => Math.max(prev - 1, 0))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < toc.length) {
          const targetId = toc[focusedIndex].id
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
        break
      case 'Home':
        e.preventDefault()
        setFocusedIndex(0)
        break
      case 'End':
        e.preventDefault()
        setFocusedIndex(toc.length - 1)
        break
      case 'Escape':
        e.preventDefault()
        setFocusedIndex(-1)
        if (catalogRef.current) {
          catalogRef.current.blur()
        }
        break
    }
  }, [toc, focusedIndex])

  // 添加键盘事件监听
  useEffect(() => {
    if (catalogRef.current) {
      catalogRef.current.addEventListener('keydown', handleKeyDown)
      return () => {
        if (catalogRef.current) {
          catalogRef.current.removeEventListener('keydown', handleKeyDown)
        }
      }
    }
  }, [handleKeyDown])

  const throttleMs = 200
  const actionSectionScrollSpy = useCallback(
    throttle(() => {
      const sections = document.getElementsByClassName('notion-h')
      let prevBBox = null
      let currentSectionId = null
      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        if (!currentSectionId) {
          currentSectionId = section.getAttribute('data-id')
        }
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        // GetBoundingClientRect returns values relative to viewport
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('data-id')
          prevBBox = bbox
          continue
        }
        // No need to continue loop, if last element has been detected
        break
      }
      setActiveSection(currentSectionId)
      const tocIds = post?.toc?.map(t => uuidToId(t.id)) || []
      const index = tocIds.indexOf(currentSectionId) || 0
      if (isBrowser && tocIds?.length > 0) {
        for (const tocWrapper of document?.getElementsByClassName(
          'toc-wrapper'
        )) {
          tocWrapper?.scrollTo({ top: 28 * index, behavior: 'smooth' })
        }
      }
    }, throttleMs)
  )

  // 无目录就直接返回空
  if (!toc || toc?.length < 1) {
    return <></>
  }

  return (
    <div className='gitbook3-catalog'>
      <div className='gitbook3-catalog-header'>
        <h3 className='gitbook3-catalog-title'>
          <i className='fas fa-list mr-2' />
          目录
        </h3>
      </div>

      <div
        ref={catalogRef}
        id='toc-wrapper'
        className='gitbook3-catalog-content'
        role="navigation"
        aria-label="文档目录"
        tabIndex={0}>
        <nav className='gitbook3-catalog-nav'>
          {toc?.map((tocItem, index) => {
            const id = uuidToId(tocItem.id)
            const isActive = activeSection === id
            const isFocused = focusedIndex === index
            
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`gitbook3-catalog-item ${isActive ? 'active' : ''} ${isFocused ? 'focused' : ''} level-${tocItem.indentLevel}`}
                style={{
                  paddingLeft: `${12 + tocItem.indentLevel * 16}px`
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                aria-current={isActive ? 'location' : undefined}
                title={tocItem.text}>
                <span className='gitbook3-catalog-text'>
                  {tocItem.text}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Catalog
