/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 自定义色盘科技感主题样式 */
      
      /* 全局背景渐变 */
      body {
        background: linear-gradient(135deg, #003B40 0%, #372E2C 50%, #53284F 100%);
        background-attachment: fixed;
        color: #EFEFEF;
        min-height: 100vh;
      }
      
      .dark body {
        background: linear-gradient(135deg, #003B40 0%, #372E2C 50%, #53284F 100%);
        background-attachment: fixed;
        color: #EFEFEF;
      }

      /* 主容器背景 */
      #theme-gitbook {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.1) 0%, rgba(55, 46, 44, 0.1) 50%, rgba(83, 40, 79, 0.1) 100%);
        backdrop-filter: blur(10px);
        color: #EFEFEF;
      }
      
      .dark #theme-gitbook {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.1) 0%, rgba(55, 46, 44, 0.1) 50%, rgba(83, 40, 79, 0.1) 100%);
        backdrop-filter: blur(10px);
        color: #EFEFEF;
      }

      /* 左侧导航栏样式 */
      .nav-sidebar {
        background: linear-gradient(180deg, rgba(0, 59, 64, 0.8) 0%, rgba(55, 46, 44, 0.8) 100%);
        backdrop-filter: blur(15px);
        border-right: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
      }
      
      .dark .nav-sidebar {
        background: linear-gradient(180deg, rgba(0, 59, 64, 0.8) 0%, rgba(55, 46, 44, 0.8) 100%);
        backdrop-filter: blur(15px);
        border-right: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
      }

      /* 右侧信息栏样式 */
      .info-sidebar {
        background: linear-gradient(180deg, rgba(55, 46, 44, 0.8) 0%, rgba(83, 40, 79, 0.8) 100%);
        backdrop-filter: blur(15px);
        border-left: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
      }
      
      .dark .info-sidebar {
        background: linear-gradient(180deg, rgba(55, 46, 44, 0.8) 0%, rgba(83, 40, 79, 0.8) 100%);
        backdrop-filter: blur(15px);
        border-left: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
      }

      /* 文章内容区域样式 */
      #center-wrapper {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.2) 0%, rgba(55, 46, 44, 0.2) 50%, rgba(83, 40, 79, 0.2) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 15px;
        color: #EFEFEF;
        margin: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      
      .dark #center-wrapper {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.2) 0%, rgba(55, 46, 44, 0.2) 50%, rgba(83, 40, 79, 0.2) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 15px;
        color: #EFEFEF;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        background: linear-gradient(135deg, #CC9F53 0%, #EFEFEF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
        text-shadow: 0 0 30px rgba(204, 159, 83, 0.3);
      }
      
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        background: linear-gradient(135deg, #CC9F53 0%, #EFEFEF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
        text-shadow: 0 0 30px rgba(204, 159, 83, 0.3);
      }

      /* 链接样式 */
      a {
        color: #CC9F53;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
      }
      
      a:hover {
        color: #EFEFEF;
        text-shadow: 0 0 10px rgba(204, 159, 83, 0.8);
        text-decoration: underline;
      }
      
      .dark a {
        color: #CC9F53;
      }
      
      .dark a:hover {
        color: #EFEFEF;
        text-shadow: 0 0 10px rgba(204, 159, 83, 0.8);
      }

      /* 按钮样式 */
      button, .btn {
        background: linear-gradient(135deg, #7F2629 0%, #53284F 100%);
        border: 1px solid rgba(204, 159, 83, 0.3);
        border-radius: 8px;
        color: #EFEFEF;
        padding: 10px 20px;
        transition: all 0.3s ease;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(127, 38, 41, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      button:hover, .btn:hover {
        background: linear-gradient(135deg, #53284F 0%, #7F2629 100%);
        border-color: #CC9F53;
        box-shadow: 0 8px 25px rgba(127, 38, 41, 0.5);
        transform: translateY(-2px);
      }
      
      button:before, .btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(204, 159, 83, 0.2), transparent);
        transition: left 0.5s;
      }
      
      button:hover:before, .btn:hover:before {
        left: 100%;
      }

      /* 卡片样式 */
      .card, .info-card {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.3) 0%, rgba(55, 46, 44, 0.3) 50%, rgba(83, 40, 79, 0.3) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 12px;
        padding: 20px;
        margin: 12px 0;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
      
      .card:hover, .info-card:hover {
        border-color: #CC9F53;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        transform: translateY(-3px);
      }
      
      .dark .card, .dark .info-card {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.3) 0%, rgba(55, 46, 44, 0.3) 50%, rgba(83, 40, 79, 0.3) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }

      /* 输入框样式 */
      input, textarea, select {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.4) 0%, rgba(55, 46, 44, 0.4) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.3);
        border-radius: 8px;
        color: #EFEFEF;
        padding: 12px 16px;
        transition: all 0.3s ease;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #CC9F53;
        box-shadow: 0 0 0 3px rgba(204, 159, 83, 0.2);
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.6) 0%, rgba(55, 46, 44, 0.6) 100%);
      }
      
      .dark input, .dark textarea, .dark select {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.4) 0%, rgba(55, 46, 44, 0.4) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.3);
        color: #EFEFEF;
      }

      /* 底部按钮组样式 */
      .bottom-button-group {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.9) 0%, rgba(55, 46, 44, 0.9) 50%, rgba(83, 40, 79, 0.9) 100%);
        backdrop-filter: blur(20px);
        border-top: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.3);
      }
      
      .dark .bottom-button-group {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.9) 0%, rgba(55, 46, 44, 0.9) 50%, rgba(83, 40, 79, 0.9) 100%);
        backdrop-filter: blur(20px);
        border-top: 2px solid rgba(204, 159, 83, 0.3);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.3);
      }

      /* 滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 59, 64, 0.3);
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

      /* 文字颜色优化 */
      p, div, span, li {
        color: #EFEFEF;
      }
      
      .dark p, .dark div, .dark span, .dark li {
        color: #EFEFEF;
      }

      /* 代码块样式 */
      pre, code {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.4) 0%, rgba(55, 46, 44, 0.4) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
        border-radius: 8px;
        padding: 12px;
      }
      
      .dark pre, .dark code {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.4) 0%, rgba(55, 46, 44, 0.4) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }

      /* 下拉菜单和导航优化 */
      .dropdown-menu, .menu-dropdown {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.9) 0%, rgba(55, 46, 44, 0.9) 50%, rgba(83, 40, 79, 0.9) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.3);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        padding: 8px 0;
      }
      
      .dropdown-menu a, .menu-dropdown a {
        color: #EFEFEF;
        padding: 8px 16px;
        display: block;
        transition: all 0.3s ease;
      }
      
      .dropdown-menu a:hover, .menu-dropdown a:hover {
        background: rgba(204, 159, 83, 0.2);
        color: #CC9F53;
      }

      /* 正文预览优化 */
      .post-preview, .article-preview {
        background: linear-gradient(135deg, rgba(0, 59, 64, 0.2) 0%, rgba(55, 46, 44, 0.2) 50%, rgba(83, 40, 79, 0.2) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        border-radius: 12px;
        padding: 20px;
        margin: 16px 0;
        color: #EFEFEF;
      }
      
      .post-preview:hover, .article-preview:hover {
        border-color: #CC9F53;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
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
