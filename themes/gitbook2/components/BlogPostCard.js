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
        className={`${className} relative py-1.5 cursor-pointer px-1.5 rounded-md hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 dark:hover:from-blue-500/20 dark:hover:to-purple-600/20 transition-all duration-300
                    ${currentSelected ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/30 dark:to-purple-600/30 font-semibold border border-blue-400/30 dark:border-purple-400/30' : 'text-gray-700 dark:text-gray-300'}`}>
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
