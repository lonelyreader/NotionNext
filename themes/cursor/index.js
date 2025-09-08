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
import SidebarToggle from './components/SidebarToggle'
import CONFIG from './config'
import { Style } from './style'

const AlgoliaSearchModal = dynamic(
  () => import('@/components/AlgoliaSearchModal'),
  { ssr: false }
)
const WWAds = dynamic(() => import('@/components/WWAds'), { ssr: false })

// 主题全局变量
const ThemeGlobalGitbook = createContext()
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook)

/**
 * 给最新的文章标一个红点
 */
function getNavPagesWithLatest(allNavPages, latestPosts, post) {
  // localStorage 保存id和上次阅读时间戳： posts_read_time = {"${post.id}":"Date()"}
  const postsReadTime = isBrowser() ? JSON.parse(localStorage.getItem('posts_read_time') || '{}') : {}
  const latestPostIds = latestPosts?.map(post => post.id) || []
  return allNavPages?.map(item => {
    const res = { ...item }
    if (item.type === 'Post') {
      res.isLatest = latestPostIds.includes(item.id)
      res.isRead = postsReadTime[item.id] && new Date(postsReadTime[item.id]) > new Date(item.lastEditedTime)
    } else {
      res.children = getNavPagesWithLatest(item.children, latestPosts, post)
    }
    return res
  })
}

