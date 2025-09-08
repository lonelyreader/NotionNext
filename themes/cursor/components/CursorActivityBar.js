'use client'

import { useState } from 'react'

/**
 * Cursor风格活动栏组件
 */
const CursorActivityBar = ({ activeView, onViewChange }) => {
  const [activeItem, setActiveItem] = useState('explorer')

  const activities = [
    { id: 'explorer', icon: 'fas fa-folder', title: '资源管理器' },
    { id: 'search', icon: 'fas fa-search', title: '搜索' },
    { id: 'git', icon: 'fab fa-git-alt', title: '源代码管理' },
    { id: 'debug', icon: 'fas fa-bug', title: '运行和调试' },
    { id: 'extensions', icon: 'fas fa-puzzle-piece', title: '扩展' }
  ]

  const handleItemClick = (itemId) => {
    setActiveItem(itemId)
    if (onViewChange) {
      onViewChange(itemId)
    }
  }

  return (
    <div className="cursor-activity-bar">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className={`activity-item ${activeItem === activity.id ? 'active' : ''}`}
          onClick={() => handleItemClick(activity.id)}
          title={activity.title}
        >
          <i className={activity.icon}></i>
        </div>
      ))}
    </div>
  )
}

export default CursorActivityBar
