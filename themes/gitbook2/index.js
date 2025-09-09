import { AdSlot } from '@/components/GoogleAdsense'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import dynamic from 'next/dynamic'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef } from 'react'
import BlogPostBar from './components/BlogPostBar'
import CONFIG from './config'
import { Style } from './style'

const AlgoliaSearchModal = dynamic(
  () => import('@/components/AlgoliaSearchModal'),
  { ssr: false }
)

// 主题组件
const BlogListScroll = dynamic(() => import('./components/BlogListScroll'), {
  ssr: false
})
const BlogArchiveItem = dynamic(() => import('./components/BlogArchiveItem'), {
  ssr: false
})
const ArticleLock = dynamic(() => import('./components/ArticleLock'), {
  ssr: false
})
const ArticleInfo = dynamic(() => import('./components/ArticleInfo'), {
  ssr: false
})
const Comment = dynamic(() => import('@/components/Comment'), { ssr: false })
const ArticleAround = dynamic(() => import('./components/ArticleAround'), {
  ssr: false
})
const ShareBar = dynamic(() => import('@/components/ShareBar'), { ssr: false })
const TopBar = dynamic(() => import('./components/TopBar'), { ssr: false })
const Header = dynamic(() => import('./components/Header'), { ssr: false })
const NavBar = dynamic(() => import('./components/NavBar'), { ssr: false })
const SideBar = dynamic(() => import('./components/SideBar'), { ssr: false })
const JumpToTopButton = dynamic(() => import('./components/JumpToTopButton'), {
  ssr: false
})
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })
const SearchInput = dynamic(() => import('./components/SearchInput'), {
  ssr: false
})
const WWAds = dynamic(() => import('@/components/WWAds'), { ssr: false })
const BlogListPage = dynamic(() => import('./components/BlogListPage'), {
  ssr: false
})
const RecommendPosts = dynamic(() => import('./components/RecommendPosts'), {
  ssr: false
})

// 主题全局状态
const ThemeGlobalGitbook2 = createContext()
export const useGitbook2Global = () => useContext(ThemeGlobalGitbook2)

/**
 * 基础布局 - GitBook风格三栏布局
 *
 * @param {*} props
 * @returns
 */
