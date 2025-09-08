'use client'

import { useState, useEffect } from 'react'

/**
 * 侧边栏切换按钮组件
 * 参考Cursor编辑器的设计
 */
const SidebarToggle = ({ side, className = '' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    const sidebar = document.querySelector(side === 'left' ? '.nav-sidebar' : '.info-sidebar')
    const body = document.body
    
    if (sidebar && body) {
      sidebar.classList.toggle('collapsed')
      body.classList.toggle(side === 'left' ? 'nav-collapsed' : 'info-collapsed')
      setIsCollapsed(!isCollapsed)
    }
  }

  return (
    <div 
      className={`sidebar-toggle ${side} ${className}`}
      onClick={toggleSidebar}
      title={isCollapsed ? `展开${side === 'left' ? '左侧' : '右侧'}边栏` : `收起${side === 'left' ? '左侧' : '右侧'}边栏`}
    >
      <i className={`fas fa-chevron-${side === 'left' ? (isCollapsed ? 'right' : 'left') : (isCollapsed ? 'left' : 'right')}`}></i>
    </div>
  )
}

export default SidebarToggle
