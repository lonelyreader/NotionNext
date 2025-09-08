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

      /* 左侧导航栏 - 固定宽度贴合边缘 */
      .nav-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        width: 280px;
        height: 100vh;
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-right: 1px solid rgba(83, 40, 79, 0.1);
        box-shadow: 2px 0 20px rgba(0, 0, 0, 0.05);
        z-index: 10;
        overflow-y: auto;
        padding-top: 80px;
      }
      
      /* 深色模式左侧导航栏 */
      .dark .nav-sidebar {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-right: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
      }
      
      /* 移动端隐藏左侧导航栏 */
      @media (max-width: 768px) {
        .nav-sidebar {
          display: none;
        }
      }

      /* 右侧信息栏 - 固定宽度贴合边缘 */
      .info-sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 280px;
        height: 100vh;
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-left: 1px solid rgba(83, 40, 79, 0.1);
        box-shadow: -2px 0 20px rgba(0, 0, 0, 0.05);
        z-index: 10;
        overflow-y: auto;
        padding-top: 80px;
      }
      
      /* 深色模式右侧信息栏 */
      .dark .info-sidebar {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-left: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
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
        margin-left: 280px;
        margin-right: 280px;
        z-index: 1;
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
          margin-left: 280px;
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

      /* 按钮样式 - 浅色模式 */
      button, .btn {
        background: rgba(83, 40, 79, 0.9);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(83, 40, 79, 0.3);
        border-radius: 8px;
        color: #EFEFEF;
        padding: 10px 20px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 2px 10px rgba(83, 40, 79, 0.2);
        position: relative;
        overflow: hidden;
      }
      
      button:hover, .btn:hover {
        background: rgba(83, 40, 79, 1);
        border-color: rgba(83, 40, 79, 0.5);
        box-shadow: 0 4px 15px rgba(83, 40, 79, 0.3);
        transform: translateY(-1px);
      }
      
      button:active, .btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* 按钮样式 - 深色模式 */
      .dark button, .dark .btn {
        background: rgba(239, 239, 239, 0.9);
        border: 1px solid rgba(239, 239, 239, 0.3);
        color: #53284F;
      }
      
      .dark button:hover, .dark .btn:hover {
        background: rgba(239, 239, 239, 1);
        border-color: rgba(239, 239, 239, 0.5);
        color: #372E2C;
      }

      /* 卡片样式 - 浅色模式 */
      .card, .info-card {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.1);
        border-radius: 12px;
        padding: 20px;
        margin: 12px 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        color: #372E2C;
      }
      
      .card:hover, .info-card:hover {
        border-color: rgba(83, 40, 79, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
      
      /* 卡片样式 - 深色模式 */
      .dark .card, .dark .info-card {
        background: rgba(83, 40, 79, 0.2);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.1);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        color: #EFEFEF;
      }
      
      .dark .card:hover, .dark .info-card:hover {
        border-color: rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
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

      /* 滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(127, 38, 41, 0.3);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #7F2629 0%, #53284F 100%);
        border-radius: 10px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #53284F 0%, #7F2629 100%);
        box-shadow: 0 0 10px rgba(204, 159, 83, 0.5);
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

      /* 顶部导航栏 - 固定定位 */
      .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(83, 40, 79, 0.1);
      }
      
      /* 深色模式顶部导航栏 */
      .dark .top-nav {
        background: rgba(83, 40, 79, 0.4);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(204, 159, 83, 0.15);
      }
      
      /* 底部导航栏 - 移动端 */
      .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(83, 40, 79, 0.1);
      }
      
      /* 深色模式底部导航栏 */
      .dark .bottom-nav {
        background: rgba(83, 40, 79, 0.4);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(204, 159, 83, 0.15);
      }
      
      /* 移动端显示底部导航栏 */
      @media (min-width: 769px) {
        .bottom-nav {
          display: none;
        }
      }
    `}</style>
  )
}

export { Style }
