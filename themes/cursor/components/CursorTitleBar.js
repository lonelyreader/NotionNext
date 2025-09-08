'use client'

import { siteConfig } from '@/lib/config'

/**
 * Cursor风格标题栏组件
 */
const CursorTitleBar = () => {
  return (
    <div className="cursor-titlebar">
      <div className="titlebar-title">
        {siteConfig('TITLE')} - Cursor
      </div>
      <div className="titlebar-controls">
        <button className="titlebar-button titlebar-close" title="关闭"></button>
        <button className="titlebar-button titlebar-minimize" title="最小化"></button>
        <button className="titlebar-button titlebar-maximize" title="最大化"></button>
      </div>
    </div>
  )
}

export default CursorTitleBar
