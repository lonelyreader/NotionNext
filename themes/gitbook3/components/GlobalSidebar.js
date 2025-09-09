import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useState, useRef } from 'react'
import CONFIG from '../config'
import SearchInput from './SearchInput'
import NavPostList from './NavPostList'
import InfoCard from './InfoCard'
import { useGitBookGlobal } from '../index'
import Collapse from '@/components/Collapse'
import DarkModeButton from '@/components/DarkModeButton'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { MenuItemDrop } from './MenuItemDrop'

/**
 * GitBook3 左侧全局侧栏
 * 包含：工具条（隐藏按钮+搜索框+菜单按钮）+ 导航分组与列表
 */
export default function GlobalSidebar(props) {
  const { slotLeft, filteredNavPages, allNavPages, customNav, customMenu } = props
  const { fullWidth, locale } = useGlobal()
  const { isCollapsed, isTemporarilyOpen, toggleSidebar } = useGitBookGlobal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const collapseRef = useRef(null)

  // 计算侧栏是否应该显示
  const shouldShow = !isCollapsed || isTemporarilyOpen

  // 菜单项配置
  const defaultLinks = [
    {
      icon: 'fas fa-th',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('GITBOOK_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('GITBOOK_BOOK_MENU_TAG', null, CONFIG)
    },
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('GITBOOK_MENU_ARCHIVE', null, CONFIG)
    }
  ]

  let links = defaultLinks.concat(customNav)

  // 如果开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // 如果全宽模式，不显示侧栏
  if (fullWidth) {
    return null
  }

  return (
    <aside 
      id='gitbook3-global-sidebar' 
      className={`gitbook3-global-sidebar ${isCollapsed ? 'collapsed' : ''} ${isTemporarilyOpen ? 'temporarily-open' : ''}`}
      role="navigation"
      aria-label="Global navigation"
      aria-expanded={shouldShow}>
      
      {/* 工具条：隐藏按钮 + 搜索框 + 菜单按钮 */}
      <div className='gitbook3-sidebar-toolbar'>
        <div className='gitbook3-toolbar-content'>
          {/* 隐藏侧栏按钮 */}
          <button
            className='gitbook3-hide-sidebar-btn'
            onClick={toggleSidebar}
            title={isCollapsed ? 'Show sidebar' : 'Hide sidebar'}
            aria-label={isCollapsed ? 'Show sidebar' : 'Hide sidebar'}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              {isCollapsed ? (
                <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 01-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
              ) : (
                <path d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z"/>
              )}
            </svg>
          </button>

          {/* 搜索框 */}
          <div className='gitbook3-sidebar-search'>
            <SearchInput className='gitbook3-search-input' />
          </div>

          {/* 菜单按钮 */}
          <button
            onClick={toggleMenuOpen}
            className='gitbook3-menu-btn'
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <i className='fas fa-times' />
            ) : (
              <i className='fa-solid fa-bars' />
            )}
          </button>
        </div>
      </div>

      {/* 折叠菜单 */}
      <Collapse
        type='vertical'
        collapseRef={collapseRef}
        isOpen={isMenuOpen}
        className='gitbook3-sidebar-menu-collapse'>
        <div className='gitbook3-sidebar-menu-content'>
          {/* 全局菜单项 */}
          <div className='gitbook3-sidebar-menu-items'>
            {links &&
              links?.map((link, index) => (
                <MenuItemDrop key={index} link={link} />
              ))}
          </div>

          {/* 用户操作 */}
          <div className='gitbook3-sidebar-user-actions'>
            {/* 登录相关 */}
            {enableClerk && (
              <>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <button className='gitbook-button primary'>
                      {locale.COMMON.SIGN_IN}
                    </button>
                  </SignInButton>
                </SignedOut>
                <UserButton />
              </>
            )}
            <DarkModeButton className='text-sm items-center h-full' />
          </div>
        </div>
      </Collapse>

      {/* 导航内容区域 */}
      <div className='gitbook3-sidebar-content'>
        {/* 品牌标识 */}
        <div className='gitbook3-sidebar-brand'>
          <div className='gitbook3-brand-icon'>G</div>
          <span className='gitbook3-brand-text'>{siteConfig('TITLE')}</span>
        </div>

        {/* 嵌入内容 */}
        {slotLeft}

        {/* 导航列表 */}
        <NavPostList filteredNavPages={filteredNavPages} {...props} />
      </div>

      {/* 底部信息卡片 */}
      <div className='gitbook3-sidebar-footer'>
        <InfoCard {...props} />
      </div>
    </aside>
  )
}
