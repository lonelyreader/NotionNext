'use client'

import SmartLink from '@/components/SmartLink'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * Cursor风格的博客列表组件
 */
const CursorBlogList = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="blog-list-content">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">暂无文章</h2>
          <p className="opacity-60">还没有发布任何文章</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-list-content">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">文章列表</h1>
        <p className="opacity-60">共 {posts.length} 篇文章</p>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <SmartLink key={post.id} href={post.href}>
            <div className="blog-post-item">
              <div className="blog-post-title">
                {siteConfig('POST_TITLE_ICON') && (
                  <NotionIcon icon={post.pageIcon} />
                )}
                {post.title}
              </div>
              
              {post.summary && (
                <div className="blog-post-summary">
                  {post.summary}
                </div>
              )}
              
              <div className="blog-post-meta">
                {post.publishDay && (
                  <span>发布于 {post.publishDay}</span>
                )}
                {post.tags && post.tags.length > 0 && (
                  <span>
                    标签: {post.tags.map(tag => tag.name).join(', ')}
                  </span>
                )}
                {post.category && (
                  <span>分类: {post.category}</span>
                )}
              </div>
            </div>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

export default CursorBlogList
