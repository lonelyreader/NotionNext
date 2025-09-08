'use client'

const Style = () => {
  return (
    <style jsx global>{`
      /* Cursor编辑器风格主题样式 */
      
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
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
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

      /* 顶部标题栏 - Cursor风格 */
      .cursor-titlebar {
        height: 30px;
        background: #2d2d30;
        border-bottom: 1px solid #3e3e42;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        font-size: 12px;
        color: #cccccc;
        user-select: none;
        -webkit-app-region: drag;
      }
      
      .light .cursor-titlebar {
        background: #f3f3f3;
        border-bottom: 1px solid #e1e1e1;
        color: #333333;
      }
      
      .titlebar-controls {
        display: flex;
        gap: 8px;
        -webkit-app-region: no-drag;
      }
      
      .titlebar-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
      }
      
      .titlebar-close { background: #ff5f57; }
      .titlebar-minimize { background: #ffbd2e; }
      .titlebar-maximize { background: #28ca42; }

      /* 主工作区 */
      .cursor-workspace {
        display: flex;
        flex: 1;
        height: calc(100vh - 30px);
      }

      /* 左侧活动栏 - Cursor风格 */
      .cursor-activity-bar {
        width: 48px;
        background: #333333;
        border-right: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 0;
        gap: 8px;
      }
      
      .light .cursor-activity-bar {
        background: #f3f3f3;
        border-right: 1px solid #e1e1e1;
      }
      
      .activity-item {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #cccccc;
        font-size: 16px;
      }
      
      .activity-item:hover {
        background: #2a2d2e;
        color: #ffffff;
      }
      
      .activity-item.active {
        background: #0e639c;
        color: #ffffff;
      }
      
      .light .activity-item:hover {
        background: #e1e1e1;
        color: #333333;
      }
      
      .light .activity-item.active {
        background: #007acc;
        color: #ffffff;
      }

      /* 侧边栏 - Cursor风格 */
      .cursor-sidebar {
        width: 280px;
        background: #252526;
        border-right: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
      }
      
      .light .cursor-sidebar {
        background: #f3f3f3;
        border-right: 1px solid #e1e1e1;
      }
      
      .cursor-sidebar.collapsed {
        width: 0;
        overflow: hidden;
      }
      
      .sidebar-header {
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
      }
      
      .light .sidebar-header {
        background: #e1e1e1;
        border-bottom: 1px solid #d1d1d1;
        color: #333333;
      }
      
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
      }
      
      .light .section-title {
        color: #666666;
      }
      
      .sidebar-item {
        display: flex;
        align-items: center;
        padding: 6px 8px;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #cccccc;
        font-size: 13px;
      }
      
      .sidebar-item:hover {
        background: #2a2d2e;
        color: #ffffff;
      }
      
      .sidebar-item.active {
        background: #094771;
        color: #ffffff;
      }
      
      .light .sidebar-item:hover {
        background: #e1e1e1;
        color: #333333;
      }
      
      .light .sidebar-item.active {
        background: #007acc;
        color: #ffffff;
      }
      
      .sidebar-item-icon {
        margin-right: 8px;
        font-size: 14px;
        width: 16px;
        text-align: center;
      }

      /* 主编辑区域 */
      .cursor-editor-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #1e1e1e;
      }
      
      .light .cursor-editor-area {
        background: #ffffff;
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
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #1e1e1e;
        color: #d4d4d4;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        padding: 20px;
        overflow-y: auto;
      }
      
      .light .cursor-editor-content {
        background: #ffffff;
        color: #333333;
      }
      
      /* 文章内容样式 */
      .article-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      
      .article-content h1,
      .article-content h2,
      .article-content h3,
      .article-content h4,
      .article-content h5,
      .article-content h6 {
        color: #d4d4d4;
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
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
      }
      
      .article-content a:hover {
        text-decoration: underline;
      }
      
      .article-content code {
        background: #2d2d30;
        color: #d4d4d4;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 13px;
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
      }
      
      .light .article-content pre {
        background: #f3f3f3;
        color: #333333;
      }
      
      .article-content blockquote {
        border-left: 4px solid #007acc;
        padding-left: 16px;
        margin: 16px 0;
        color: #cccccc;
      }
      
      .light .article-content blockquote {
        color: #666666;
      }
      
      /* 博客列表样式 */
      .blog-list-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      
      .blog-list-content h1,
      .blog-list-content h2,
      .blog-list-content h3 {
        color: #d4d4d4;
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
      }
      
      .light .blog-list-content h1,
      .light .blog-list-content h2,
      .light .blog-list-content h3 {
        color: #333333;
      }
      
      .blog-list-content .blog-post-item {
        background: #2d2d30;
        border: 1px solid #3e3e42;
        border-radius: 6px;
        padding: 16px;
        margin-bottom: 16px;
        transition: all 0.2s ease;
        cursor: pointer;
      }
      
      .blog-list-content .blog-post-item:hover {
        background: #37373d;
        border-color: #007acc;
      }
      
      .light .blog-list-content .blog-post-item {
        background: #f3f3f3;
        border: 1px solid #e1e1e1;
        color: #333333;
      }
      
      .light .blog-list-content .blog-post-item:hover {
        background: #e1e1e1;
        border-color: #007acc;
      }
      
      .blog-list-content .blog-post-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #d4d4d4;
      }
      
      .light .blog-list-content .blog-post-title {
        color: #333333;
      }
      
      .blog-list-content .blog-post-summary {
        color: #cccccc;
        line-height: 1.5;
        margin-bottom: 8px;
      }
      
      .light .blog-list-content .blog-post-summary {
        color: #666666;
      }
      
      .blog-list-content .blog-post-meta {
        font-size: 12px;
        color: #888888;
        display: flex;
        gap: 16px;
      }
      
      .light .blog-list-content .blog-post-meta {
        color: #999999;
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
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      }
      
      .light .cursor-status-bar {
        background: #007acc;
        color: #ffffff;
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

      /* 命令面板 */
      .cursor-command-palette {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        max-height: 400px;
        background: #252526;
        border: 1px solid #3e3e42;
        border-radius: 6px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        display: none;
        flex-direction: column;
        overflow: hidden;
      }
      
      .light .cursor-command-palette {
        background: #ffffff;
        border: 1px solid #e1e1e1;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .command-palette.show {
        display: flex;
      }
      
      .command-input {
        padding: 12px 16px;
        background: transparent;
        border: none;
        color: #d4d4d4;
        font-size: 16px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        outline: none;
        border-bottom: 1px solid #3e3e42;
      }
      
      .light .command-input {
        color: #333333;
        border-bottom: 1px solid #e1e1e1;
      }
      
      .command-list {
        max-height: 300px;
        overflow-y: auto;
      }
      
      .command-item {
        padding: 8px 16px;
        cursor: pointer;
        transition: background 0.2s ease;
        color: #d4d4d4;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .light .command-item {
        color: #333333;
      }
      
      .command-item:hover,
      .command-item.selected {
        background: #094771;
        color: #ffffff;
      }
      
      .light .command-item:hover,
      .light .command-item.selected {
        background: #007acc;
        color: #ffffff;
      }
      
      .command-icon {
        width: 16px;
        text-align: center;
      }
      
      .command-title {
        flex: 1;
      }
      
      .command-category {
        font-size: 11px;
        opacity: 0.7;
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
        .cursor-activity-bar {
          display: none;
        }
        
        .cursor-sidebar {
          width: 0;
          overflow: hidden;
        }
        
        .cursor-command-palette {
          width: 90%;
          max-width: 500px;
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
