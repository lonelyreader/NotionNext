'use client'

import Comment from '@/components/Comment'
import { AdSlot } from '@/components/GoogleAdsense'
import Live2D from '@/components/Live2D'
import LoadingCover from '@/components/LoadingCover'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import DashboardBody from '@/components/ui/dashboard/DashboardBody'
import DashboardHeader from '@/components/ui/dashboard/DashboardHeader'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { getShortId } from '@/lib/utils/pageId'
import { SignIn, SignUp } from '@clerk/nextjs'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Announcement from './components/Announcement'
import ArticleAround from './components/ArticleAround'
import ArticleInfo from './components/ArticleInfo'
import { ArticleLock } from './components/ArticleLock'
import BlogArchiveItem from './components/BlogArchiveItem'
import BottomMenuBar from './components/BottomMenuBar'
import Catalog from './components/Catalog'
import CatalogDrawerWrapper from './components/CatalogDrawerWrapper'
import CategoryItem from './components/CategoryItem'
import Footer from './components/Footer'
import Header from './components/Header'
import InfoCard from './components/InfoCard'
import JumpToTopButton from './components/JumpToTopButton'
import NavPostList from './components/NavPostList'
import PageNavDrawer from './components/PageNavDrawer'
import RevolverMaps from './components/RevolverMaps'
import TagItemMini from './components/TagItemMini'
import CONFIG from './config'
import { Style } from './style'

const AlgoliaSearchModal = dynamic(
  () => import('@/components/AlgoliaSearchModal'),
  { ssr: false }
)
const WWAds = dynamic(() => import('@/components/WWAds'), { ssr: false })

// 主题全局变量
const ThemeGlobalGitbook2 = createContext()
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook2)

// 导航状态管理 - 三态状态机
const useNavState = () => {
  const [navState, setNavState] = useState('collapsed') // 'collapsed' | 'expanded' | 'pinned'
  
  const toggleNav = () => {
    setNavState(prev => {
      switch (prev) {
        case 'collapsed':
          return 'expanded'
        case 'expanded':
          return 'collapsed'
        case 'pinned':
          return 'collapsed'
        default:
          return 'collapsed'
      }
    })
  }
  
  const pinNav = () => {
    setNavState('pinned')
  }
  
  const collapseNav = () => {
    setNavState('collapsed')
  }
  
  const expandNav = () => {
    setNavState('expanded')
  }
  
  return { navState, toggleNav, pinNav, collapseNav, expandNav }
}

/**
 * 给最新的文章标一个红点
 */
function getNavPagesWithLatest(allNavPages, latestPosts, post) {
  // localStorage 保存id和上次阅读时间戳： posts_read_time = {"${post.id}":"Date()"}
  const postReadTime = JSON.parse(
    localStorage.getItem('post_read_time') || '{}'
  )
  if (post) {
    postReadTime[getShortId(post.id)] = new Date().getTime()
  }
  // 更新
  localStorage.setItem('post_read_time', JSON.stringify(postReadTime))

  return allNavPages?.map(item => {
    const res = {
      short_id: item.short_id,
      title: item.title || '',
      pageCoverThumbnail: item.pageCoverThumbnail || '',
      category: item.category || null,
      tags: item.tags || null,
      summary: item.summary || null,
      slug: item.slug,
      href: item.href,
      pageIcon: item.pageIcon || '',
      lastEditedDate: item.lastEditedDate
    }
    // 属于最新文章通常6篇 && (无阅读记录 || 最近更新时间大于上次阅读时间)
    if (
      latestPosts.some(post => post?.id.indexOf(item?.short_id) === 14) &&
      (!postReadTime[item.short_id] ||
        postReadTime[item.short_id] < new Date(item.lastEditedDate).getTime())
    ) {
      return { ...res, isLatest: true }
    } else {
      return res
    }
  })
}

