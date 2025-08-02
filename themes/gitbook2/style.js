/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 极客蓝紫渐变主题变量 */
      :root {
        --cyber-blue: #00d4ff;
        --neon-purple: #8b5cf6;
        --electric-blue: #3b82f6;
        --tech-purple: #8a2be2;
        --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --secondary-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        --accent-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        --dark-gradient: linear-gradient(135deg, #232526 0%, #414345 100%);
      }

      /* 底色 - 极客蓝紫渐变 */
      body {
        background: var(--primary-gradient);
        background-attachment: fixed;
        color: #333;
      }

      .dark body {
        background: var(--dark-gradient);
        background-attachment: fixed;
        color: #e5e7eb;
      }

      /* 主容器透明玻璃效果 */
      .notion-page {
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(15px);
        border-radius: 16px;
      }

      .dark .notion-page {
        background: rgba(0, 0, 0, 0.3) !important;
        backdrop-filter: blur(15px);
      }

      /* 顶部导航栏玻璃效果 */
      .top-nav, .gitbook-header {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }

      .dark .top-nav, .dark .gitbook-header {
        background: rgba(0, 0, 0, 0.4) !important;
        border-bottom: 1px solid rgba(139, 92, 246, 0.3);
      }

      /* 左侧导航栏 */
      .gitbook-sidebar, .w-80 {
        background: rgba(255, 255, 255, 0.08) !important;
        backdrop-filter: blur(15px);
        border-right: 1px solid rgba(102, 126, 234, 0.2);
      }

      .dark .gitbook-sidebar, .dark .w-80 {
        background: rgba(0, 0, 0, 0.3) !important;
        border-right: 1px solid rgba(139, 92, 246, 0.2);
      }

      /* 文章内容区域 */
      .notion-page-content, .gitbook-content {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(102, 126, 234, 0.2);
        margin: 20px;
        padding: 2rem;
      }

      .dark .notion-page-content, .dark .gitbook-content {
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(139, 92, 246, 0.3);
        color: #e5e7eb;
      }

      /* 按钮渐变效果 */
      button, .btn, .cursor-pointer {
        background: var(--secondary-gradient) !important;
        border: none;
        border-radius: 8px;
        color: white !important;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
      }

      button:hover, .btn:hover, .cursor-pointer:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
      }

      /* 链接极客蓝色 */
      a {
        color: var(--cyber-blue) !important;
        transition: all 0.3s ease;
        text-decoration: none;
      }

      a:hover {
        color: var(--neon-purple) !important;
        text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
      }

      .dark a {
        color: var(--cyber-blue);
      }

      .dark a:hover {
        color: #a8edea;
        text-shadow: 0 0 10px rgba(168, 237, 234, 0.5);
      }

      /* 导航菜单项科技感 */
      .nav-item, .menu-item {
        background: rgba(255, 255, 255, 0.1);
        margin: 4px 0;
        border-radius: 8px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
      }

      .nav-item:hover, .menu-item:hover {
        background: var(--secondary-gradient);
        transform: translateX(8px);
        border: 1px solid rgba(79, 172, 254, 0.5);
        box-shadow: 0 4px 20px rgba(79, 172, 254, 0.3);
      }

      .dark .nav-item, .dark .menu-item {
        background: rgba(0, 0, 0, 0.2);
      }

      .dark .nav-item:hover, .dark .menu-item:hover {
        background: var(--primary-gradient);
        border: 1px solid rgba(139, 92, 246, 0.5);
      }

      /* 标题渐变文字 */
      h1, h2, h3, h4, h5, h6 {
        background: var(--primary-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }

      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        background: var(--accent-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* 代码块科技感 */
      pre, code {
        background: rgba(0, 0, 0, 0.8) !important;
        border: 1px solid var(--cyber-blue);
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
      }

      /* 搜索框 */
      input[type="search"], input[type="text"] {
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(102, 126, 234, 0.3);
        border-radius: 8px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        color: inherit;
      }

      input[type="search"]:focus, input[type="text"]:focus {
        border-color: var(--cyber-blue);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        outline: none;
      }

      .dark input[type="search"], .dark input[type="text"] {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(139, 92, 246, 0.3);
        color: #e5e7eb;
      }

      /* 滚动条 */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--secondary-gradient);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-gradient);
      }

      /* 卡片玻璃效果 */
      .card, .shadow-card, .bg-white, .bg-gray-50 {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(102, 126, 234, 0.2);
        border-radius: 12px;
        transition: all 0.3s ease;
      }

      .card:hover, .shadow-card:hover, .bg-white:hover, .bg-gray-50:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        border-color: var(--cyber-blue);
      }

      .dark .card, .dark .shadow-card, .dark .bg-white, .dark .bg-gray-50 {
        background: rgba(0, 0, 0, 0.3) !important;
        border: 1px solid rgba(139, 92, 246, 0.2);
      }

      /* 底部按钮组 */
      .bottom-button-group, .gitbook-footer {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(102, 126, 234, 0.3);
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      .dark .bottom-button-group, .dark .gitbook-footer {
        background: rgba(0, 0, 0, 0.4);
        border-top: 1px solid rgba(139, 92, 246, 0.3);
      }

      /* 目录链接 */
      .toc a {
        color: var(--electric-blue) !important;
        transition: all 0.3s ease;
      }

      .toc a:hover {
        color: var(--neon-purple) !important;
        padding-left: 10px;
      }

      /* 标签 */
      .tag {
        background: var(--secondary-gradient);
        border-radius: 20px;
        padding: 4px 12px;
        color: white;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .tag:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
      }

      /* 分类 */
      .category {
        background: var(--primary-gradient);
        border-radius: 8px;
        padding: 6px 16px;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .category:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }

      /* 加载动画 */
      .animate-spin {
        color: var(--cyber-blue);
        filter: drop-shadow(0 0 10px var(--cyber-blue));
      }

      /* 跳转按钮 */
      .jump-to-top {
        background: var(--secondary-gradient);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        border: none;
        box-shadow: 0 4px 20px rgba(79, 172, 254, 0.4);
        transition: all 0.3s ease;
      }

      .jump-to-top:hover {
        transform: translateY(-4px) scale(1.1);
        box-shadow: 0 8px 30px rgba(79, 172, 254, 0.6);
      }

      /* 发光效果 */
      .glow {
        animation: glow 2s ease-in-out infinite alternate;
      }

      @keyframes glow {
        from {
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        to {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
      }

      /* GitBook 特有样式 */
      .gitbook-navigation .menu-item-active {
        background: var(--primary-gradient);
        color: white;
      }

      .gitbook-navigation ul li {
        border-radius: 8px;
        margin: 2px 0;
      }

      .gitbook-navigation ul li:hover {
        background: rgba(79, 172, 254, 0.2);
      }

      /* 响应式调整 */
      @media (max-width: 768px) {
        .notion-page-content, .gitbook-content {
          margin: 10px;
          padding: 1rem;
          border-radius: 12px;
        }
      }
    `}</style>
  )
}

export { Style }