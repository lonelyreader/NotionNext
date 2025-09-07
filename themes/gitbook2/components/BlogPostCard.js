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
        className={`${className} relative py-2 cursor-pointer px-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-yellow-400/20 backdrop-blur-sm
                    ${currentSelected ? 'text-white bg-white/20 font-semibold border-yellow-400/30' : 'text-white/80'}`}>
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