/**
 * 基础布局
 * 采用左右两侧布局，移动端使用顶部导航栏
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const {
    children,
    post,
    allNavPages,
    latestPosts,
    slotLeft,
    slotRight,
    slotTop
  } = props
  const { fullWidth } = useGlobal()
  const router = useRouter()
  const [tocVisible, changeTocVisible] = useState(false)
  const [pageNavVisible, changePageNavVisible] = useState(false)
  const [navPinned, setNavPinned] = useState(false)
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages)
  const { navState, toggleNav, pinNav, collapseNav, expandNav } = useNavState()

  const searchModal = useRef(null)

  useEffect(() => {
    setFilteredNavPages(getNavPagesWithLatest(allNavPages, latestPosts, post))
  }, [router])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('nav-pinned', navPinned)
    }
  }, [navPinned])

  const GITBOOK_LOADING_COVER = siteConfig(
    'GITBOOK_LOADING_COVER',
    true,
    CONFIG
  )
  return (
      <ThemeGlobalGitbook2.Provider
        value={{
          searchModal,
          tocVisible,
          changeTocVisible,
          filteredNavPages,
          setFilteredNavPages,
          allNavPages,
          pageNavVisible,
          changePageNavVisible,
          navPinned,
          setNavPinned,
          navState,
          toggleNav,
          pinNav,
          collapseNav,
          expandNav
        }}>
      <Head>
        {/* Font Awesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Style />

      <div
        id='theme-gitbook2'
        className={`${siteConfig('FONT_STYLE')} pb-16 md:pb-0 bg-gray-100 dark:bg-gray-900 w-full h-screen overflow-hidden justify-center dark:text-gray-300`}>
        <AlgoliaSearchModal cRef={searchModal} {...props} />

        <main
          id='wrapper'
          className={`${siteConfig('LAYOUT_SIDEBAR_REVERSE') ? 'flex-row-reverse' : ''} relative flex w-full h-full`}
          style={{ padding: '16px 24px 32px 0' }}>
          
          {/* 左侧导航栏 - Liquid Glass 三态 */}
          {fullWidth ? null : (
            <>
              {/* Collapsed 状态 - 最小化按钮 */}
              {navState === 'collapsed' && (
                <div className='hidden md:block nav-collapsed'>
                  <div className='h-full flex flex-col w-12 shell-container'>
                    <div className='flex-shrink-0 p-2 flex justify-center items-center'>
                      <button
                        onClick={expandNav}
                        className='pill-hover w-8 h-8 flex items-center justify-center'
                        aria-label='打开导航'
                        title='打开导航'
                      >
                        <i className='fa-solid fa-indent text-sm' />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded 状态 - 悬浮面板 */}
              {navState === 'expanded' && (
                <>
                  {/* Scrim 遮罩 */}
                  <div 
                    className='fixed inset-0 bg-black bg-opacity-20 z-40'
                    onClick={collapseNav}
                  />
                  <div className='hidden md:block nav-expanded liquid-glass'>
                    <div className='h-full flex flex-col'>
                      {/* 关闭按钮 - 面板内部左上角 */}
                      <div className='flex-shrink-0 p-4 flex justify-end items-start'>
                        <button
                          onClick={collapseNav}
                          className='pill-hover w-8 h-8 flex items-center justify-center rounded-full'
                          aria-label='关闭导航'
                          title='关闭导航'
                        >
                          <i className='fa-solid fa-outdent text-sm' />
                        </button>
                      </div>
                      
                      {/* 导航内容 */}
                      <div className='flex-1 overflow-y-auto scroll-hidden px-5 pb-4'>
                        {/* 嵌入 */}
                        {slotLeft}

                        {/* 所有文章列表 */}
                        <NavPostList filteredNavPages={filteredNavPages} {...props} />
                      </div>
                      
                      {/* 页脚 */}
                      <div className='flex-shrink-0 p-4'>
                        <Footer {...props} />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Pinned 状态 - 固定侧栏 */}
              {navState === 'pinned' && (
                <div className='hidden md:block nav-pinned shell-container'>
                  <div className='h-full flex flex-col'>
                    {/* 控制按钮 */}
                    <div className='flex-shrink-0 p-4 flex justify-between items-center'>
                      <button
                        onClick={collapseNav}
                        className='pill-hover w-8 h-8 flex items-center justify-center'
                        aria-label='收起导航'
                        title='收起导航'
                      >
                        <i className='fa-solid fa-outdent text-sm' />
                      </button>
                    </div>
                    
                    {/* 导航内容 */}
                    <div className='flex-1 overflow-y-auto scroll-hidden px-5 pb-4'>
                      {/* 嵌入 */}
                      {slotLeft}

                      {/* 所有文章列表 */}
                      <NavPostList filteredNavPages={filteredNavPages} {...props} />
                    </div>
                    
                    {/* 页脚 */}
                    <div className='flex-shrink-0 p-4'>
                      <Footer {...props} />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* 白纸容器 - 承载Header+中栏+右栏 */}
          <div className={`flex-1 h-full flex flex-col paper-container ${
            navState === 'collapsed' ? 'paper-collapsed' : 
            navState === 'expanded' ? 'paper-expanded' : 
            'paper-pinned'
          }`} style={{
            paddingLeft: navState === 'pinned' ? '280px' : '0'
          }}>
            {/* Header - 吸附在白纸顶部 */}
            <div className='flex-shrink-0'>
              <Header {...props} />
            </div>

            {/* 白纸内容区域 - 中栏+右栏 */}
            <div className='flex-1 flex overflow-hidden' style={{ gap: '24px' }}>
              {/* 中间内容区域 */}
              <div
                id='center-wrapper'
                className='flex flex-col flex-1 relative z-10 h-full'
                style={{ minWidth: 0 }}>
                <div
                  id='container-inner'
                  className={`w-full h-full overflow-y-auto scroll-hidden ${fullWidth ? 'px-8' : 'max-w-4xl px-8 lg:px-8'} justify-center mx-auto`}
                  style={{ paddingTop: '24px' }}>
                  {slotTop}
                  <WWAds className='w-full' orientation='horizontal' />

                  {children}

                  {/* Google广告 */}
                  <AdSlot type='in-article' />
                  <WWAds className='w-full' orientation='horizontal' />
                </div>

                {/* 底部 */}
                <div className='md:hidden'>
                  <Footer {...props} />
                </div>
              </div>

              {/* 右侧边栏 */}
              {fullWidth ? null : (
                <div
                  className={
                    'w-80 hidden lg:block flex-shrink-0 relative z-10 h-full'
                  }
                  style={{ minWidth: '320px' }}>
                  <div className='h-full overflow-y-auto scroll-hidden px-6' style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                    <ArticleInfo post={props?.post ? props?.post : props.notice} />

                    <div>
                      {/* 桌面端目录 */}
                      <Catalog {...props} />
                      {slotRight}
                      {router.route === '/' && (
                        <>
                          <InfoCard {...props} />
                          {siteConfig(
                            'GITBOOK_WIDGET_REVOLVER_MAPS',
                            null,
                            CONFIG
                          ) === 'true' && <RevolverMaps />}
                          {siteConfig('GITBOOK_LIVE2D_ENABLED', false, CONFIG) && <Live2D />}
                        </>
                      )}
                      {/* gitbook主题首页只显示公告 */}
                      <Announcement {...props} />
                    </div>

                    <AdSlot type='in-article' />
                    {siteConfig('GITBOOK_LIVE2D_ENABLED', false, CONFIG) && <Live2D />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {GITBOOK_LOADING_COVER && <LoadingCover />}

        {/* 回顶按钮 */}
        <JumpToTopButton />

        {/* 移动端导航抽屉 */}
        <PageNavDrawer {...props} filteredNavPages={filteredNavPages} />
        
        {/* 移动端 Liquid Glass 抽屉 */}
        <div className={`mobile-drawer-overlay ${pageNavVisible ? 'open' : ''}`} onClick={changePageNavVisible} />
        <div className={`mobile-drawer ${pageNavVisible ? 'open' : ''}`}>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold'>导航</h2>
              <button
                onClick={changePageNavVisible}
                className='pill-hover w-8 h-8 flex items-center justify-center'
                aria-label='关闭导航'
              >
                <i className='fas fa-times' />
              </button>
            </div>
            <div className='space-y-2'>
              {slotLeft}
              <NavPostList filteredNavPages={filteredNavPages} {...props} />
            </div>
            <div className='mt-8'>
              <Footer {...props} />
            </div>
          </div>
        </div>

        {/* 移动端底部导航栏 */}
        <BottomMenuBar {...props} />
      </div>
    </ThemeGlobalGitbook2.Provider>
  )
}

/**
 * 首页
 * 重定向到某个文章详情页
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  const router = useRouter()
  const index = siteConfig('GITBOOK_INDEX_PAGE', 'about', CONFIG)
  const [hasRedirected, setHasRedirected] = useState(false) // 添加状态追踪是否已重定向

  useEffect(() => {
    const tryRedirect = async () => {
      if (!hasRedirected) {
        // 仅当未重定向时执行
        setHasRedirected(true) // 更新状态，防止多次执行

        // 重定向到指定文章
        await router.push(index)

        // 使用setTimeout检查页面加载情况
        setTimeout(() => {
          const article = document.querySelector(
            '#article-wrapper #notion-article'
          )
          if (!article) {
            // 页面未找到，显示错误信息

            // 显示错误信息
            const containerInner = document.querySelector(
              '#theme-gitbook2 #container-inner'
            )
            const newHTML = `<h1 class="text-3xl pt-12 dark:text-gray-300">配置有误</h1><blockquote class="notion-quote notion-block-ce76391f3f2842d386468ff1eb705b92"><div>请在您的notion中添加一个slug为${index}的文章</div></blockquote>`
            containerInner?.insertAdjacentHTML('afterbegin', newHTML)
          }
        }, 2000)
      }
    }

    if (index) {
      // 重定向到指定页面
      tryRedirect()
    } else {
      // 无重定向配置
    }
  }, [index, hasRedirected]) // 将 hasRedirected 作为依赖确保状态变更时更新

  return null // 不渲染任何内容
}

/**
 * 文章列表 无
 * 全靠页面导航
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  return <></>
}

/**
 * 文章详情
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, prev, next, siteInfo, lock, validPassword } = props
  const router = useRouter()
  // 如果是文档首页文章，则修改浏览器标签
  const index = siteConfig('GITBOOK_INDEX_PAGE', 'about', CONFIG)
  const basePath = router.asPath.split('?')[0]
  const title =
    basePath?.indexOf(index) > 0
      ? `${post?.title} | ${siteInfo?.description}`
      : `${post?.title} | ${siteInfo?.title}`

  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector(
            '#article-wrapper #notion-article'
          )
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath)
            })
          }
        }
      }, waiting404)
    }
  }, [post])
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* 文章锁 */}
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && (
        <div id='container'>
          {/* title */}
          <h1 className='text-3xl pt-12  dark:text-gray-300'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post?.pageIcon} />
            )}
            {post?.title}
          </h1>

          {/* Notion文章主体 */}
          {post && (
            <section className='px-1'>
              <div id='article-wrapper'>
                <NotionPage post={post} />
              </div>

              {/* 分享 */}
              <ShareBar post={post} />
              {/* 文章分类和标签信息 */}
              <div className='flex justify-between'>
                {siteConfig('POST_DETAIL_CATEGORY') && post?.category && (
                  <CategoryItem category={post.category} />
                )}
                <div>
                  {siteConfig('POST_DETAIL_TAG') &&
                    post?.tagItems?.map(tag => (
                      <TagItemMini key={tag.name} tag={tag} />
                    ))}
                </div>
              </div>

              {post?.type === 'Post' && (
                <ArticleAround prev={prev} next={next} />
              )}

              {/* <AdSlot />
              <WWAds className='w-full' orientation='horizontal' /> */}

              <Comment frontMatter={post} />
            </section>
          )}

          {/* 文章目录 */}
          <CatalogDrawerWrapper {...props} />
        </div>
      )}
    </>
  )
}

