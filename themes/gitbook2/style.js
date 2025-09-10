/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 页面背景色变量
      :root {
        --page-bg: #f3f4f6;
      }
      
      .dark {
        --page-bg: #111827;
      }
      
      // 底色
      body, #theme-gitbook2 {
        background-color: var(--page-bg);
      }
      
      .dark body {
        background-color: var(--page-bg);
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* 壳体+白纸布局样式 */
      #theme-gitbook2 {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background-color: var(--page-bg);
      }

      /* Header 高度变量 */
      :root {
        --header-height: 56px;
      }

      /* 白纸容器样式 */
      .paper-container {
        background: white;
        border-radius: 16px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .dark .paper-container {
        background: #1f2937;
        border-color: #374151;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
      }

      /* 灰壳体样式 - 与页面背景色统一 */
      .shell-container {
        background: var(--page-bg);
        border-radius: 16px 0 0 16px;
        border-right: 1px solid #e5e7eb;
      }

      .dark .shell-container {
        border-right-color: #374151;
      }

      /* Header样式调整 - 与页面背景色统一 */
      #top-nav {
        position: relative !important;
        z-index: 20 !important;
        background: var(--page-bg) !important;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .dark #top-nav {
        border-bottom-color: #374151;
      }

      /* GitBook风格排版优化 */
      #theme-gitbook2 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.7;
      }

      /* 流体字号 - 站点标题和Logo */
      #theme-gitbook2 .site-title,
      #theme-gitbook2 .logo-text {
        font-size: clamp(1.25rem, 2.5vw, 1.75rem);
        font-weight: 600;
        line-height: 1.3;
        transition: font-size 0.3s ease;
      }

      /* 流体字号 - 标题 */
      #theme-gitbook2 h1 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0;
        margin-bottom: 1rem;
        transition: font-size 0.3s ease;
      }

      #theme-gitbook2 h2 {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 600;
        line-height: 1.3;
        margin-top: 2rem;
        margin-bottom: 0.75rem;
        transition: font-size 0.3s ease;
      }

      #theme-gitbook2 h3 {
        font-size: clamp(1.25rem, 2.5vw, 1.5rem);
        font-weight: 600;
        line-height: 1.4;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        transition: font-size 0.3s ease;
      }

      /* 正文排版 */
      #theme-gitbook2 p {
        font-size: 17px;
        line-height: 1.7;
        margin-top: 0.5rem;
        margin-bottom: 0.875rem;
        color: #374151;
      }

      .dark #theme-gitbook2 p {
        color: #d1d5db;
      }

      /* 内容间距优化 */
      #theme-gitbook2 .notion-table {
        margin: 1rem 0;
        border-collapse: collapse;
        width: 100%;
      }

      #theme-gitbook2 .notion-table td,
      #theme-gitbook2 .notion-table th {
        padding: 10px 16px;
        border: 1px solid #e5e7eb;
        text-align: left;
      }

      .dark #theme-gitbook2 .notion-table td,
      .dark #theme-gitbook2 .notion-table th {
        border-color: #374151;
      }

      /* 代码块间距 */
      #theme-gitbook2 .notion-code,
      #theme-gitbook2 pre {
        margin: 0.875rem 0;
        padding: 1rem;
        border-radius: 8px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
      }

      .dark #theme-gitbook2 .notion-code,
      .dark #theme-gitbook2 pre {
        background: #1e293b;
        border-color: #334155;
      }

      /* 引用块样式 */
      #theme-gitbook2 .notion-quote {
        margin: 0.875rem 0;
        padding: 0.75rem 1rem;
        border-left: 4px solid #3b82f6;
        background: #f8fafc;
        border-radius: 0 8px 8px 0;
      }

      .dark #theme-gitbook2 .notion-quote {
        background: #1e293b;
        border-left-color: #60a5fa;
      }

      /* 左侧导航优化 */
      #theme-gitbook2 .nav-item {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 12px;
        border-radius: 6px;
        margin: 2px 0;
        transition: all 0.2s ease;
        cursor: pointer;
        position: relative;
      }

      #theme-gitbook2 .nav-item:hover {
        background: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
      }

      .dark #theme-gitbook2 .nav-item:hover {
        background: rgba(96, 165, 250, 0.1);
        color: #60a5fa;
      }

      #theme-gitbook2 .nav-item.current {
        background: rgba(59, 130, 246, 0.15);
        color: #3b82f6;
        font-weight: 500;
      }

      .dark #theme-gitbook2 .nav-item.current {
        background: rgba(96, 165, 250, 0.15);
        color: #60a5fa;
      }

      /* 折叠箭头动画 */
      #theme-gitbook2 .collapse-arrow {
        transition: transform 0.2s ease;
        font-size: 12px;
        opacity: 0.6;
      }

      #theme-gitbook2 .collapse-arrow.expanded {
        transform: rotate(90deg);
      }

      /* 作者信息卡片优化 */
      #theme-gitbook2 .author-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 16px;
        margin: 16px 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .dark #theme-gitbook2 .author-card {
        background: #1f2937;
        border-color: #374151;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }

      #theme-gitbook2 .author-card .author-name {
        font-weight: 500;
        font-size: 14px;
        color: #374151;
        margin-bottom: 8px;
      }

      .dark #theme-gitbook2 .author-card .author-name {
        color: #d1d5db;
      }

      #theme-gitbook2 .author-card .social-buttons {
        display: flex;
        gap: 8px;
        margin-top: 12px;
      }

      #theme-gitbook2 .author-card .social-button {
        width: 32px;
        height: 32px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        background: white;
      }

      .dark #theme-gitbook2 .author-card .social-button {
        border-color: #374151;
        background: #1f2937;
      }

      #theme-gitbook2 .author-card .social-button:hover {
        border-color: #3b82f6;
        color: #3b82f6;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      /* 搜索框优化 - 垂直居中对齐 */
      #theme-gitbook2 .search-container {
        display: flex;
        align-items: center;
        position: relative;
        height: 40px;
      }
      
      #theme-gitbook2 .search-input {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 14px;
        transition: all 0.2s ease;
        opacity: 0.7;
        height: 40px;
        line-height: 24px;
        display: flex;
        align-items: center;
      }

      .dark #theme-gitbook2 .search-input {
        background: #1e293b;
        border-color: #334155;
        color: #d1d5db;
      }

      #theme-gitbook2 .search-input:focus,
      #theme-gitbook2 .search-input:hover {
        opacity: 1;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      #theme-gitbook2 .search-shortcut {
        font-size: 11px;
        color: #9ca3af;
        opacity: 0.5;
        transition: opacity 0.2s ease;
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      #theme-gitbook2 .search-input:focus + .search-shortcut,
      #theme-gitbook2 .search-container:hover .search-shortcut {
        opacity: 0.8;
      }
      
      /* 搜索图标对齐 - 垂直居中 */
      #theme-gitbook2 .search-container .fas.fa-search {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      /* 滚动条样式 - 默认隐藏 */
      .scroll-hidden {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }

      /* 滚动条样式 - 悬浮时显示 */
      .scroll-hidden:hover {
        scrollbar-width: thin; /* Firefox */
        -ms-overflow-style: auto; /* IE and Edge */
      }

      .scroll-hidden:hover::-webkit-scrollbar {
        display: block; /* Chrome, Safari, Opera */
        width: 6px;
      }

      .scroll-hidden:hover::-webkit-scrollbar-track {
        background: transparent;
      }

      .scroll-hidden:hover::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
      }

      .scroll-hidden:hover::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
      }

      /* 暗色模式滚动条 */
      .dark .scroll-hidden:hover::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
      }

      .dark .scroll-hidden:hover::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      /* 白纸内部分隔线 */
      .paper-container .border-l {
        border-left: 1px solid #e5e7eb;
      }

      .dark .paper-container .border-l {
        border-left: 1px solid #374151;
      }

      /* 可访问性支持 */
      #theme-gitbook2 .nav-item:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      #theme-gitbook2 .search-input:focus {
        outline: none;
      }

      #theme-gitbook2 .collapse-button:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 移动端保持原有行为 */
      @media (max-width: 768px) {
        #theme-gitbook2 {
          position: relative;
          height: auto;
          min-height: 100vh;
          overflow: visible;
          background-color: white;
        }

        .dark #theme-gitbook2 {
          background-color: black;
        }

        #wrapper {
          padding: 0 !important;
        }

        .paper-container {
          border-radius: 0;
          border: none;
          box-shadow: none;
        }

        .shell-container {
          border-radius: 0;
        }

        #center-wrapper {
          height: auto !important;
        }

        #container-inner {
          height: auto !important;
          overflow: visible !important;
          padding: 16px !important;
        }

        #top-nav {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          background: var(--page-bg) !important;
          z-index: 1000 !important;
        }

        /* 移动端字体调整 */
        #theme-gitbook2 p {
          font-size: 16px;
        }
      }

      /* 窄屏优化 */
      @media (max-width: 1024px) {
        #wrapper {
          padding: 16px 16px 24px 0 !important;
        }
      }
    `}</style>
  )
}

export { Style }
