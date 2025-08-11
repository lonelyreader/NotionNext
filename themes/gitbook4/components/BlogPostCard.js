const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected =
    decodeURIComponent(router.asPath.split('?')[0]) === post?.href

  return (
    <Link href={post?.href} passHref>
      <div className={`${className} group relative p-[1px] rounded-2xl bg-brand-gradient transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/25`}>
        <div
          key={post.id}
          className={`relative glass rounded-2xl py-3 px-4 cursor-pointer transition-all duration-200 group-hover:bg-white/12 h-full
                      ${currentSelected ? 'border-brand-600/60 bg-brand-600/20' : ''}`}>
          <div className='w-full select-none flex items-center gap-2'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post?.pageIcon} />
            )}
            <span className={`font-medium transition-colors duration-200 ${
              currentSelected
                ? 'text-brand-600 font-semibold'
                : 'text-white/90 group-hover:text-white'
            }`}>
              {post.title}
            </span>
          </div>
          {/* 最新文章加个红点 */}
          {post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE') && (
            <div className="absolute -top-1 -right-1">
              <Badge />
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}