import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useState, useEffect } from 'react'
import CONFIG from '../config'
import SearchInput from './SearchInput'
import NavPostList from './NavPostList'
import InfoCard from './InfoCard'

/**
 * GitBook3 左侧全局侧栏
 * 包含：工具条（隐藏按钮+搜索框）+ 导航分组与列表
 */
export default function GlobalSidebar(props) {
  const { slotLeft, filteredNavPages, allNavPages } = props
  const { fullWidth } = useGlobal()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // 简单的侧栏切换，不使用localStorage
  const toggleSidebar = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    
    // 更新body类名以调整布局
    if (newState) {
      document.body.classList.add('gitbook3-sidebar-collapsed')
    } else {
      document.body.classList.remove('gitbook3-sidebar-collapsed')
    }
  }

  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd/Ctrl + B 切换侧栏
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isCollapsed])

  // 如果全宽模式，不显示侧栏
  if (fullWidth) {
    return null
  }

  return (
    <aside 
      id='gitbook3-global-sidebar' 
      className={`gitbook3-global-sidebar ${isCollapsed ? 'collapsed' : ''}`}
      role="navigation"
      aria-label="Global navigation">
      
      {/* 工具条：隐藏按钮 + 搜索框 */}
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
        </div>
      </div>

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
