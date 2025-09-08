/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* iOS 18风格主题样式 */
      
      /* 现代响应式设计基础 */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* 浅色模式 - EFEFEF为主 */
      body {
        background: #EFEFEF;
        color: #372E2C;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      
      /* 深色模式 - 紫色为主 */
      .dark body {
        background: linear-gradient(135deg, #53284F 0%, #372E2C 50%, #7F2629 100%);
        background-attachment: fixed;
        color: #EFEFEF;
      }

      /* 主容器 - 保持原有Flexbox布局 */
      #theme-gitbook {
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(20px);
        color: #372E2C;
        min-height: 100vh;
      }
      
      /* 深色模式主容器 */
      .dark #theme-gitbook {
        background: rgba(83, 40, 79, 0.1);
        backdrop-filter: blur(20px);
        color: #EFEFEF;
      }

      /* 左侧导航栏 - Apple风格磨砂玻璃 */
      .nav-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        width: 320px;
        min-height: 100vh;
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-right: 1px solid rgba(83, 40, 79, 0.08);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.02);
        z-index: 10;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 80px;
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* 左侧导航栏收起状态 */
      .nav-sidebar.collapsed {
        transform: translateX(-100%);
      }
      
      /* 深色模式左侧导航栏 */
      .dark .nav-sidebar {
        background: rgba(83, 40, 79, 0.25);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-right: 1px solid rgba(204, 159, 83, 0.1);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
      }
      
      /* 移动端隐藏左侧导航栏 */
      @media (max-width: 768px) {
        .nav-sidebar {
          display: none;
        }
      }

      /* 右侧信息栏 - Apple风格磨砂玻璃 */
      .info-sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 320px;
        min-height: 100vh;
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-left: 1px solid rgba(83, 40, 79, 0.08);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.02);
        z-index: 10;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 80px;
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* 右侧信息栏收起状态 */
      .info-sidebar.collapsed {
        transform: translateX(100%);
      }
      
      /* 深色模式右侧信息栏 */
      .dark .info-sidebar {
        background: rgba(83, 40, 79, 0.25);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-left: 1px solid rgba(204, 159, 83, 0.1);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
      }
      
      /* 中等屏幕隐藏右侧信息栏 */
      @media (max-width: 1280px) {
        .info-sidebar {
          display: none;
        }
      }

      /* 正文背景容器 - 延展到全屏 */
      #center-wrapper {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(20px);
        border: none;
        border-radius: 0;
        margin: 0;
        padding: 0;
        box-shadow: none;
        min-height: 100vh;
        position: relative;
        margin-left: 320px;
        margin-right: 320px;
        z-index: 1;
        transition: margin 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* 侧边栏收起时的正文边距调整 */
      .nav-sidebar.collapsed {
        transform: translateX(-100%);
      }
      
      .info-sidebar.collapsed {
        transform: translateX(100%);
      }
      
      /* 当侧边栏收起时，调整正文边距 */
      body.nav-collapsed #center-wrapper {
        margin-left: 0;
      }
      
      body.info-collapsed #center-wrapper {
        margin-right: 0;
      }
      
      body.nav-collapsed.info-collapsed #center-wrapper {
        margin-left: 0;
        margin-right: 0;
      }
      
      /* 深色模式正文背景容器 */
      .dark #center-wrapper {
        background: rgba(83, 40, 79, 0.15);
        backdrop-filter: blur(20px);
      }
      
      /* 正文文字容器 - 保持美观距离 */
      .main-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 100px 40px 40px 40px;
        color: #372E2C;
        line-height: 1.7;
      }
      
      /* 深色模式正文文字容器 */
      .dark .main-content {
        color: #EFEFEF;
      }
      
      /* 响应式正文布局 */
      @media (max-width: 1280px) {
        #center-wrapper {
          margin-left: 320px;
          margin-right: 0;
        }
      }
      
      @media (max-width: 768px) {
        #center-wrapper {
          margin-left: 0;
          margin-right: 0;
        }
        
        .main-content {
          padding: 80px 20px 20px 20px;
        }
      }
      
      /* 调试样式 - 确保布局可见 */
      #theme-gitbook {
        position: relative;
      }
      
      #wrapper {
        position: relative;
        z-index: 2;
      }

      /* 标题样式 - 浅色模式 */
      h1, h2, h3, h4, h5, h6 {
        color: #372E2C;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 标题样式 - 深色模式 */
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #EFEFEF;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* 链接样式 - 浅色模式 */
      a {
        color: #53284F;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        font-weight: 500;
      }
      
      a:hover {
        color: #7F2629;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
      }
      
      /* 链接样式 - 深色模式 */
      .dark a {
        color: #EFEFEF;
      }
      
      .dark a:hover {
        color: #CC9F53;
      }

      /* 按钮样式 - Apple风格磨砂玻璃 */
      button, .btn {
        background: rgba(83, 40, 79, 0.8);
        backdrop-filter: blur(30px) saturate(180%);
        -webkit-backdrop-filter: blur(30px) saturate(180%);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 12px;
        color: #EFEFEF;
        padding: 12px 24px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px rgba(83, 40, 79, 0.15);
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }
      
      button::before, .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
      }
      
      button:hover, .btn:hover {
        background: rgba(83, 40, 79, 0.9);
        border-color: rgba(83, 40, 79, 0.3);
        box-shadow: 0 8px 30px rgba(83, 40, 79, 0.25);
        transform: translateY(-2px) scale(1.02);
      }
      
      button:hover::before, .btn:hover::before {
        left: 100%;
      }
      
      button:active, .btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* 按钮样式 - 深色模式 */
      .dark button, .dark .btn {
        background: rgba(239, 239, 239, 0.8);
        border: 1px solid rgba(239, 239, 239, 0.2);
        color: #53284F;
        box-shadow: 0 4px 20px rgba(239, 239, 239, 0.15);
      }
      
      .dark button:hover, .dark .btn:hover {
        background: rgba(239, 239, 239, 0.9);
        border-color: rgba(239, 239, 239, 0.3);
        color: #372E2C;
        box-shadow: 0 8px 30px rgba(239, 239, 239, 0.25);
      }

      /* 卡片样式 - Apple风格磨砂玻璃 */
      .card, .info-card {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(83, 40, 79, 0.06);
        border-radius: 16px;
        padding: 24px;
        margin: 16px 0;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        color: #372E2C;
        position: relative;
        overflow: hidden;
      }
      
      .card::before, .info-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(83, 40, 79, 0.1), transparent);
      }
      
      .card:hover, .info-card:hover {
        background: rgba(255, 255, 255, 0.8);
        border-color: rgba(83, 40, 79, 0.12);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
        transform: translateY(-4px) scale(1.01);
      }
      
      /* 卡片样式 - 深色模式 */
      .dark .card, .dark .info-card {
        background: rgba(83, 40, 79, 0.15);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.08);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        color: #EFEFEF;
      }
      
      .dark .card::before, .dark .info-card::before {
        background: linear-gradient(90deg, transparent, rgba(204, 159, 83, 0.1), transparent);
      }
      
      .dark .card:hover, .dark .info-card:hover {
        background: rgba(83, 40, 79, 0.2);
        border-color: rgba(204, 159, 83, 0.15);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        transform: translateY(-4px) scale(1.01);
      }

      /* 输入框样式 - 浅色模式 */
      input, textarea, select {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 8px;
        color: #372E2C;
        padding: 12px 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 16px;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: rgba(83, 40, 79, 0.5);
        box-shadow: 0 0 0 3px rgba(83, 40, 79, 0.1);
        background: rgba(239, 239, 239, 1);
      }
      
      /* 输入框样式 - 深色模式 */
      .dark input, .dark textarea, .dark select {
        background: rgba(83, 40, 79, 0.2);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }
      
      .dark input:focus, .dark textarea:focus, .dark select:focus {
        border-color: rgba(204, 159, 83, 0.5);
        box-shadow: 0 0 0 3px rgba(204, 159, 83, 0.1);
        background: rgba(83, 40, 79, 0.3);
      }

      /* 底部按钮组样式 - 浅色模式 */
      .bottom-button-group {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(83, 40, 79, 0.1);
        box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.05);
      }
      
      /* 底部按钮组样式 - 深色模式 */
      .dark .bottom-button-group {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
      }

      /* Apple风格滚动条样式 */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(83, 40, 79, 0.3);
        border-radius: 3px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(83, 40, 79, 0.5);
      }
      
      /* 深色模式滚动条 */
      .dark ::-webkit-scrollbar-thumb {
        background: rgba(204, 159, 83, 0.3);
      }
      
      .dark ::-webkit-scrollbar-thumb:hover {
        background: rgba(204, 159, 83, 0.5);
      }
      
      /* 隐藏滚动条但保持功能 */
      .nav-sidebar, .info-sidebar {
        scrollbar-width: thin;
        scrollbar-color: rgba(83, 40, 79, 0.3) transparent;
      }
      
      .dark .nav-sidebar, .dark .info-sidebar {
        scrollbar-color: rgba(204, 159, 83, 0.3) transparent;
      }

      /* 文字颜色优化 - 浅色模式 */
      p, div, span, li {
        color: #372E2C;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }
      
      /* 文字颜色优化 - 深色模式 */
      .dark p, .dark div, .dark span, .dark li {
        color: #EFEFEF;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }

      /* 代码块样式 - 浅色模式 */
      pre, code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        color: #EFEFEF;
        border-radius: 8px;
        padding: 12px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      }
      
      /* 代码块样式 - 深色模式 */
      .dark pre, .dark code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }

      /* 下拉菜单和导航优化 - 浅色模式 */
      .dropdown-menu, .menu-dropdown {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        padding: 8px 0;
        margin-top: 8px;
      }
      
      .dropdown-menu a, .menu-dropdown a {
        color: #372E2C;
        padding: 10px 16px;
        display: block;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dropdown-menu a:hover, .menu-dropdown a:hover {
        background: rgba(83, 40, 79, 0.1);
        color: #53284F;
      }
      
      /* 下拉菜单和导航优化 - 深色模式 */
      .dark .dropdown-menu, .dark .menu-dropdown {
        background: rgba(83, 40, 79, 0.2);
        border: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }
      
      .dark .dropdown-menu a, .dark .menu-dropdown a {
        color: #EFEFEF;
      }
      
      .dark .dropdown-menu a:hover, .dark .menu-dropdown a:hover {
        background: rgba(239, 239, 239, 0.1);
        color: #CC9F53;
      }

      /* 正文预览优化 - 浅色模式 */
      .post-preview, .article-preview {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.1);
        border-radius: 12px;
        padding: 20px;
        margin: 16px 0;
        color: #372E2C;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .post-preview:hover, .article-preview:hover {
        border-color: rgba(83, 40, 79, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
      
      /* 正文预览优化 - 深色模式 */
      .dark .post-preview, .dark .article-preview {
        background: rgba(83, 40, 79, 0.2);
        border: 1px solid rgba(204, 159, 83, 0.1);
        color: #EFEFEF;
      }
      
      .dark .post-preview:hover, .dark .article-preview:hover {
        border-color: rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      /* 顶部导航栏 - Apple风格磨砂玻璃 */
      .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-bottom: 1px solid rgba(83, 40, 79, 0.06);
        box-shadow: 0 1px 20px rgba(0, 0, 0, 0.02);
      }
      
      /* 深色模式顶部导航栏 */
      .dark .top-nav {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-bottom: 1px solid rgba(204, 159, 83, 0.08);
        box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
      }
      
      /* 底部导航栏 - Apple风格磨砂玻璃 */
      .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-top: 1px solid rgba(83, 40, 79, 0.06);
        box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.02);
      }
      
      /* 深色模式底部导航栏 */
      .dark .bottom-nav {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-top: 1px solid rgba(204, 159, 83, 0.08);
        box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.05);
      }
      
      /* 移动端显示底部导航栏 */
      @media (min-width: 769px) {
        .bottom-nav {
          display: none;
        }
      }
      
      /* 侧边栏切换按钮 - 参考Cursor设计 */
      .sidebar-toggle {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 48px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.1);
        border-radius: 0 12px 12px 0;
        cursor: pointer;
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
      }
      
      .sidebar-toggle:hover {
        background: rgba(255, 255, 255, 1);
        border-color: rgba(83, 40, 79, 0.2);
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) translateX(2px);
      }
      
      .sidebar-toggle.left {
        left: 320px;
        border-radius: 0 12px 12px 0;
      }
      
      .sidebar-toggle.right {
        right: 320px;
        border-radius: 12px 0 0 12px;
      }
      
      /* 侧边栏收起时的按钮位置 */
      body.nav-collapsed .sidebar-toggle.left {
        left: 0;
      }
      
      body.info-collapsed .sidebar-toggle.right {
        right: 0;
      }
      
      /* 深色模式切换按钮 */
      .dark .sidebar-toggle {
        background: rgba(83, 40, 79, 0.8);
        border-color: rgba(204, 159, 83, 0.1);
        color: #EFEFEF;
      }
      
      .dark .sidebar-toggle:hover {
        background: rgba(83, 40, 79, 0.9);
        border-color: rgba(204, 159, 83, 0.2);
      }
      
      /* 按钮图标 */
      .sidebar-toggle i {
        font-size: 12px;
        color: rgba(83, 40, 79, 0.7);
        transition: all 0.3s ease;
      }
      
      .dark .sidebar-toggle i {
        color: rgba(204, 159, 83, 0.7);
      }
      
      .sidebar-toggle:hover i {
        color: rgba(83, 40, 79, 1);
      }
      
      .dark .sidebar-toggle:hover i {
        color: rgba(204, 159, 83, 1);
      }
      
      /* 移动端隐藏切换按钮 */
      @media (max-width: 768px) {
        .sidebar-toggle {
          display: none;
        }
      }
    `}</style>
  )
}

export { Style }