const LayoutBase = props => {
  const { children, slotTop } = props
  const { onLoading, fullWidth } = useGlobal()
  const searchModal = useRef(null)

  return (
    <ThemeGlobalGitbook2.Provider value={{ searchModal }}>
      <div
        id='theme-gitbook2'
        className={`${siteConfig('FONT_STYLE')} min-h-screen flex flex-col dark:text-gray-300 bg-white dark:bg-black scroll-smooth`}>
        <Style />

        {/* GitBook风格三栏布局 */}
        <div className='flex-1 flex'>
          {/* 左侧边栏 - 按Category分组的文章列表 */}
          <div className='hidden lg:block w-72 flex-shrink-0 border-r dark:border-gray-800 border-gray-200 bg-gray-50 dark:bg-gray-900'>
            <SideBar {...props} />
          </div>

          {/* 中间内容区域 */}
          <div className='flex-1 flex flex-col min-w-0'>
            <div className='flex-1 flex'>
              {/* 主内容区域 */}
              <div className='flex-1 min-w-0'>
                <Transition
                  show={!onLoading}
                  appear={true}
                  enter='transition ease-in-out duration-700 transform order-first'
                  enterFrom='opacity-0 translate-y-16'
                  enterTo='opacity-100'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 -translate-y-16'
                  unmount={false}>
                  {slotTop}
                  {children}
                </Transition>
              </div>

              {/* 右侧TOC区域 */}
              <div className='hidden xl:block w-80 flex-shrink-0 border-l dark:border-gray-800 border-gray-200 bg-gray-50 dark:bg-gray-900'>
                <div className='sticky top-0 h-screen overflow-y-auto'>
                  <div className='p-6'>
                    <div className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      <i className='mr-2 fas fa-list' />
                      目录
                    </div>
                    <div id='toc-container'>
                      {/* TOC内容将由LayoutSlug动态加载 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 移动端抽屉按钮 */}
        <div className='lg:hidden fixed top-4 left-4 z-50'>
          <button
            id='mobile-sidebar-toggle'
            className='p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700'
            onClick={() => {
              const sidebar = document.getElementById('mobile-sidebar')
              if (sidebar) {
                sidebar.classList.toggle('translate-x-0')
                sidebar.classList.toggle('-translate-x-full')
              }
            }}>
            <i className='fas fa-bars text-gray-600 dark:text-gray-300' />
          </button>
        </div>

        {/* 移动端侧边栏抽屉 */}
        <div
          id='mobile-sidebar'
          className='lg:hidden fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 border-r dark:border-gray-800 border-gray-200 transform -translate-x-full transition-transform duration-300 ease-in-out z-40'>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>导航</h2>
              <button
                onClick={() => {
                  const sidebar = document.getElementById('mobile-sidebar')
                  if (sidebar) {
                    sidebar.classList.add('-translate-x-full')
                    sidebar.classList.remove('translate-x-0')
                  }
                }}
                className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'>
                <i className='fas fa-times text-gray-600 dark:text-gray-300' />
              </button>
            </div>
            <SideBar {...props} />
          </div>
        </div>

        {/* 移动端TOC抽屉按钮 */}
        <div className='xl:hidden fixed top-4 right-4 z-50'>
          <button
            id='mobile-toc-toggle'
            className='p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700'
            onClick={() => {
              const toc = document.getElementById('mobile-toc')
              if (toc) {
                toc.classList.toggle('translate-x-0')
                toc.classList.toggle('translate-x-full')
              }
            }}>
            <i className='fas fa-list text-gray-600 dark:text-gray-300' />
          </button>
        </div>

        {/* 移动端TOC抽屉 */}
        <div
          id='mobile-toc'
          className='xl:hidden fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-900 border-l dark:border-gray-800 border-gray-200 transform translate-x-full transition-transform duration-300 ease-in-out z-40'>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>目录</h2>
              <button
                onClick={() => {
                  const toc = document.getElementById('mobile-toc')
                  if (toc) {
                    toc.classList.add('translate-x-full')
                    toc.classList.remove('translate-x-0')
                  }
                }}
                className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'>
                <i className='fas fa-times text-gray-600 dark:text-gray-300' />
              </button>
            </div>
            <div id='mobile-toc-container'>
              {/* TOC内容将由LayoutSlug动态加载 */}
            </div>
          </div>
        </div>

        <div className='fixed right-4 bottom-4 z-20'>
          <JumpToTopButton />
        </div>

        {/* 搜索框 */}
        <AlgoliaSearchModal cRef={searchModal} {...props} />
      </div>
    </ThemeGlobalGitbook2.Provider>
  )
}

/**
 * 博客首页 - GitBook风格
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

/**
 * 博客列表 - GitBook风格
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  const { posts = [] } = props

  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <div className='max-w-4xl mx-auto px-6 py-8'>
        {/* 页面标题 */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
            文档中心
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>
            浏览所有已发布的文章和文档
          </p>
        </div>

        {/* 文章列表 */}
        <div className='space-y-6'>
          {posts.map(post => (
            <div
              key={post.id}
              className='border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow duration-200'
            >
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <SmartLink
                    href={post.href}
                    className='text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                  >
                    {post.pageIcon && (
                      <span className='mr-2'>{post.pageIcon}</span>
                    )}
                    {post.title}
                  </SmartLink>
                  
                  {post.summary && (
                    <p className='mt-2 text-gray-600 dark:text-gray-400 line-clamp-3'>
                      {post.summary}
                    </p>
                  )}
                  
                  <div className='mt-4 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400'>
                    {post.category && (
                      <span className='flex items-center'>
                        <i className='mr-1 fas fa-folder' />
                        {post.category}
                      </span>
                    )}
                    <span className='flex items-center'>
                      <i className='mr-1 fas fa-calendar' />
                      {post.publishDay}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <span className='flex items-center'>
                        <i className='mr-1 fas fa-tags' />
                        {post.tags.slice(0, 3).join(', ')}
                        {post.tags.length > 3 && ` +${post.tags.length - 3}`}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className='ml-4'>
                  <SmartLink
                    href={post.href}
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200'
                  >
                    阅读更多
                    <i className='ml-1 fas fa-arrow-right' />
                  </SmartLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className='text-center py-12'>
            <i className='fas fa-book-open text-4xl text-gray-400 dark:text-gray-600 mb-4' />
            <p className='text-gray-500 dark:text-gray-400'>
              暂无文章发布
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * 搜索页
 * 也是博客列表
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  const { keyword } = props

  useEffect(() => {
    if (isBrowser) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-red-500 border-b border-dashed'
        }
      })
    }
  }, [])

  const slotTop = siteConfig('ALGOLIA_APP_ID') ? null : (
    <SearchInput {...props} />
  )

  return <LayoutPostList {...props} slotTop={slotTop} />
}

