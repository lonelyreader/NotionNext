'use client'

import { useState } from 'react'

/**
 * Cursor风格标签页组件
 */
const CursorTabs = ({ tabs = [], activeTab, onTabChange, onTabClose }) => {
  const [hoveredTab, setHoveredTab] = useState(null)

  const handleTabClick = (tab) => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  const handleTabClose = (e, tab) => {
    e.stopPropagation()
    if (onTabClose) {
      onTabClose(tab)
    }
  }

  return (
    <div className="cursor-tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab?.id === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <i className={`sidebar-item-icon ${tab.icon || 'fas fa-file'}`}></i>
          <span className="tab-title">{tab.title}</span>
          {hoveredTab === tab.id && (
            <div 
              className="tab-close"
              onClick={(e) => handleTabClose(e, tab)}
              title="关闭"
            >
              <i className="fas fa-times"></i>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CursorTabs
