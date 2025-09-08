'use client'

/**
 * Cursor风格状态栏组件
 */
const CursorStatusBar = () => {
  return (
    <div className="cursor-status-bar">
      <div className="status-left">
        <div className="status-item">
          <i className="fas fa-code-branch"></i>
          <span>main</span>
        </div>
        <div className="status-item">
          <i className="fas fa-check-circle"></i>
          <span>无问题</span>
        </div>
      </div>
      <div className="status-right">
        <div className="status-item">
          <i className="fas fa-language"></i>
          <span>TypeScript</span>
        </div>
        <div className="status-item">
          <i className="fas fa-code"></i>
          <span>UTF-8</span>
        </div>
        <div className="status-item">
          <i className="fas fa-terminal"></i>
          <span>终端</span>
        </div>
      </div>
    </div>
  )
}

export default CursorStatusBar
