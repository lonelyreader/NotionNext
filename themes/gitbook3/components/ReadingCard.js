import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import Comment from '@/components/Comment'
import CategoryItem from './CategoryItem'
import TagItemMini from './TagItemMini'
import ArticleAround from './ArticleAround'
import ArticleInfo from './ArticleInfo'
import Catalog from './Catalog'
import { AdSlot } from '@/components/GoogleAdsense'
import WWAds from '@/components/WWAds'

/**
 * GitBook3 阅读卡片
 * 合并了原来的ContentColumn和RightAside，形成一张一体化的阅读卡片
 * 遵循苹果HIG的"材料/材质"与层次原则
 */
export default function ReadingCard({ post, prev, next, children, notice }) {
  if (!post) {
    return (
      <div className='gitbook3-reading-card'>
        <div className='gitbook3-card-body'>
          <div className='gitbook3-main-pane'>
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='gitbook3-reading-card' className='gitbook3-reading-card'>
      {/* CardHeader：文档抬头区域 */}
      <div className='gitbook3-card-header'>
        {notice && <div className='gitbook3-notice'>{notice.text}</div>}
        <h1 className='gitbook3-document-title'>
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post?.pageIcon} />
          )}{' '}
          {post.title}
        </h1>
        {post.summary && (
          <p className='gitbook3-document-description'>{post.summary}</p>
        )}
      </div>

      {/* CardBody：卡片正文区域，内部是"两列内容布局" */}
      <div className='gitbook3-card-body'>
        {/* MainPane：正文内容区 */}
        <div className='gitbook3-main-pane'>
          {/* 文章内容 */}
          <NotionPage post={post} />

          {/* 分享、标签、上一篇/下一篇 */}
          <ShareBar post={post} />
          {post.category && (
            <div className='flex space-x-2'>
              <CategoryItem category={post.category} />
            </div>
          )}
          {post.tags && (
            <div className='flex justify-start flex-wrap'>
              {post.tags.map(tag => (
                <TagItemMini key={tag.name} tag={tag} />
              ))}
            </div>
          )}
          <ArticleAround prev={prev} next={next} />
          <AdSlot type='native' />
          <Comment frontMatter={post} />
        </div>

        {/* SidePane：辅助信息（MetaCard 与 ToC） */}
        <div className='gitbook3-side-pane'>
          <ArticleInfo post={post} />
          <Catalog post={post} />
        </div>
      </div>
    </div>
  )
}
