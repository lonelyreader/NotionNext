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
        --page-bg: #F6F7F9;
        --paper-bg: #FFFFFF;
        --divider-1: rgba(0,0,0,0.06);
        
        // Liquid Glass 变量
        --glass-bg-light: rgba(255,255,255,.70);
        --glass-bg-dark: rgba(255,255,255,.10);
        --glass-stroke-light: rgba(0,0,0,.08);
        --glass-stroke-dark: rgba(255,255,255,.16);
        --glass-blur: 20px;
        --radius-pane: 16px;
        --radius-pill: 9999px;
        --pill-hover-light: rgba(255,255,255,.18);
        --pill-hover-dark: rgba(255,255,255,.24);
        --anim-quick: 160ms;
      }
      
      .dark {
        --page-bg: #0B0B0C;
        --paper-bg: #1f2937;
        --divider-1: rgba(255,255,255,0.12);
        
        // 暗色模式 Liquid Glass 变量
        --glass-bg-light: rgba(0,0,0,.45);
        --glass-bg-dark: rgba(0,0,0,.55);
        --glass-stroke-light: rgba(255,255,255,.12);
        --glass-stroke-dark: rgba(255,255,255,.16);
        --pill-hover-light: rgba(255,255,255,.18);
        --pill-hover-dark: rgba(255,255,255,.24);
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
        background: var(--paper-bg);
        border-radius: 16px;
        border: 1px solid var(--divider-1);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .dark .paper-container {
        background: var(--paper-bg);
        border-color: var(--divider-1);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
      }

      /* 灰壳体样式 - 与页面背景色统一 */
      .shell-container {
        background: var(--page-bg);
        border-radius: 16px 0 0 16px;
        border-right: none;
      }

      .dark .shell-container {
        border-right: none;
      }

      /* Header样式调整 - 与白纸背景色统一 */
      #top-nav {
        position: relative !important;
        z-index: 20 !important;
        background: var(--paper-bg) !important;
        border-bottom: 1px solid var(--divider-1) !important;
        box-shadow: none !important;
      }
      
      .dark #top-nav {
        background: var(--paper-bg) !important;
        border-bottom: 1px solid var(--divider-1) !important;
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
        transition: transform var(--anim-quick) ease-out;
        font-size: 12px;
        opacity: 0.6;
      }

      #theme-gitbook2 .collapse-arrow.expanded {
        transform: rotate(90deg);
      }

      /* 作者信息卡片优化 - 完全隐藏 */
      #theme-gitbook2 .author-card,
      #theme-gitbook2 #info-card {
        display: none !important;
      }

      .dark #theme-gitbook2 .author-card,
      .dark #theme-gitbook2 #info-card {
        display: none !important;
      }

      /* 搜索框优化 - 液态玻璃材质 */
      #theme-gitbook2 .search-container {
        display: flex;
        align-items: center;
        position: relative;
        height: 36px;
      }
      
      #theme-gitbook2 .search-input {
        background: var(--glass-bg-light);
        backdrop-filter: blur(var(--glass-blur));
        -webkit-backdrop-filter: blur(var(--glass-blur));
        border: 1px solid var(--glass-stroke-light);
        border-radius: var(--radius-pill);
        padding: 0 12px;
        font-size: 14px;
        transition: all var(--anim-quick) ease-out;
        height: 36px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #374151;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }

      .dark #theme-gitbook2 .search-input {
        background: var(--glass-bg-dark);
        border-color: var(--glass-stroke-dark);
        color: #d1d5db;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      }

      #theme-gitbook2 .search-input:focus,
      #theme-gitbook2 .search-input:hover {
        background: var(--glass-bg-light);
        border-color: var(--glass-stroke-light);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 36px;
        line-height: 36px;
        transform: none;
      }

      .dark #theme-gitbook2 .search-input:focus,
      .dark #theme-gitbook2 .search-input:hover {
        background: var(--glass-bg-dark);
        border-color: var(--glass-stroke-dark);
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      }

      #theme-gitbook2 .search-shortcut {
        font-size: 11px;
        color: #9ca3af;
        opacity: 0.6;
        transition: opacity var(--anim-quick) ease-out;
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        pointer-events: none;
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
        left: 12px;
        color: #9ca3af;
        font-size: 14px;
        pointer-events: none;
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

      /* 白纸内部分隔线 - 移除左侧竖线 */
      .paper-container .border-l {
        border-left: none;
      }

      .dark .paper-container .border-l {
        border-left: none;
      }

      /* 可访问性支持 */
      .pill-hover:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      .pill-hover:focus::before {
        opacity: 1;
      }

      .pill-container button:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      #theme-gitbook2 .search-input:focus {
        outline: none;
      }

      /* 键盘导航支持 */
      .pill-hover:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 高对比度模式支持 */
      @media (prefers-contrast: high) {
        .pill-hover::before {
          background: rgba(0, 0, 0, 0.3);
        }
        
        .dark .pill-hover::before {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .pill-hover.active::before {
          background: rgba(0, 0, 0, 0.4);
        }
        
        .dark .pill-hover.active::before {
          background: rgba(255, 255, 255, 0.4);
        }
      }

      /* 减少动画支持 */
      @media (prefers-reduced-motion: reduce) {
        .pill-hover::before,
        .pill-container,
        .nav-expanded,
        .mobile-drawer,
        .mobile-drawer-overlay {
          transition: none !important;
        }
        
        .collapse-arrow {
          transition: none !important;
        }
      }

      /* Liquid Glass 基础样式 */
      .liquid-glass {
        background: var(--glass-bg-light);
        backdrop-filter: blur(var(--glass-blur));
        -webkit-backdrop-filter: blur(var(--glass-blur));
        border: 1px solid var(--glass-stroke-light);
        border-radius: var(--radius-pane);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }

      .dark .liquid-glass {
        background: var(--glass-bg-dark);
        border-color: var(--glass-stroke-dark);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      }

      /* 椭圆胶囊容器 */
      .pill-container {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 10px;
        height: 36px;
        background: var(--glass-bg-light);
        backdrop-filter: blur(var(--glass-blur));
        -webkit-backdrop-filter: blur(var(--glass-blur));
        border: 1px solid var(--glass-stroke-light);
        border-radius: var(--radius-pill);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        transition: all var(--anim-quick) ease-out;
      }

      .dark .pill-container {
        background: var(--glass-bg-dark);
        border-color: var(--glass-stroke-dark);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      }

      /* 主菜单按钮样式 */
      .main-menu-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        min-height: 32px;
        border-radius: var(--radius-pill);
        transition: all var(--anim-quick) ease-out;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #374151;
      }

      .dark .main-menu-btn {
        color: #d1d5db;
      }

      .main-menu-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 28px;
        height: 28px;
        background: var(--pill-hover-light);
        border-radius: var(--radius-pill);
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity var(--anim-quick) ease-out;
        pointer-events: none;
      }

      .main-menu-btn:hover::before {
        opacity: 1;
      }

      .main-menu-btn:active::before {
        opacity: 1;
        background: rgba(59, 130, 246, 0.2);
      }

      .dark .main-menu-btn::before {
        background: var(--pill-hover-dark);
      }

      .dark .main-menu-btn:active::before {
        background: rgba(96, 165, 250, 0.2);
      }

      /* 椭圆 hover 高亮 */
      .pill-hover {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 44px;
        padding: 0 12px;
        border-radius: var(--radius-pill);
        transition: all var(--anim-quick) ease-out;
        cursor: pointer;
        border: none;
        background: transparent;
      }

      .pill-hover::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 8px;
        right: 8px;
        height: 28px;
        background: var(--pill-hover-light);
        border-radius: var(--radius-pill);
        opacity: 0;
        transform: translateY(-50%);
        transition: opacity var(--anim-quick) ease-out;
        pointer-events: none;
      }

      .pill-hover:hover::before {
        opacity: 1;
      }

      .pill-hover:active::before {
        opacity: 1;
        background: rgba(59, 130, 246, 0.2);
      }

      .dark .pill-hover::before {
        background: var(--pill-hover-dark);
      }

      .dark .pill-hover:active::before {
        background: rgba(96, 165, 250, 0.2);
      }

      .pill-hover.active::before {
        opacity: 1;
        background: rgba(59, 130, 246, 0.15);
      }

      .dark .pill-hover.active::before {
        background: rgba(96, 165, 250, 0.15);
      }

      /* 导航状态样式 */
      .nav-collapsed {
        width: 48px;
        overflow: hidden;
        transition: all var(--anim-quick) ease-out;
      }

      .nav-expanded {
        position: fixed;
        left: 20px;
        top: 20px;
        width: 280px;
        height: calc(100vh - 40px);
        z-index: 50;
        background: var(--glass-bg-light);
        backdrop-filter: blur(var(--glass-blur));
        -webkit-backdrop-filter: blur(var(--glass-blur));
        border: 1px solid var(--glass-stroke-light);
        border-radius: var(--radius-pane);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        transition: all var(--anim-quick) ease-out;
      }

      .nav-expanded::-webkit-scrollbar {
        display: none;
      }

      .dark .nav-expanded {
        background: var(--glass-bg-dark);
        border-color: var(--glass-stroke-dark);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      }

      .nav-pinned {
        width: 280px;
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        transition: all var(--anim-quick) ease-out;
      }

      .nav-pinned::-webkit-scrollbar {
        display: none;
      }

      /* 版心协同 */
      .paper-collapsed {
        width: 100%;
        padding-left: 0;
        transition: padding-left var(--anim-quick) ease-out;
      }

      .paper-expanded {
        width: 100%;
        padding-left: 0;
        transition: padding-left var(--anim-quick) ease-out;
      }

      .paper-pinned {
        padding-left: 280px;
        transition: padding-left var(--anim-quick) ease-out;
      }

      /* 确保白纸容器在状态切换时平滑过渡 */
      .paper-container {
        transition: padding-left var(--anim-quick) ease-out;
      }

      /* 导航状态切换时的平滑过渡 */
      .nav-collapsed,
      .nav-expanded,
      .nav-pinned {
        transition: all var(--anim-quick) ease-out;
      }

      /* 可访问性回退 */
      @media (prefers-reduced-motion: reduce) {
        .liquid-glass,
        .pill-container,
        .pill-hover,
        .nav-expanded {
          transition: none;
        }
      }

      @media (prefers-contrast: high) {
        .liquid-glass,
        .pill-container,
        .nav-expanded {
          background: var(--paper-bg);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
      }

      @supports not (backdrop-filter: blur(20px)) {
        .liquid-glass,
        .pill-container,
        .nav-expanded {
          background: var(--paper-bg);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
        
        #theme-gitbook2 .search-input {
          background: var(--paper-bg);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
      }

      /* 响应式适配 */
      @media (max-width: 1279px) {
        .nav-expanded {
          left: 16px;
          top: 16px;
          width: 260px;
          height: calc(100vh - 32px);
        }
        
        .nav-pinned {
          width: 260px;
        }
        
        .paper-pinned {
          padding-left: 260px;
        }
      }

      @media (max-width: 1023px) {
        .nav-expanded {
          left: 12px;
          top: 12px;
          width: 240px;
          height: calc(100vh - 24px);
        }
        
        .nav-pinned {
          width: 240px;
        }
        
        .paper-pinned {
          padding-left: 240px;
        }
      }

      @media (max-width: 767px) {
        .nav-expanded,
        .nav-pinned {
          display: none !important;
        }
        
        .paper-collapsed,
        .paper-expanded,
        .paper-pinned {
          padding-left: 0 !important;
        }
        
        /* 移动端抽屉式导航 */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          z-index: 1000;
          background: var(--glass-bg-light);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-right: 1px solid var(--glass-stroke-light);
          transform: translateX(-100%);
          transition: transform var(--anim-quick) ease-out;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .mobile-drawer::-webkit-scrollbar {
          display: none;
        }
        
        .mobile-drawer.open {
          transform: translateX(0);
        }
        
        .dark .mobile-drawer {
          background: var(--glass-bg-dark);
          border-right-color: var(--glass-stroke-dark);
        }
        
        .mobile-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all var(--anim-quick) ease-out;
        }
        
        .mobile-drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }
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
          background: var(--paper-bg) !important;
          border-bottom: 1px solid var(--divider-1) !important;
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
