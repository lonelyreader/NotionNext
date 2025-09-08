'use client'

const Style = () => {
  return (
    <style jsx global>{`
      /* Cursor编辑器风格主题样式 - 基于gitbook2布局 */
      
      /* 现代响应式设计基础 */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* Cursor深色主题 - 默认深色 */
      body {
        background: #1e1e1e;
        color: #d4d4d4;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-size: 14px;
        line-height: 1.5;
      }
      
      /* 浅色模式 */
      .light body {
        background: #ffffff;
        color: #333333;
      }

      /* 主容器 - Cursor风格 */
      #theme-cursor {
        background: #1e1e1e;
        color: #d4d4d4;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      
      /* 浅色模式主容器 */
      .light #theme-cursor {
        background: #ffffff;
        color: #333333;
      }

      /* Cursor风格顶部导航栏 */
      .cursor-header {
        height: 48px;
        background: #2d2d30;
        border-bottom: 1px solid #3e3e42;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        font-size: 13px;
        color: #cccccc;
        user-select: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
      
      .light .cursor-header {
        background: #f3f3f3;
        border-bottom: 1px solid #e1e1e1;
        color: #333333;
      }
      
      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      
      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      /* 左侧边栏 - Cursor风格 */
      .cursor-sidebar {
        width: 280px;
        background: #252526;
        border-right: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
        position: fixed;
        left: 0;
        top: 48px;
        height: calc(100vh - 48px);
        z-index: 50;
      }
      
      .light .cursor-sidebar {
        background: #f3f3f3;
        border-right: 1px solid #e1e1e1;
      }
      
      .cursor-sidebar.collapsed {
        width: 0;
        overflow: hidden;
      }
      
      /* 侧边栏标题 - Cursor风格 */
      .sidebar-title {
        height: 35px;
        background: #2d2d30;
        border-bottom: 1px solid #3e3e42;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: #cccccc;
        letter-spacing: 0.5px;
      }
      
      .light .sidebar-title {
        background: #e1e1e1;
        border-bottom: 1px solid #d1d1d1;
        color: #333333;
      }
      
      /* 文章列表区域 */
      .sidebar-content {
        flex: 1;
        overflow-y: auto;
        padding: 8px;
      }
      
      .sidebar-section {
        margin-bottom: 16px;
      }
      
      .section-title {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: #cccccc;
        margin-bottom: 8px;
        padding: 0 8px;
        letter-spacing: 0.5px;
      }
      
      .light .section-title {
        color: #666666;
      }

      /* 标签页栏 - Cursor风格 */
      .cursor-tabs {
        height: 35px;
        background: #2d2d30;
        border-bottom: 1px solid #3e3e42;
        display: flex;
        align-items: center;
        overflow-x: auto;
        white-space: nowrap;
        position: fixed;
        top: 48px;
        left: 0;
        right: 0;
        z-index: 40;
      }
      
      .light .cursor-tabs {
        background: #f3f3f3;
        border-bottom: 1px solid #e1e1e1;
      }
      
      .tab {
        display: flex;
        align-items: center;
        padding: 0 16px;
        height: 35px;
        background: #2d2d30;
        border-right: 1px solid #3e3e42;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #cccccc;
        font-size: 13px;
        min-width: 120px;
        max-width: 200px;
        position: relative;
      }
      
      .light .tab {
        background: #f3f3f3;
        border-right: 1px solid #e1e1e1;
        color: #333333;
      }
      
      .tab:hover {
        background: #37373d;
        color: #ffffff;
      }
      
      .tab.active {
        background: #1e1e1e;
        color: #ffffff;
        border-bottom: 1px solid #1e1e1e;
      }
      
      .light .tab:hover {
        background: #e1e1e1;
        color: #333333;
      }
      
      .light .tab.active {
        background: #ffffff;
        color: #333333;
        border-bottom: 1px solid #ffffff;
      }
      
      .tab-close {
        margin-left: 8px;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.2s ease;
        font-size: 12px;
      }
      
      .tab:hover .tab-close {
        opacity: 1;
      }
      
      .tab-close:hover {
        background: #e81123;
        color: #ffffff;
      }

      /* 编辑器内容区域 */
      .cursor-editor-content {
        background: #1e1e1e;
        color: #d4d4d4;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.6;
        padding: 24px;
        margin-top: 83px; /* 48px header + 35px tabs */
        min-height: calc(100vh - 83px);
      }
      
      .light .cursor-editor-content {
        background: #ffffff;
        color: #333333;
      }

      /* 右侧边栏 - Cursor风格 */
      .cursor-info-sidebar {
        width: 280px;
        background: #252526;
        border-left: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
        position: fixed;
        right: 0;
        top: 48px;
        height: calc(100vh - 48px);
        z-index: 50;
      }
      
      .light .cursor-info-sidebar {
        background: #f3f3f3;
        border-left: 1px solid #e1e1e1;
      }
      
      .cursor-info-sidebar.collapsed {
        width: 0;
        overflow: hidden;
      }

      /* 状态栏 - Cursor风格 */
      .cursor-status-bar {
        height: 22px;
        background: #007acc;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
      
      .status-left, .status-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      
      .status-item {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        padding: 2px 4px;
        border-radius: 2px;
        transition: background 0.2s ease;
      }
      
      .status-item:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      /* 调整主内容区域以适应固定侧边栏 */
      #wrapper {
        margin-left: 280px;
        margin-right: 280px;
        padding-bottom: 22px; /* 为状态栏留空间 */
      }
      
      .cursor-sidebar.collapsed + #wrapper {
        margin-left: 0;
      }
      
      .cursor-info-sidebar.collapsed ~ #wrapper {
        margin-right: 0;
      }

      /* 文章内容样式 - Cursor风格 */
      .article-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 0;
      }
      
      .article-content h1,
      .article-content h2,
      .article-content h3,
      .article-content h4,
      .article-content h5,
      .article-content h6 {
        color: #d4d4d4;
        margin-top: 32px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.3;
      }
      
      .light .article-content h1,
      .light .article-content h2,
      .light .article-content h3,
      .light .article-content h4,
      .light .article-content h5,
      .light .article-content h6 {
        color: #333333;
      }
      
      .article-content p {
        margin-bottom: 16px;
        line-height: 1.6;
      }
      
      .article-content a {
        color: #007acc;
        text-decoration: none;
        border-radius: 2px;
        padding: 1px 2px;
        transition: all 0.2s ease;
      }
      
      .article-content a:hover {
        background: #007acc;
        color: #ffffff;
        text-decoration: none;
      }
      
      .article-content code {
        background: #2d2d30;
        color: #d4d4d4;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 13px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      }
      
      .light .article-content code {
        background: #f3f3f3;
        color: #333333;
      }
      
      .article-content pre {
        background: #2d2d30;
        color: #d4d4d4;
        padding: 16px;
        border-radius: 6px;
        overflow-x: auto;
        margin: 16px 0;
        border: 1px solid #3e3e42;
      }
      
      .light .article-content pre {
        background: #f3f3f3;
        color: #333333;
        border: 1px solid #e1e1e1;
      }
      
      .article-content blockquote {
        border-left: 4px solid #007acc;
        padding-left: 16px;
        margin: 16px 0;
        color: #cccccc;
        background: #2d2d30;
        padding: 12px 16px;
        border-radius: 0 6px 6px 0;
      }
      
      .light .article-content blockquote {
        color: #666666;
        background: #f8f8f8;
      }

      /* 滚动条样式 - Cursor风格 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #424242;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #4f4f4f;
      }
      
      .light ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
      }
      
      .light ::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }

      /* 响应式设计 */
      @media (max-width: 768px) {
        .cursor-sidebar {
          width: 0;
          overflow: hidden;
        }
        
        .cursor-info-sidebar {
          width: 0;
          overflow: hidden;
        }
        
        #wrapper {
          margin-left: 0;
          margin-right: 0;
        }
        
        .cursor-editor-content {
          padding: 16px;
        }
      }

      /* 动画效果 */
      .fade-in {
        animation: fadeIn 0.3s ease-in-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .slide-in {
        animation: slideIn 0.3s ease-out;
      }
      
      @keyframes slideIn {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
      }
    `}</style>
  )
}

export { Style }
