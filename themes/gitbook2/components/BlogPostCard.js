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
        className={`${className} relative py-1.5 cursor-pointer px-1.5 rounded-md hover:bg-yellow-400/20 transition-all duration-300 border border-transparent hover:border-yellow-400/30
                    ${currentSelected ? 'text-yellow-300 bg-yellow-400/20 font-semibold border-yellow-400/40' : 'text-yellow-400'}`}>
        <div className='w-full select-none'>
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post?.pageIcon} />
          )}{' '}
          {post.title}
        </div>
        {/* 最新文章加个红点 */}
        {post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE') && (
          <Badge />
        )}
      </div>
    </SmartLink>
  )
}

export default BlogPostCard
