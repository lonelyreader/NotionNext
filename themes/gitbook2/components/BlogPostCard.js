import Badge from '@/components/Badge'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected =
    decodeURIComponent(router.asPath.split('?')[0]) === post?.href

  return (
    <SmartLink href={post?.href} passHref>
      <div
        key={post.id}
        className={`${className} pill-hover sidebar-item relative cursor-pointer ${
          currentSelected ? 'active' : ''
        }`}
        role='link'
        tabIndex={0}
        aria-current={currentSelected ? 'page' : undefined}>
        <div className='w-full select-none flex items-center gap-2'>
          {siteConfig('POST_TITLE_ICON') && (
            <div className='flex-shrink-0 w-4 h-4 flex items-center justify-center'>
              <NotionIcon icon={post?.pageIcon} />
            </div>
          )}
          <span className={`flex-1 ${currentSelected ? 'font-semibold' : ''}`}>
            {post.title}
          </span>
          {/* 最新文章加个红点 */}
          {post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE') && (
            <div className='flex-shrink-0'>
              <Badge />
            </div>
          )}
        </div>
      </div>
    </SmartLink>
  )
}

export default BlogPostCard