/**
 * 没有搜索
 * 全靠页面导航
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  return <></>
}

/**
 * 归档页面基本不会用到
 * 全靠页面导航
 * @param {*} props
 * @returns
 */
const LayoutArchive = props => {
  const { archivePosts } = props

  return (
    <>
      <div className='mb-10 pb-20 md:py-12 py-3  min-h-full'>
        {Object.keys(archivePosts)?.map(archiveTitle => (
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
 * 404 页面
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  const router = useRouter()
  const { locale } = useGlobal()
  useEffect(() => {
    // 延时3秒如果加载失败就返回首页
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/').then(() => {
          // 页面未找到，已重定向到404
        })
      }
    }, 3000)
  }, [])

  return (
    <>
      <div className='md:-mt-20 text-black w-full h-screen text-center justify-center content-center items-center flex flex-col'>
        <div className='dark:text-gray-200'>
          <h2 className='inline-block border-r-2 border-gray-600 mr-2 px-3 py-2 align-top'>
            <i className='mr-2 fas fa-spinner animate-spin' />
            404
          </h2>
          <div className='inline-block text-left h-32 leading-10 items-center'>
            <h2 className='m-0 p-0'>{locale.NAV.PAGE_NOT_FOUND_REDIRECT}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * 分类列表
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  const { locale } = useGlobal()
  return (
    <>
      <div className='bg-white dark:bg-gray-700 py-10'>
        <div className='dark:text-gray-200 mb-5'>
          <i className='mr-4 fas fa-th' />
          {locale.COMMON.CATEGORY}:
        </div>
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
      </div>
    </>
  )
}

