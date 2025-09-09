import NotionPage from '@/components/NotionPage'
import { useEffect } from 'react'

/**
 * GitBook风格文章组件 - 复用react-notion-x渲染Notion块
 * @param {*} props
 * @returns
 */
const Article = ({ post }) => {
  useEffect(() => {
    // 确保文章渲染后，为标题添加ID以便TOC跳转
    const addHeadingIds = () => {
      const headings = document.querySelectorAll('h1, h2, h3')
      headings.forEach((heading, index) => {
        if (!heading.id) {
          // 使用标题文本生成ID，或使用索引作为后备
          const text = heading.textContent?.trim() || ''
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // 移除特殊字符
            .replace(/\s+/g, '-') // 空格替换为连字符
            .substring(0, 50) || `heading-${index}` // 限制长度
          
          heading.id = id
          heading.setAttribute('data-id', id)
        }
      })
    }

    // 延迟执行，确保Notion内容已渲染
    const timer = setTimeout(addHeadingIds, 1000)
    
    return () => clearTimeout(timer)
  }, [post])

  if (!post) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='text-gray-500 dark:text-gray-400'>
          <i className='fas fa-spinner fa-spin mr-2' />
          加载中...
        </div>
      </div>
    )
  }

  return (
    <div className='article-content'>
      <NotionPage post={post} />
    </div>
  )
}

export default Article
