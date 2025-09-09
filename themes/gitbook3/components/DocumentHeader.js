import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'

/**
 * GitBook3 文档头部
 * 包含：标题 H1，可带副标题/描述
 */
export default function DocumentHeader({ post, notice }) {
  const currentPost = post || notice

  if (!currentPost) {
    return null
  }

  return (
    <header className='gitbook3-document-header'>
      <h1 className='gitbook3-document-title'>
        {siteConfig('POST_TITLE_ICON') && (
          <NotionIcon icon={currentPost?.pageIcon} />
        )}
        {currentPost?.title}
      </h1>
      
      {currentPost?.summary && (
        <p className='gitbook3-document-description'>
          {currentPost.summary}
        </p>
      )}
    </header>
  )
}