/**
 * 基础布局 - Cursor风格
 * 将cursor的界面元素合理映射到博客功能
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
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages)
  const [activeCategory, setActiveCategory] = useState('all')
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false)
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false)

  const searchModal = useRef(null)

  useEffect(() => {
    setFilteredNavPages(getNavPagesWithLatest(allNavPages, latestPosts, post))
  }, [router])

  const CURSOR_LOADING_COVER = siteConfig(
    'CURSOR_LOADING_COVER',
    true,
    CONFIG
  )

  // 分类按钮配置 - 映射到博客功能
  const categoryButtons = [
    { id: 'all', name: '全部文章', icon: 'fas fa-list', color: '#007acc' },
    { id: 'latest', name: '最新文章', icon: 'fas fa-clock', color: '#28ca42' },
    { id: 'category', name: '分类浏览', icon: 'fas fa-folder', color: '#ffbd2e' },
    { id: 'tags', name: '标签云', icon: 'fas fa-tags', color: '#ff5f57' },
    { id: 'archive', name: '归档', icon: 'fas fa-archive', color: '#9b59b6' }
  ]

  // 处理分类切换
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    // 这里可以根据分类过滤文章
    // 实际实现中可以根据categoryId过滤filteredNavPages
  }

  // 切换侧边栏
  const toggleLeftSidebar = () => {
    setLeftSidebarCollapsed(!leftSidebarCollapsed)
  }

  const toggleRightSidebar = () => {
    setRightSidebarCollapsed(!rightSidebarCollapsed)
  }

  return (
    <ThemeGlobalGitbook.Provider
      value={{
        searchModal,
        tocVisible,
        changeTocVisible,
        filteredNavPages,
        setFilteredNavPages,
        allNavPages,
        pageNavVisible,
        changePageNavVisible,
        post
      }}>
      <Style />

      <div
        id='theme-cursor'
        className={`${siteConfig('FONT_STYLE')} scroll-smooth w-full h-full min-h-screen`}>
        <AlgoliaSearchModal cRef={searchModal} {...props} />

        {/* Cursor风格顶部导航栏 */}
        <div className="cursor-header">
          <div className="header-left">
            <button 
              onClick={toggleLeftSidebar}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fas fa-bars"></i>
            </button>
            <span className="font-medium">NotionNext Blog</span>
          </div>
          <div className="header-right">
            <button className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>

        {/* Cursor工作区 */}
        <div className="cursor-workspace">
          {/* 左侧边栏 - 映射到博客分类功能 */}
          <div className={`cursor-sidebar ${leftSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-title">
              <span>EXPLORER</span>
              <button 
                onClick={toggleLeftSidebar}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
            
            {/* 分类按钮组 */}
            <div className="category-buttons">
              {categoryButtons.map(button => (
                <button
                  key={button.id}
                  className={`category-button ${activeCategory === button.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(button.id)}
                >
                  <i className={`category-icon ${button.icon}`} style={{ color: button.color }}></i>
                  {button.name}
                </button>
              ))}
            </div>

            {/* 文章列表 */}
            <div className="sidebar-content">
              <div className="sidebar-section">
                <div className="section-title">文章列表</div>
                  <NavPostList filteredNavPages={filteredNavPages} {...props} />
                </div>
            </div>
          </div>

          {/* 主编辑区域 */}
          <div className="cursor-editor-area">
            {/* 标签页栏 */}
            <div className="cursor-tabs">
              <div className="tab active">
                <span>{post ? post.title : '博客首页'}</span>
                <span className="tab-close">×</span>
              </div>
            </div>

            {/* 编辑器内容区域 */}
            <div className="cursor-editor-content">
              {slotTop}
              
              {post ? (
                <div className="article-content">
                  {/* 文章标题 */}
                  <div className="article-header mb-8">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    {post.summary && (
                      <p className="text-lg opacity-80">{post.summary}</p>
                    )}
                    <div className="article-meta mt-4 text-sm opacity-60">
                      {post.publishDay && <span>发布于 {post.publishDay}</span>}
                      {post.tags && post.tags.length > 0 && (
                        <span className="ml-4">
                          标签: {post.tags.map(tag => tag.name).join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Notion文章内容 */}
                  <NotionPage post={post} />
                </div>
              ) : (
                <div className="blog-list-content">
                  <h1>博客文章</h1>
                  <div className="blog-posts-grid">
                    {filteredNavPages?.filter(item => item.type === 'Post').map(post => (
                      <div key={post.id} className="blog-post-item">
                        <h3 className="blog-post-title">
                          <SmartLink href={`/${post.slug}`}>
                            {post.title}
                          </SmartLink>
                        </h3>
                        {post.summary && (
                          <p className="blog-post-summary">{post.summary}</p>
                        )}
                        <div className="blog-post-meta">
                          {post.publishDay && <span>发布于 {post.publishDay}</span>}
                          {post.tags && post.tags.length > 0 && (
                            <span>标签: {post.tags.map(tag => tag.name).join(', ')}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 广告位 */}
              <AdSlot type='in-article' />
              <WWAds className='w-full' orientation='horizontal' />
            </div>

            {/* 状态栏 */}
            <div className="cursor-status-bar">
              <div className="status-left">
                <div className="status-item">
                  <i className="fas fa-code-branch"></i>
                  <span>main</span>
                </div>
                <div className="status-item">
                  <i className="fas fa-check"></i>
                  <span>0 errors</span>
                </div>
              </div>
              <div className="status-right">
                <div className="status-item">
                  <i className="fas fa-language"></i>
                  <span>Markdown</span>
                </div>
                <div className="status-item">
                  <i className="fas fa-terminal"></i>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧边栏 - 信息卡片 */}
          {!fullWidth && (
            <div className={`cursor-info-sidebar ${rightSidebarCollapsed ? 'collapsed' : ''}`}>
              <div className="sidebar-title">
                <span>OUTLINE</span>
                <button 
                  onClick={toggleRightSidebar}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="sidebar-content">
                <InfoCard {...props} />
                  {slotRight}
              </div>
            </div>
          )}
        </div>

        {/* 加载遮罩 */}
        {CURSOR_LOADING_COVER && <LoadingCover />}

        {/* 其他组件 */}
        <JumpToTopButton />
        <Live2D />
      </div>
    </ThemeGlobalGitbook.Provider>
  )
}

/**
 * 首页布局
 */
const LayoutIndex = props => {
  return <LayoutBase {...props} />
}

/**
 * 文章页布局
 */
const LayoutPost = props => {
  return <LayoutBase {...props} />
}

/**
 * 归档页布局
 */
const LayoutArchive = props => {
  return <LayoutBase {...props} />
}

/**
 * 分类页布局
 */
const LayoutCategory = props => {
  return <LayoutBase {...props} />
}

/**
 * 标签页布局
 */
const LayoutTag = props => {
  return <LayoutBase {...props} />
}

/**
 * 搜索页布局
 */
const LayoutSearch = props => {
  return <LayoutBase {...props} />
}

/**
 * 404页面布局
 */
const Layout404 = props => {
  return <LayoutBase {...props} />
}

/**
 * 登录页布局
 */
const LayoutSignIn = props => {
  return <LayoutBase {...props} />
}

/**
 * 注册页布局
 */
const LayoutSignUp = props => {
  return <LayoutBase {...props} />
}

/**
 * 仪表板布局
 */
const LayoutDashboard = props => {
  return <LayoutBase {...props} />
}

export {
  LayoutIndex,
  LayoutPost,
  LayoutArchive,
  LayoutCategory,
  LayoutTag,
  LayoutSearch,
  Layout404,
  LayoutSignIn,
  LayoutSignUp,
  LayoutDashboard
}