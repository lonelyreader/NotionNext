/* eslint-disable react/no-unknown-property */
/**
 * GitBook3 主题样式
 * 实现"顶栏 + 主区域三列"布局，视觉与交互接近 GitBook
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* GitBook3 — 现代化三列布局 */
      
      /* =========================
         CSS 变量定义
         ========================= */
      :root {
        --gitbook3-sidebar-width: 280px;
        --gitbook3-right-aside-width: 300px;
        --gitbook3-topbar-height: 64px;
        --gitbook3-container-radius: 12px;
        --gitbook3-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        --gitbook3-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.1);
        --gitbook3-border: rgba(0, 0, 0, 0.06);
        --gitbook3-text-primary: #1F2328;
        --gitbook3-text-secondary: #656D76;
        --gitbook3-bg-primary: #FFFFFF;
        --gitbook3-bg-secondary: #F6F8FA;
        --gitbook3-bg-tertiary: #F1F3F4;
        --gitbook3-accent: #0969DA;
        --gitbook3-accent-hover: #0860CA;
        --gitbook3-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        
        /* Liquid Glass 链接系统 */
        --gitbook3-link-color: #007aff;
        --gitbook3-link-color-hover: #0056cc;
        --gitbook3-link-color-active: #004499;
        
        /* 玻璃材质参数 */
        --gitbook3-glass-blur: 8px;
        --gitbook3-glass-saturation: 1.4;
        --gitbook3-glass-brightness: 1.1;
        
        /* 微胶囊玻璃背景 - Clear外观 */
        --gitbook3-glass-clear-bg: rgba(255, 255, 255, 0.8);
        --gitbook3-glass-clear-border: rgba(0, 0, 0, 0.06);
        --gitbook3-glass-clear-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        --gitbook3-glass-clear-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.08);
        --gitbook3-glass-clear-shadow-active: 0 4px 12px rgba(0, 0, 0, 0.04);
        
        /* 微胶囊圆角 */
        --gitbook3-glass-radius: 9px;
        
        /* 链接过渡动画 */
        --gitbook3-link-transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .dark:root {
        --gitbook3-border: rgba(255, 255, 255, 0.08);
        --gitbook3-text-primary: #E6EDF3;
        --gitbook3-text-secondary: #8B949E;
        --gitbook3-bg-primary: #0D1117;
        --gitbook3-bg-secondary: #161B22;
        --gitbook3-bg-tertiary: #21262D;
        --gitbook3-accent: #58A6FF;
        --gitbook3-accent-hover: #1F6FEB;
        
        /* 深色模式 Liquid Glass 链接系统 */
        --gitbook3-link-color: #58a6ff;
        --gitbook3-link-color-hover: #79c0ff;
        --gitbook3-link-color-active: #388bfd;
        
        /* 深色模式微胶囊玻璃背景 - Tint外观 */
        --gitbook3-glass-clear-bg: rgba(0, 0, 0, 0.6);
        --gitbook3-glass-clear-border: rgba(255, 255, 255, 0.08);
        --gitbook3-glass-clear-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        --gitbook3-glass-clear-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.3);
        --gitbook3-glass-clear-shadow-active: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      /* =========================
         基础样式重置
         ========================= */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        line-height: 1.6;
        transition: var(--gitbook3-transition);
      }
      
      /* =========================
         Liquid Glass 链接系统
         ========================= */
      a {
        color: var(--gitbook3-link-color);
        text-decoration: none;
        position: relative;
        display: inline-block;
        transition: var(--gitbook3-link-transition);
        border-radius: var(--gitbook3-glass-radius);
        padding: 2px 4px;
        margin: -2px -4px;
        z-index: 1;
      }
      
      /* 悬停和聚焦状态 - Liquid Glass 微胶囊 */
      a:hover,
      a:focus-visible {
        color: var(--gitbook3-link-color-hover);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow-hover);
        transform: translateY(-1px);
        text-decoration: none;
      }
      
      /* 按下状态 - 玻璃轻压效果 */
      a:active {
        color: var(--gitbook3-link-color-active);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow-active);
        transform: translateY(0);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* 禁用状态 */
      a:disabled,
      a[disabled] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      
      /* 无障碍支持 - 减少透明度时的降级处理 */
      @media (prefers-reduced-transparency: reduce) {
        a:hover,
        a:focus-visible,
        a:active {
          background: var(--gitbook3-glass-clear-bg);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 2px solid var(--gitbook3-link-color);
        }
      }
      
      /* 减少动效时的降级处理 */
      @media (prefers-reduced-motion: reduce) {
        a {
          transition: none;
        }
        
        a:hover,
        a:focus-visible,
        a:active {
          transform: none;
        }
      }
      
      /* =========================
         主题根容器
         ========================= */
      #theme-gitbook3 {
        min-height: 100vh;
        position: relative;
      }
      
      /* =========================
         固定顶栏
         ========================= */
      .gitbook3-topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--gitbook3-topbar-height);
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border-bottom: 1px solid var(--gitbook3-border);
        z-index: 100;
        transition: var(--gitbook3-transition);
      }
      
      .dark .gitbook3-topbar {
        background: rgba(13, 17, 23, 0.8);
      }
      
      /* =========================
         主布局容器
         ========================= */
      .gitbook3-main-layout {
        display: grid;
        grid-template-columns: var(--gitbook3-sidebar-width) 1fr var(--gitbook3-right-aside-width);
        grid-template-areas: "sidebar content aside";
        min-height: calc(100vh - var(--gitbook3-topbar-height));
        margin-top: var(--gitbook3-topbar-height);
        gap: 0;
        transition: var(--gitbook3-transition);
      }
      
      /* 侧栏收起时的布局调整 */
      body.gitbook3-sidebar-collapsed .gitbook3-main-layout {
        grid-template-columns: 0 1fr var(--gitbook3-right-aside-width);
      }
      
      /* =========================
         左侧全局侧栏
         ========================= */
      .gitbook3-global-sidebar {
        grid-area: sidebar;
        background: var(--gitbook3-bg-primary);
        border-right: 1px solid var(--gitbook3-border);
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--gitbook3-topbar-height));
        overflow: hidden;
        transition: var(--gitbook3-transition);
        position: relative;
      }
      
      .gitbook3-global-sidebar.collapsed {
        transform: translateX(-100%);
        width: 0;
      }
      
      /* 工具条 */
      .gitbook3-sidebar-toolbar {
        padding: 16px;
        border-bottom: 1px solid var(--gitbook3-border);
        background: var(--gitbook3-bg-primary);
        position: sticky;
        top: 0;
        z-index: 10;
        flex-shrink: 0;
      }
      
      .gitbook3-toolbar-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      /* 隐藏侧栏按钮 */
      .gitbook3-hide-sidebar-btn {
        width: 32px;
        height: 32px;
        background: var(--gitbook3-bg-tertiary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gitbook3-text-secondary);
        transition: var(--gitbook3-transition);
        flex-shrink: 0;
      }
      
      .gitbook3-hide-sidebar-btn:hover {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        border-color: var(--gitbook3-accent);
      }
      
      /* 搜索框 */
      .gitbook3-sidebar-search {
        flex: 1;
      }
      
      .gitbook3-search-input input {
        width: 100%;
        height: 36px;
        padding: 0 12px 0 36px;
        border: 1px solid var(--gitbook3-border);
        border-radius: 8px;
        background: var(--gitbook3-bg-tertiary);
        color: var(--gitbook3-text-primary);
        font-size: 14px;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-search-input input:focus {
        outline: none;
        border-color: var(--gitbook3-accent);
        background: var(--gitbook3-bg-primary);
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
      }
      
      /* 侧栏内容 */
      .gitbook3-sidebar-content {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
      }
      
      /* 品牌标识 */
      .gitbook3-sidebar-brand {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        padding: 12px;
        background: var(--gitbook3-bg-tertiary);
        border-radius: 8px;
        border: 1px solid var(--gitbook3-border);
      }
      
      .gitbook3-brand-icon {
        width: 32px;
        height: 32px;
        background: var(--gitbook3-accent);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        font-weight: bold;
        flex-shrink: 0;
      }
      
      .gitbook3-brand-text {
        font-weight: 600;
        font-size: 16px;
        color: var(--gitbook3-text-primary);
      }
      
      /* 侧栏底部 */
      .gitbook3-sidebar-footer {
        padding: 16px;
        border-top: 1px solid var(--gitbook3-border);
        background: var(--gitbook3-bg-primary);
        flex-shrink: 0;
      }
      
      /* =========================
         中间内容列
         ========================= */
      .gitbook3-content-column {
        grid-area: content;
        background: var(--gitbook3-bg-secondary);
        overflow-y: auto;
        padding: 24px;
        min-height: calc(100vh - var(--gitbook3-topbar-height));
      }
      
      .gitbook3-content-wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      
      /* 文档头部 */
      .gitbook3-document-header {
        margin-bottom: 32px;
      }
      
      .gitbook3-document-title {
        font-size: 32px;
        font-weight: 700;
        color: var(--gitbook3-text-primary);
        margin: 0 0 16px 0;
        line-height: 1.2;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .gitbook3-document-description {
        font-size: 18px;
        color: var(--gitbook3-text-secondary);
        margin: 0;
        line-height: 1.5;
      }
      
      /* 内容卡片 */
      .gitbook3-content-card {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: var(--gitbook3-container-radius);
        box-shadow: var(--gitbook3-shadow);
        overflow: hidden;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-content-card:hover {
        box-shadow: var(--gitbook3-shadow-hover);
      }
      
      .gitbook3-content-body {
        padding: 40px;
      }
      
      .gitbook3-article-section {
        color: var(--gitbook3-text-primary);
        line-height: 1.7;
      }
      
      .gitbook3-article-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 32px 0;
        padding: 16px 0;
        border-top: 1px solid var(--gitbook3-border);
        border-bottom: 1px solid var(--gitbook3-border);
      }
      
      .gitbook3-article-tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      
      /* =========================
         右侧信息栏
         ========================= */
      .gitbook3-right-aside {
        grid-area: aside;
        background: var(--gitbook3-bg-primary);
        border-left: 1px solid var(--gitbook3-border);
        height: calc(100vh - var(--gitbook3-topbar-height));
        overflow-y: auto;
        position: sticky;
        top: var(--gitbook3-topbar-height);
      }
      
      .gitbook3-right-content {
        padding: 24px;
      }
      
      /* MetaCard */
      .gitbook3-meta-card {
        margin-bottom: 24px;
      }
      
      /* 粘性目录 */
      .gitbook3-sticky-toc {
        position: sticky;
        top: 24px;
        margin-bottom: 24px;
      }
      
      /* 信息卡片 */
      .gitbook3-info-card {
        margin-bottom: 24px;
      }
      
      /* 地图 */
      .gitbook3-maps {
        margin-bottom: 24px;
      }
      
      /* Live2D */
      .gitbook3-live2d {
        margin-bottom: 24px;
      }
      
      /* 公告 */
      .gitbook3-announcement {
        margin-bottom: 24px;
      }
      
      /* 广告 */
      .gitbook3-ads {
        margin-bottom: 24px;
      }
      
      /* =========================
         目录组件样式
         ========================= */
      .gitbook3-catalog {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: var(--gitbook3-container-radius);
        overflow: hidden;
        box-shadow: var(--gitbook3-shadow);
      }
      
      .gitbook3-catalog-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--gitbook3-border);
        background: var(--gitbook3-bg-tertiary);
      }
      
      .gitbook3-catalog-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--gitbook3-text-primary);
        margin: 0;
        display: flex;
        align-items: center;
      }
      
      .gitbook3-catalog-content {
        max-height: 400px;
        overflow-y: auto;
        padding: 8px 0;
      }
      
      .gitbook3-catalog-nav {
        display: flex;
        flex-direction: column;
      }
      
      .gitbook3-catalog-item {
        display: block;
        padding: 8px 20px;
        color: var(--gitbook3-text-secondary);
        text-decoration: none;
        font-size: 14px;
        line-height: 1.4;
        transition: var(--gitbook3-transition);
        border-left: 3px solid transparent;
        position: relative;
      }
      
      .gitbook3-catalog-item:hover {
        color: var(--gitbook3-accent);
        background: var(--gitbook3-bg-tertiary);
      }
      
      .gitbook3-catalog-item.active {
        color: var(--gitbook3-accent);
        border-left-color: var(--gitbook3-accent);
        background: var(--gitbook3-bg-tertiary);
        font-weight: 500;
      }
      
      .gitbook3-catalog-item.focused {
        outline: 2px solid var(--gitbook3-accent);
        outline-offset: -2px;
        background: var(--gitbook3-bg-tertiary);
      }
      
      .gitbook3-catalog-text {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      /* 目录层级样式 */
      .gitbook3-catalog-item.level-0 {
        font-weight: 500;
      }
      
      .gitbook3-catalog-item.level-1 {
        font-size: 13px;
      }
      
      .gitbook3-catalog-item.level-2 {
        font-size: 12px;
        color: var(--gitbook3-text-secondary);
      }
      
      /* =========================
         响应式设计
         ========================= */
      
      /* 大屏幕 (>= 1440px) */
      @media (min-width: 1440px) {
        .gitbook3-content-wrapper {
          max-width: 900px;
        }
      }
      
      /* 中等屏幕 (768px - 1439px) */
      @media (max-width: 1439px) {
        .gitbook3-main-layout {
          grid-template-columns: var(--gitbook3-sidebar-width) 1fr;
          grid-template-areas: "sidebar content";
        }
        
        .gitbook3-right-aside {
          display: none;
        }
        
        body.gitbook3-sidebar-collapsed .gitbook3-main-layout {
          grid-template-columns: 0 1fr;
        }
      }
      
      /* 小屏幕 (<= 768px) */
      @media (max-width: 768px) {
        .gitbook3-main-layout {
          grid-template-columns: 1fr;
          grid-template-areas: "content";
        }
        
        .gitbook3-global-sidebar {
          display: none;
        }
        
        .gitbook3-content-column {
          padding: 16px;
        }
        
        .gitbook3-content-body {
          padding: 24px;
        }
        
        .gitbook3-document-title {
          font-size: 28px;
        }
        
        .gitbook3-document-description {
          font-size: 16px;
        }
      }
      
      /* 超小屏幕 (<= 480px) */
      @media (max-width: 480px) {
        .gitbook3-content-column {
          padding: 12px;
        }
        
        .gitbook3-content-body {
          padding: 16px;
        }
        
        .gitbook3-document-title {
          font-size: 24px;
        }
      }
      
      /* =========================
         交互状态
         ========================= */
      
      /* 按钮样式 */
      .gitbook-button {
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        background: var(--gitbook3-bg-tertiary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 8px;
        color: var(--gitbook3-text-primary);
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: var(--gitbook3-transition);
        gap: 8px;
      }
      
      .gitbook-button:hover {
        background: var(--gitbook3-bg-secondary);
        border-color: var(--gitbook3-accent);
        color: var(--gitbook3-accent);
      }
      
      .gitbook-button.primary {
        background: var(--gitbook3-accent);
        border-color: var(--gitbook3-accent);
        color: white;
      }
      
      .gitbook-button.primary:hover {
        background: var(--gitbook3-accent-hover);
        border-color: var(--gitbook3-accent-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
      }
      
      /* 特殊链接样式覆盖 - 保持 Liquid Glass 风格 */
      .gitbook3-nav-item a {
        color: var(--gitbook3-text-secondary);
        padding: 4px 8px;
        margin: -4px -8px;
        border-radius: var(--gitbook3-glass-radius);
      }
      
      .gitbook3-nav-item a:hover,
      .gitbook3-nav-item a:focus-visible {
        color: var(--gitbook3-text-primary);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow);
        transform: translateY(-1px);
      }
      
      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        color: var(--gitbook3-text-primary);
        font-weight: 600;
        line-height: 1.25;
        margin-top: 24px;
        margin-bottom: 16px;
      }
      
      h1 {
        font-size: 32px;
        font-weight: 700;
        border-bottom: 1px solid var(--gitbook3-border);
        padding-bottom: 12px;
      }
      
      h2 {
        font-size: 24px;
        font-weight: 600;
      }
      
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
      
      /* 代码块样式 */
      pre, code {
        background: var(--gitbook3-bg-tertiary);
        border: 1px solid var(--gitbook3-border);
        color: var(--gitbook3-text-primary);
        border-radius: 8px;
        padding: 12px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.45;
      }
      
      /* 滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--gitbook3-border);
        border-radius: 4px;
        transition: var(--gitbook3-transition);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--gitbook3-text-secondary);
      }
      
      /* 焦点样式 */
      *:focus {
        outline: 2px solid var(--gitbook3-accent);
        outline-offset: 2px;
      }
      
      /* 选择样式 */
      ::selection {
        background: rgba(9, 105, 218, 0.2);
        color: var(--gitbook3-text-primary);
      }
      
      /* =========================
         动画效果
         ========================= */
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .gitbook3-content-card {
        animation: fadeIn 0.3s ease-out;
      }
      
      /* =========================
         无障碍优化
         ========================= */
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* 高对比度模式 */
      @media (prefers-contrast: high) {
        :root {
          --gitbook3-border: rgba(0, 0, 0, 0.2);
          --gitbook3-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .dark:root {
          --gitbook3-border: rgba(255, 255, 255, 0.2);
        }
      }
    `}</style>
  )
}

export { Style }