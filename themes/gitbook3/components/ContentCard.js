import { siteConfig } from '@/lib/config'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import Comment from '@/components/Comment'
import CategoryItem from './CategoryItem'
import TagItemMini from './TagItemMini'
import ArticleAround from './ArticleAround'
import { AdSlot } from '@/components/GoogleAdsense'
import WWAds from '@/components/WWAds'

/**
 * GitBook3 内容卡片
 * 作为一张圆角卡片呈现正文内容
 */
export default function ContentCard({ post, prev, next, children }) {
  if (!post) {
    return (
      <div className='gitbook3-content-card'>
        <div className='gitbook3-content-body'>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className='gitbook3-content-card'>
      <div className='gitbook3-content-body'>
        {/* Notion文章主体 */}
        <section className='gitbook3-article-section'>
          <div id='article-wrapper'>
            <NotionPage post={post} />
          </div>

          {/* 分享 */}
          <ShareBar post={post} />
          
          {/* 文章分类和标签信息 */}
          <div className='gitbook3-article-meta'>
            {siteConfig('POST_DETAIL_CATEGORY') && post?.category && (
              <CategoryItem category={post.category} />
            )}
            <div className='gitbook3-article-tags'>
              {siteConfig('POST_DETAIL_TAG') &&
                post?.tagItems?.map(tag => (
                  <TagItemMini key={tag.name} tag={tag} />
                ))}
            </div>
          </div>

          {/* 上一篇/下一篇 */}
          {post?.type === 'Post' && (
            <ArticleAround prev={prev} next={next} />
          )}

          {/* 广告 */}
          <AdSlot type='in-article' />
          <WWAds className='w-full' orientation='horizontal' />

          {/* 评论 */}
          <Comment frontMatter={post} />
        </section>
      </div>
    </div>
  )
}
