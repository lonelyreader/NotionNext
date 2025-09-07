/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 蓝紫渐变科技感主题样式 */
      
      /* 全局背景渐变 */
      body {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-attachment: fixed;
        min-height: 100vh;
      }
      
      .dark body {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        background-attachment: fixed;
      }

      /* 主容器科技感背景 */
      #theme-gitbook {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .dark #theme-gitbook {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 50%, rgba(15, 52, 96, 0.8) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(102, 126, 234, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      /* 左侧导航栏科技感样式 */
      .nav-sidebar {
        background: linear-gradient(180deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
        backdrop-filter: blur(15px);
        border-right: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
      }
      
      .dark .nav-sidebar {
        background: linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%);
        border-right: 1px solid rgba(102, 126, 234, 0.4);
        box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
      }

      /* 右侧信息栏科技感样式 */
      .info-sidebar {
        background: linear-gradient(180deg, rgba(118, 75, 162, 0.15) 0%, rgba(102, 126, 234, 0.15) 100%);
        backdrop-filter: blur(15px);
        border-left: 1px solid rgba(118, 75, 162, 0.3);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
      }
      
      .dark .info-sidebar {
        background: linear-gradient(180deg, rgba(22, 33, 62, 0.9) 0%, rgba(15, 52, 96, 0.9) 100%);
        border-left: 1px solid rgba(118, 75, 162, 0.4);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
      }

      /* 文章内容区域科技感样式 */
      #center-wrapper {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        margin: 20px;
      }
      
      .dark #center-wrapper {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(22, 33, 62, 0.6) 100%);
        border: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      /* 标题科技感样式 */
      h1, h2, h3, h4, h5, h6 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
      }
      
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        background: linear-gradient(135deg, #64b5f6 0%, #ba68c8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 30px rgba(100, 181, 246, 0.5);
      }

      /* 链接科技感样式 */
      a {
        color: #667eea;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
      }
      
      a:hover {
        color: #764ba2;
        text-shadow: 0 0 10px rgba(102, 126, 234, 0.8);
      }
      
      .dark a {
        color: #64b5f6;
      }
      
      .dark a:hover {
        color: #ba68c8;
        text-shadow: 0 0 10px rgba(100, 181, 246, 0.8);
      }

      /* 按钮科技感样式 */
      button, .btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        border-radius: 10px;
        color: white;
        padding: 10px 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      button:hover, .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
      }
      
      button:before, .btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }
      
      button:hover:before, .btn:hover:before {
        left: 100%;
      }

      /* 卡片科技感样式 */
      .card, .info-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .card:hover, .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        border-color: rgba(102, 126, 234, 0.5);
      }
      
      .dark .card, .dark .info-card {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%);
        border: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      /* 输入框科技感样式 */
      input, textarea, select {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(102, 126, 234, 0.3);
        border-radius: 10px;
        color: #333;
        padding: 12px 16px;
        transition: all 0.3s ease;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
      }
      
      .dark input, .dark textarea, .dark select {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%);
        border: 1px solid rgba(102, 126, 234, 0.4);
        color: #e0e0e0;
      }

      /* 底部按钮组科技感样式 */
      .bottom-button-group {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.2);
      }
      
      .dark .bottom-button-group {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%);
        border-top: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 0px -8px 32px rgba(0, 0, 0, 0.4);
      }

      /* 滚动条科技感样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(102, 126, 234, 0.1);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
      }

      /* 动画效果 */
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
        50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
      }
      
      .glow-effect {
        animation: glow 2s ease-in-out infinite alternate;
      }

      /* 响应式设计 */
      @media (max-width: 768px) {
        #center-wrapper {
          margin: 10px;
          border-radius: 15px;
        }
        
        .nav-sidebar, .info-sidebar {
          backdrop-filter: blur(10px);
        }
      }
    `}</style>
  )
}

export { Style }