/**
 * 标签列表
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  const { locale } = useGlobal()

  return (
    <>
      <div className='bg-white dark:bg-gray-700 py-10'>
        <div className='dark:text-gray-200 mb-5'>
          <i className='mr-4 fas fa-tag' />
          {locale.COMMON.TAGS}:
        </div>
        <div id='tags-list' className='duration-200 flex flex-wrap'>
          {tagOptions?.map(tag => {
            return (
              <div key={tag.name} className='p-2'>
                <TagItemMini key={tag.name} tag={tag} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

/**
 * 登录页面
 * @param {*} props
 * @returns
 */
const LayoutSignIn = props => {
  const { post } = props
  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  return (
    <>
      <div className='grow mt-20'>
        {/* clerk预置表单 */}
        {enableClerk && (
          <div className='flex justify-center py-6'>
            <SignIn />
          </div>
        )}
        <div id='article-wrapper'>
          <NotionPage post={post} />
        </div>
      </div>
    </>
  )
}

/**
 * 注册页面
 * @param {*} props
 * @returns
 */
const LayoutSignUp = props => {
  const { post } = props
  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  return (
    <>
      <div className='grow mt-20'>
        {/* clerk预置表单 */}
        {enableClerk && (
          <div className='flex justify-center py-6'>
            <SignUp />
          </div>
        )}
        <div id='article-wrapper'>
          <NotionPage post={post} />
        </div>
      </div>
    </>
  )
}

/**
 * 仪表盘
 * @param {*} props
 * @returns
 */
const LayoutDashboard = props => {
  const { post } = props

  return (
    <>
      <div className='container grow'>
        <div className='flex flex-wrap justify-center -mx-4'>
          <div id='container-inner' className='w-full p-4'>
            {post && (
              <div id='article-wrapper' className='mx-auto'>
                <NotionPage {...props} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 仪表盘 */}
      <DashboardHeader />
      <DashboardBody />
    </>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutDashboard,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSignIn,
  LayoutSignUp,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