/**
 * 归档页
 * @param {*} props
 * @returns
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <>
      <div className='mb-10 pb-20 md:py-12 p-3  min-h-screen w-full'>
        {Object.keys(archivePosts).map(archiveTitle => (
          <BlogArchiveItem
            key={archiveTitle}
            archiveTitle={archiveTitle}
            archivePosts={archivePosts}
          />
        ))}
      </div>
    </>
  )
}

/**
 * 文章详情 - GitBook风格布局
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword, prev, next, recommendPosts } = props
  const { fullWidth } = useGlobal()

  // 动态加载TOC组件
  const TableOfContents = dynamic(() => import('./components/TableOfContents'), {
    ssr: false
  })

  // 动态加载Article组件
  const Article = dynamic(() => import('./components/Article'), {
    ssr: false
  })

  useEffect(() => {
    // 在文章页面加载时，将TOC内容插入到指定容器
    if (post && !lock) {
      const tocContainer = document.getElementById('toc-container')
      const mobileTocContainer = document.getElementById('mobile-toc-container')
      
      if (tocContainer || mobileTocContainer) {
        // 这里将通过React Portal或直接DOM操作来插入TOC内容
        // 具体实现将在TableOfContents组件中处理
      }
    }
  }, [post, lock])

  return (
    <>
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && post && (
        <div className='min-h-screen bg-white dark:bg-black'>
          {/* 文章内容区域 */}
          <div className='max-w-4xl mx-auto px-6 py-8'>
            {/* 文章信息 */}
            <ArticleInfo post={post} />

            {/* 文章主体 */}
            <div id='article-wrapper' className='prose prose-lg max-w-none dark:prose-invert'>
              <Article post={post} />
            </div>

            {/* 文章底部信息 */}
            <div className='mt-12 pt-8 border-t dark:border-gray-800 border-gray-200'>
              {post?.type === 'Post' && (
                <>
                  <ArticleAround prev={prev} next={next} />
                  <RecommendPosts recommendPosts={recommendPosts} />
                </>
              )}
              
              {/* 评论区 */}
              <Comment frontMatter={post} />
            </div>
          </div>

          {/* 桌面端TOC */}
          <div className='hidden xl:block'>
            <TableOfContents post={post} />
          </div>

          {/* 移动端TOC */}
          <div className='xl:hidden'>
            <TableOfContents post={post} mobile={true} />
          </div>
        </div>
      )}
    </>
  )
}

/**
 * 404
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  const { post } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(
        () => {
          if (isBrowser) {
            const article = document.querySelector('#article-wrapper #notion-article')
            if (!article) {
              router.push('/404').then(() => {
                console.warn('找不到页面', router.asPath)
              })
            }
          }
        },
        waiting404
      )
    }
  }, [post])
  return <>404 Not found.</>
}

/**
 * 分类列表
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categoryOptions?.map(category => {
          return (
            <SmartLink
              key={category.name}
              href={`/category/${category.name}`}
              passHref
              legacyBehavior>
              <div
                className={
                  'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'
                }>
                <i className='mr-4 fas fa-folder' />
                {category.name}({category.count})
              </div>
            </SmartLink>
          )
        })}
      </div>
    </>
  )
}

/**
 * 标签列表
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <>
      <div id='tags-list' className='duration-200 flex flex-wrap'>
        {tagOptions.map(tag => {
          return (
            <div key={tag.name} className='p-2'>
              <SmartLink
                key={tag}
                href={`/tag/${encodeURIComponent(tag.name)}`}
                passHref
                className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200  mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-gray-800`}>
                <div className='font-light dark:text-gray-400'>
                  <i className='mr-1 fas fa-tag' />{' '}
                  {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
                </div>
              </SmartLink>
            </div>
          )
        })}
      </div>
    </>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
