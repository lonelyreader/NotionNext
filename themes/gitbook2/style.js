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
        --paper-max: 920px;
        --paper-gutter: 32px;
      }
      
      .dark {
        --page-bg: #0B0B0C;
        --paper-bg: #1f2937;
        --divider-1: rgba(255,255,255,0.12);
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

      /* 白纸内层容器样式 - 使用设计令牌 */
      #container-inner {
        max-width: var(--paper-max) !important;
        padding-left: var(--paper-gutter) !important;
        padding-right: var(--paper-gutter) !important;
        margin: 0 auto !important;
      }

      /* 响应式内边距调整 */
      @media (min-width: 1024px) and (max-width: 1279px) {
        :root {
          --paper-gutter: 24px;
        }
      }

      /* 确保正文H1与Header左列对齐 */
      #container-inner h1 {
        margin-left: 0 !important;
        padding-left: 0 !important;
      }

      /* 确保右侧栏保持原有宽度和位置 */
      .paper-container .w-80 {
        width: 20rem !important; /* 320px */
        min-width: 20rem !important;
        flex-shrink: 0 !important;
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
        border-bottom: 1px solid var(--divider-1);
        box-shadow: none !important;
      }

      /* Header内层容器 - 与白纸内层容器使用相同的设计令牌 */
      #top-nav .px-5 {
        max-width: var(--paper-max) !important;
        margin: 0 auto !important;
        padding-left: var(--paper-gutter) !important;
        padding-right: var(--paper-gutter) !important;
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        align-items: center !important;
        column-gap: 16px !important;
        white-space: nowrap !important;
      }

      /* Header中间导航按钮组 - 防止换行，允许横向滚动 */
      #top-nav .px-5 > div:first-child {
        min-width: 0 !important;
        overflow-x: auto !important;
        white-space: nowrap !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }

      #top-nav .px-5 > div:first-child::-webkit-scrollbar {
        display: none !important;
      }

      #top-nav .px-5 .hidden.md\\:flex {
        white-space: nowrap !important;
      }
      
      .dark #top-nav {
        background: var(--paper-bg) !important;
        border-bottom-color: var(--divider-1);
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
        border-left: 4px solid #372E2C;
        background: #f8fafc;
        border-radius: 0 8px 8px 0;
      }

      .dark #theme-gitbook2 .notion-quote {
        background: #1e293b;
        border-left-color: #372E2C;
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
        background: rgba(55, 46, 44, 0.1);
        color: #372E2C;
      }

      .dark #theme-gitbook2 .nav-item:hover {
        background: rgba(55, 46, 44, 0.1);
        color: #372E2C;
      }

      #theme-gitbook2 .nav-item.current {
        background: rgba(55, 46, 44, 0.15);
        color: #372E2C;
        font-weight: 500;
      }

      .dark #theme-gitbook2 .nav-item.current {
        background: rgba(55, 46, 44, 0.15);
        color: #372E2C;
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
        width: auto;
        min-width: 200px;
      }
      
      #theme-gitbook2 .search-input {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 18px;
        padding: 0 12px;
        font-size: 14px;
        transition: all 0.2s ease;
        height: 36px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #374151;
      }

      .dark #theme-gitbook2 .search-input {
        background: rgba(0, 0, 0, 0.5);
        border-color: rgba(255, 255, 255, 0.14);
        color: #d1d5db;
      }

      #theme-gitbook2 .search-input:focus,
      #theme-gitbook2 .search-input:hover {
        background: rgba(255, 255, 255, 0.8);
        border-color: rgba(0, 0, 0, 0.12);
        box-shadow: 0 0 0 3px rgba(55, 46, 44, 0.1);
        height: 36px;
        line-height: 36px;
      }

      .dark #theme-gitbook2 .search-input:focus,
      .dark #theme-gitbook2 .search-input:hover {
        background: rgba(0, 0, 0, 0.6);
        border-color: rgba(255, 255, 255, 0.18);
      }

      #theme-gitbook2 .search-shortcut {
        font-size: 11px;
        color: #9ca3af;
        opacity: 0.6;
        transition: opacity 0.2s ease;
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
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
        border-left: 1px solid var(--divider-1);
      }

      .dark .paper-container .border-l {
        border-left: 1px solid var(--divider-1);
      }

      /* 可访问性支持 */
      #theme-gitbook2 .nav-item:focus {
        outline: 2px solid #372E2C;
        outline-offset: 2px;
      }

      #theme-gitbook2 .search-input:focus {
        outline: none;
      }

      #theme-gitbook2 .collapse-button:focus {
        outline: 2px solid #372E2C;
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
          background: var(--paper-bg) !important;
          border-bottom: 1px solid var(--divider-1) !important;
          z-index: 1000 !important;
        }

        /* 移动端字体调整 */
        #theme-gitbook2 p {
          font-size: 16px;
        }
      }

      /* 超宽屏调整 - ≥1536px时增加版心宽度 */
      @media (min-width: 1536px) {
        :root {
          --paper-max: 960px;
        }
      }

      /* 响应式外间距设置 */
      @media (min-width: 1280px) {
        #wrapper {
          padding: 16px 16px 28px 16px !important;
        }
      }

      @media (min-width: 1024px) and (max-width: 1279px) {
        #wrapper {
          padding: 16px 12px 28px 12px !important;
        }
      }

      /* 窄屏优化 */
      @media (max-width: 1024px) {
        #wrapper {
          padding: 16px 16px 24px 0 !important;
        }
      }

      /* ===== 版心令牌：让 100% 看起来像 85%，但不改字号 ===== */
      :root{
        --paper-max: 920px;   /* 常规桌面版心宽度 */
        --paper-pad: 32px;    /* 白纸内层左右内边距 */
      }
      @media (min-width:1536px){
        :root{ --paper-max: 960px; } /* 超宽屏稍微放宽 */
      }
      @media (min-width:1024px) and (max-width:1279px){
        :root{ --paper-pad: 24px; }  /* 中桌面内边距略收窄 */
      }

      /* ===== 白纸"内层容器"（承载 header + 正文 + 右栏的那个版心层） =====
         你项目里一般叫 #container-inner；若命名不同，请绑定到实际那个"版心层" */
      #container-inner{
        max-width: var(--paper-max) !important;
        padding-left:  var(--paper-pad) !important;
        padding-right: var(--paper-pad) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: content-box !important; /* 防止 padding 把版心算进宽度 */
      }

      /* ===== Header"内层容器"与白纸强绑定 =====
         下面列出一组常见选择器，至少会命中其中一个。
         若你的 header 内层容器类名不同，请把它补到这组选择器里。 */
      .header-inner, 
      #header .inner, 
      .top-nav .inner, 
      .nav-header-inner,
      .dashboard-header > div:first-child {
        max-width: var(--paper-max) !important;
        padding-left:  var(--paper-pad) !important;
        padding-right: var(--paper-pad) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: content-box !important;

        /* 三列：左=标题，中=导航，右=搜索；强制一行不换 */
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        align-items: center !important;
        column-gap: 16px !important;
        white-space: nowrap !important;
      }

      /* 中间列：允许横向滚动、不挤两侧 */
      .header-inner > :nth-child(2),
      #header .inner > :nth-child(2),
      .top-nav .inner > :nth-child(2),
      .nav-header-inner > :nth-child(2),
      .dashboard-header > div:first-child > :nth-child(2){
        min-width: 0 !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
      }

      /* 右列：搜索贴右，垂直居中 */
      .header-inner > :last-child,
      #header .inner > :last-child,
      .top-nav .inner > :last-child,
      .nav-header-inner > :last-child,
      .dashboard-header > div:first-child > :last-child{
        justify-self: end !important;
        display: flex !important;
        align-items: center !important;
      }

      /* ===== 白纸外留白（卡片与灰底之间；不影响对齐） ===== */
      #container{
        padding-top: 16px !important;
        padding-bottom: 28px !important;
        /* 左右外间距来自外层布局，保持你现在的 16px 即可 */
      }

      /* ① 让 Header 外层拥有与 #wrapper 相同的左右外边距 —— 关键修复 */
      @media (min-width: 1280px) {
        #top-nav { padding-left:16px !important; padding-right:16px !important; }
      }
      @media (min-width:1024px) and (max-width:1279px) {
        #top-nav { padding-left:12px !important; padding-right:12px !important; }
      }
      /* ≤1024 你自己已做了移动端特殊处理，这里不改 */

      /* ② Header 内层容器：继续与白纸版心强绑定（保底选择器，防 class 变化） */
      #top-nav > div,
      #top-nav .px-5 {
        max-width: var(--paper-max) !important;
        padding-left:  var(--paper-gutter, var(--paper-pad, 32px)) !important;
        padding-right: var(--paper-gutter, var(--paper-pad, 32px)) !important;
        margin-left:auto !important;
        margin-right:auto !important;
        box-sizing: content-box !important;

        display: grid !important;
        grid-template-columns: auto 1fr auto !important; /* 左 标题 | 中 导航 | 右 搜索 */
        align-items: center !important;
        column-gap: 16px !important;
        white-space: nowrap !important;
      }

      /* ③ 中间列才允许横向滚动（不是 first-child；改成第二列更稳） */
      #top-nav > div > :nth-child(2),
      #top-nav .px-5 > :nth-child(2){
        min-width: 0 !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      #top-nav > div > :nth-child(2)::-webkit-scrollbar,
      #top-nav .px-5 > :nth-child(2)::-webkit-scrollbar{ display:none !important; }

      /* ④ 右列（搜索）贴右；左列（标题）自然贴左 —— 与白纸完全同线 */
      #top-nav > div > :last-child,
      #top-nav .px-5 > :last-child{
        justify-self: end !important;
        display:flex !important;
        align-items:center !important;
      }

      /* ===== 修正版心对齐问题 ===== */
      /* ① 强制覆盖 #container-inner 的内联样式 */
      #container-inner {
        max-width: var(--paper-max) !important;
        padding-left: var(--paper-pad) !important;
        padding-right: var(--paper-pad) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: content-box !important;
      }

      /* ② Header 外层与 #wrapper 保持一致的左右外边距 */
      #top-nav {
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      /* ③ Header 内层容器与白纸版心完全对齐 */
      #top-nav > div {
        max-width: var(--paper-max) !important;
        padding-left: var(--paper-pad) !important;
        padding-right: var(--paper-pad) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: content-box !important;
        
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        align-items: center !important;
        column-gap: 16px !important;
        white-space: nowrap !important;
      }

      /* ④ 中间列横向滚动 */
      #top-nav > div > :nth-child(2) {
        min-width: 0 !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      #top-nav > div > :nth-child(2)::-webkit-scrollbar {
        display: none !important;
      }

      /* ⑤ 右列贴右对齐 */
      #top-nav > div > :last-child {
        justify-self: end !important;
        display: flex !important;
        align-items: center !important;
      }
    `}</style>
  )
}

export { Style }
