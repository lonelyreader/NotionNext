import { useState } from 'react'
import useSidebarState from './useSidebarState'

export default function Sidebar({ children }) {
  const { ready, collapsed, setCollapsed, pinned, setPinned } = useSidebarState()
  const [hoverOpen, setHoverOpen] = useState(false)
  
  const show = ready && (!collapsed || hoverOpen)
  const canHoverOpen = ready && collapsed && !pinned

  return (
    <>
      {/* 左侧热区 */}
      <div
        aria-hidden
        onMouseEnter={() => canHoverOpen && setHoverOpen(true)}
        onMouseLeave={() => canHoverOpen && setHoverOpen(false)}
        className="fixed inset-y-0 left-0 z-30"
        style={{ width: 'var(--hotzone-w, 16px)' }}
      />

      {/* 侧边栏容器 */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 flex flex-col
                    transition-transform duration-200 will-change-transform
                    ${show ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: 'var(--sidebar-w, 280px)' }}
      >
        {/* 顶部折叠按钮 */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
          <button
            aria-label={collapsed ? '展开侧边栏' : '收起侧边栏'}
            onClick={() => { setCollapsed(!collapsed); setHoverOpen(false) }}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
              <path fill="currentColor" d="M8 5h2v14H8zM14 5h2v14h-2z"/>
            </svg>
            {collapsed ? '展开' : '收起'}
          </button>
        </div>

        {/* 侧边栏内容 */}
        <div className="min-h-0 flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          {children}
        </div>

        {/* 右下角固定按钮 */}
        <div className="p-3 mt-auto border-t border-gray-200 dark:border-gray-700">
          <button
            aria-pressed={pinned}
            onClick={() => setPinned(!pinned)}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       ${pinned ? 'font-semibold bg-blue-50 dark:bg-blue-900/20' : ''}`}
          >
            <span>📌</span>{pinned ? '已固定' : '固定侧边栏'}
          </button>
        </div>
      </aside>
    </>
  )
}
