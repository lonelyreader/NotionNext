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
      
      /* 全局背景 - iOS 18风格 */
      body {
        background: linear-gradient(135deg, #7F2629 0%, #372E2C 50%, #53284F 100%);
        background-attachment: fixed;
        color: #EFEFEF;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dark body {
        background: linear-gradient(135deg, #7F2629 0%, #372E2C 50%, #53284F 100%);
        background-attachment: fixed;
        color: #EFEFEF;
      }

      /* 主容器背景 */
      #theme-gitbook {
        background: linear-gradient(135deg, rgba(127, 38, 41, 0.1) 0%, rgba(55, 46, 44, 0.1) 50%, rgba(83, 40, 79, 0.1) 100%);
        backdrop-filter: blur(10px);
        color: #EFEFEF;
      }
      
      .dark #theme-gitbook {
        background: linear-gradient(135deg, rgba(127, 38, 41, 0.1) 0%, rgba(55, 46, 44, 0.1) 50%, rgba(83, 40, 79, 0.1) 100%);
        backdrop-filter: blur(10px);
        color: #EFEFEF;
      }

      /* 左侧导航栏样式 - iOS 18磨砂玻璃 */
      .nav-sidebar {
        background: rgba(127, 38, 41, 0.15);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-right: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .dark .nav-sidebar {
        background: rgba(127, 38, 41, 0.15);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-right: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      /* 右侧信息栏样式 - iOS 18磨砂玻璃 */
      .info-sidebar {
        background: rgba(55, 46, 44, 0.15);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-left: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .dark .info-sidebar {
        background: rgba(55, 46, 44, 0.15);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-left: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      /* 文章内容区域样式 - iOS 18风格 */
      #center-wrapper {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.1);
        border-radius: 20px;
        color: #372E2C;
        margin: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .dark #center-wrapper {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.1);
        border-radius: 20px;
        color: #372E2C;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      /* 标题样式 - iOS 18风格 */
      h1, h2, h3, h4, h5, h6 {
        color: #372E2C;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #372E2C;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* 链接样式 - iOS 18风格 */
      a {
        color: #7F2629;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        font-weight: 500;
      }
      
      a:hover {
        color: #53284F;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
      }
      
      .dark a {
        color: #7F2629;
      }
      
      .dark a:hover {
        color: #53284F;
      }

      /* 按钮样式 - iOS 18风格 */
      button, .btn {
        background: rgba(127, 38, 41, 0.8);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 16px;
        color: #EFEFEF;
        padding: 12px 24px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px rgba(127, 38, 41, 0.2);
        position: relative;
        overflow: hidden;
      }
      
      button:hover, .btn:hover {
        background: rgba(83, 40, 79, 0.8);
        border-color: rgba(204, 159, 83, 0.4);
        box-shadow: 0 8px 30px rgba(127, 38, 41, 0.3);
        transform: translateY(-2px) scale(1.02);
      }
      
      button:active, .btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* 卡片样式 - iOS 18磨砂玻璃 */
      .card, .info-card {
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.1);
        border-radius: 20px;
        padding: 24px;
        margin: 16px 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        color: #372E2C;
      }
      
      .card:hover, .info-card:hover {
        border-color: rgba(204, 159, 83, 0.3);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-4px) scale(1.01);
      }
      
      .dark .card, .dark .info-card {
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        color: #372E2C;
      }

      /* 输入框样式 - iOS 18风格 */
      input, textarea, select {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 16px;
        color: #372E2C;
        padding: 16px 20px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 16px;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: rgba(127, 38, 41, 0.5);
        box-shadow: 0 0 0 4px rgba(127, 38, 41, 0.1);
        background: rgba(239, 239, 239, 1);
        transform: scale(1.02);
      }
      
      .dark input, .dark textarea, .dark select {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #372E2C;
      }

      /* 底部按钮组样式 - iOS 18磨砂玻璃 */
      .bottom-button-group {
        background: rgba(127, 38, 41, 0.2);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-top: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .dark .bottom-button-group {
        background: rgba(127, 38, 41, 0.2);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-top: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.1);
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

      /* 文字颜色优化 - iOS 18风格 */
      p, div, span, li {
        color: #372E2C;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }
      
      .dark p, .dark div, .dark span, .dark li {
        color: #372E2C;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }

      /* 代码块样式 - iOS 18风格 */
      pre, code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
        border-radius: 16px;
        padding: 16px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      }
      
      .dark pre, .dark code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }

      /* 下拉菜单和导航优化 - iOS 18磨砂玻璃 */
      .dropdown-menu, .menu-dropdown {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        padding: 12px 0;
        margin-top: 8px;
      }
      
      .dropdown-menu a, .menu-dropdown a {
        color: #372E2C;
        padding: 12px 20px;
        display: block;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dropdown-menu a:hover, .menu-dropdown a:hover {
        background: rgba(127, 38, 41, 0.1);
        color: #7F2629;
        transform: translateX(4px);
      }

      /* 正文预览优化 - iOS 18磨砂玻璃 */
      .post-preview, .article-preview {
        background: rgba(239, 239, 239, 0.8);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(204, 159, 83, 0.1);
        border-radius: 20px;
        padding: 24px;
        margin: 20px 0;
        color: #372E2C;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .post-preview:hover, .article-preview:hover {
        border-color: rgba(204, 159, 83, 0.3);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-4px) scale(1.01);
      }

      /* 响应式设计 */
      @media (max-width: 768px) {
        #center-wrapper {
          padding: 10px;
        }
      }
    `}</style>
  )
}

export { Style }
