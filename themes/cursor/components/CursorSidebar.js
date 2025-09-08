'use client'

import { useState } from 'react'
import NavPostList from './NavPostList'
import InfoCard from './InfoCard'
import Catalog from './Catalog'

/**
 * Cursor风格侧边栏组件
 */
const CursorSidebar = ({ activeView, filteredNavPages, ...props }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const renderContent = () => {
    switch (activeView) {
      case 'explorer':
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">资源管理器</div>
              <NavPostList filteredNavPages={filteredNavPages} {...props} />
            </div>
            <div className="sidebar-section">
              <div className="section-title">信息</div>
              <InfoCard {...props} />
            </div>
          </div>
        )
      case 'search':
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">搜索</div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-search"></i>
                搜索文件
              </div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-code"></i>
                搜索符号
              </div>
            </div>
          </div>
        )
      case 'git':
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">源代码管理</div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fab fa-git-alt"></i>
                更改
              </div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-code-branch"></i>
                分支
              </div>
            </div>
          </div>
        )
      case 'debug':
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">运行和调试</div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-play"></i>
                运行
              </div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-bug"></i>
                调试
              </div>
            </div>
          </div>
        )
      case 'extensions':
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">扩展</div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-download"></i>
                安装的扩展
              </div>
              <div className="sidebar-item">
                <i className="sidebar-item-icon fas fa-star"></i>
                推荐的扩展
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">资源管理器</div>
              <NavPostList filteredNavPages={filteredNavPages} {...props} />
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`cursor-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <span>{activeView === 'explorer' ? '资源管理器' : 
               activeView === 'search' ? '搜索' :
               activeView === 'git' ? '源代码管理' :
               activeView === 'debug' ? '运行和调试' : '扩展'}</span>
        <button 
          className="sidebar-toggle"
          onClick={toggleCollapse}
          title={collapsed ? '展开侧边栏' : '收起侧边栏'}
        >
          <i className={`fas fa-chevron-${collapsed ? 'right' : 'left'}`}></i>
        </button>
      </div>
      {!collapsed && renderContent()}
    </div>
  )
}

export default CursorSidebar
