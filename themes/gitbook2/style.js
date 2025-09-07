/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* CodeWithMosh风格主题样式 */
      
      /* 全局背景 */
      body {
        background: #0d1117;
        color: #e6edf3;
        min-height: 100vh;
      }
      
      .dark body {
        background: #0d1117;
        color: #e6edf3;
      }

      /* 主容器背景 */
      #theme-gitbook {
        background: #0d1117;
        color: #e6edf3;
      }
      
      .dark #theme-gitbook {
        background: #0d1117;
        color: #e6edf3;
      }

      /* 左侧导航栏样式 */
      .nav-sidebar {
        background: #161b22;
        border-right: 1px solid #30363d;
      }
      
      .dark .nav-sidebar {
        background: #161b22;
        border-right: 1px solid #30363d;
      }

      /* 右侧信息栏样式 */
      .info-sidebar {
        background: #161b22;
        border-left: 1px solid #30363d;
      }
      
      .dark .info-sidebar {
        background: #161b22;
        border-left: 1px solid #30363d;
      }

      /* 文章内容区域样式 */
      #center-wrapper {
        background: #0d1117;
        color: #e6edf3;
        margin: 0;
        padding: 20px;
      }
      
      .dark #center-wrapper {
        background: #0d1117;
        color: #e6edf3;
      }

      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        color: #f0f6fc;
        font-weight: 600;
      }
      
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #f0f6fc;
        font-weight: 600;
      }

      /* 链接样式 */
      a {
        color: #58a6ff;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      a:hover {
        color: #79c0ff;
        text-decoration: underline;
      }
      
      .dark a {
        color: #58a6ff;
      }
      
      .dark a:hover {
        color: #79c0ff;
      }

      /* 按钮样式 */
      button, .btn {
        background: #238636;
        border: 1px solid #238636;
        border-radius: 6px;
        color: #ffffff;
        padding: 8px 16px;
        transition: all 0.2s ease;
        font-weight: 500;
      }
      
      button:hover, .btn:hover {
        background: #2ea043;
        border-color: #2ea043;
      }

      /* 卡片样式 */
      .card, .info-card {
        background: #161b22;
        border: 1px solid #30363d;
        border-radius: 8px;
        padding: 16px;
        margin: 8px 0;
        transition: border-color 0.2s ease;
      }
      
      .card:hover, .info-card:hover {
        border-color: #58a6ff;
      }
      
      .dark .card, .dark .info-card {
        background: #161b22;
        border: 1px solid #30363d;
      }

      /* 输入框样式 */
      input, textarea, select {
        background: #0d1117;
        border: 1px solid #30363d;
        border-radius: 6px;
        color: #e6edf3;
        padding: 8px 12px;
        transition: border-color 0.2s ease;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #58a6ff;
        box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
      }
      
      .dark input, .dark textarea, .dark select {
        background: #0d1117;
        border: 1px solid #30363d;
        color: #e6edf3;
      }

      /* 底部按钮组样式 */
      .bottom-button-group {
        background: #161b22;
        border-top: 1px solid #30363d;
      }
      
      .dark .bottom-button-group {
        background: #161b22;
        border-top: 1px solid #30363d;
      }

      /* 滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #161b22;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #30363d;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #484f58;
      }

      /* 文字颜色优化 */
      p, div, span, li {
        color: #e6edf3;
      }
      
      .dark p, .dark div, .dark span, .dark li {
        color: #e6edf3;
      }

      /* 代码块样式 */
      pre, code {
        background: #161b22;
        border: 1px solid #30363d;
        color: #e6edf3;
      }
      
      .dark pre, .dark code {
        background: #161b22;
        border: 1px solid #30363d;
        color: #e6edf3;
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
