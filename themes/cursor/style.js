'use client'

const Style = () => {
  return (
    <style jsx global>{`
      /* Cursor编辑器风格主题样式 - 专注于视觉设计语言 */
      
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

      /* 顶部导航栏 - Cursor风格 */
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

      /* 主工作区 */
      .cursor-workspace {
        display: flex;
        flex: 1;
        height: calc(100vh - 48px);
        margin-top: 48px;
      }

      /* 左侧边栏 - Cursor风格，映射到博客分类 */
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
      
      /* 分类按钮组 - Cursor风格 */
      .category-buttons {
        padding: 8px;
        border-bottom: 1px solid #3e3e42;
      }
      
      .light .category-buttons {
        border-bottom: 1px solid #e1e1e1;
      }
      
      .category-button {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        margin-bottom: 4px;
        background: transparent;
        border: none;
        border-radius: 6px;
        color: #cccccc;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
      }
      
      .category-button:hover {
        background: #2a2d2e;
        color: #ffffff;
      }
      
      .category-button.active {
        background: #0e639c;
        color: #ffffff;
      }
      
      .light .category-button {
        color: #333333;
      }
      
      .light .category-button:hover {
        background: #e1e1e1;
        color: #333333;
      }
      
      .light .category-button.active {
        background: #007acc;
        color: #ffffff;
      }
      
      .category-icon {
        margin-right: 8px;
        font-size: 14px;
        width: 16px;
        text-align: center;
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
      
      .sidebar-item {
        display: flex;
        align-items: center;
        padding: 6px 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #cccccc;
        font-size: 13px;
        margin-bottom: 2px;
      }
      
      .sidebar-item:hover {
        background: #2a2d2e;
        color: #ffffff;
      }
      
      .sidebar-item.active {
        background: #094771;
        color: #ffffff;
      }
      
      .light .sidebar-item {
        color: #333333;
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
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #1e1e1e;
        color: #d4d4d4;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.6;
        padding: 24px;
        overflow-y: auto;
      }
      
      .light .cursor-editor-content {
        background: #ffffff;
        color: #333333;
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
      
      /* 博客列表样式 - Cursor风格 */
      .blog-list-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 0;
      }
      
      .blog-list-content h1,
      .blog-list-content h2,
      .blog-list-content h3 {
        color: #d4d4d4;
        margin-top: 32px;
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
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 16px;
        transition: all 0.2s ease;
        cursor: pointer;
      }
      
      .blog-list-content .blog-post-item:hover {
        background: #37373d;
        border-color: #007acc;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .light .blog-list-content .blog-post-item {
        background: #f3f3f3;
        border: 1px solid #e1e1e1;
        color: #333333;
      }
      
      .light .blog-list-content .blog-post-item:hover {
        background: #e1e1e1;
        border-color: #007acc;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
        margin-bottom: 12px;
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

      /* 右侧边栏 - Cursor风格 */
      .cursor-info-sidebar {
        width: 280px;
        background: #252526;
        border-left: 1px solid #3e3e42;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
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