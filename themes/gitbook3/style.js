/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* AI风格变量定义 */
      :root {
        --ai-primary: #667eea;
        --ai-secondary: #764ba2;
        --ai-accent: #4facfe;
        --ai-purple: #8b5cf6;
        --ai-blue: #3b82f6;
        --ai-cyan: #06b6d4;
        --ai-gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --ai-gradient-secondary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        --ai-gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
        --ai-gradient-dark: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%);
        --glass-bg: rgba(255, 255, 255, 0.08);
        --glass-bg-dark: rgba(0, 0, 0, 0.25);
        --glass-border: rgba(255, 255, 255, 0.18);
        --glass-border-dark: rgba(139, 92, 246, 0.3);
        --glass-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        --ios-blur: blur(20px);
        --ios-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      /* 主体背景 - AI蓝紫渐变 */
      body {
        background: var(--ai-gradient-primary);
        background-attachment: fixed;
        color: #1f2937;
        transition: all 0.3s ease;
      }

      .dark body {
        background: var(--ai-gradient-dark);
        background-attachment: fixed;
        color: #f3f4f6;
      }

      /* AI风格变量定义 */
      :root {
        --ai-primary: #667eea;
        --ai-secondary: #764ba2;
        --ai-accent: #4facfe;
        --ai-purple: #8b5cf6;
        --ai-blue: #3b82f6;
        --ai-cyan: #06b6d4;
        --ai-gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --ai-gradient-secondary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        --ai-gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
        --ai-gradient-dark: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%);
        --glass-bg: rgba(255, 255, 255, 0.08);
        --glass-bg-dark: rgba(0, 0, 0, 0.25);
        --glass-border: rgba(255, 255, 255, 0.18);
        --glass-border-dark: rgba(139, 92, 246, 0.3);
        --glass-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        --ios-blur: blur(20px);
        --ios-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      /* 底色 */
      .dark body {
        background-color: transparent;
      }

      .bottom-button-group, .gitbook-footer {
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid var(--glass-border);
        box-shadow: 0px -6px 25px rgba(0, 0, 0, 0.15);
      }

      .dark .bottom-button-group, .dark .gitbook-footer {
        background: rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(139, 92, 246, 0.4);
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* 确保文本颜色在AI背景下可读 */
      .ai-bg {
        color: rgba(255, 255, 255, 0.9);
      }

      .ai-bg .dark {
        color: rgba(255, 255, 255, 0.95);
      }

      /* 侧边栏优化 */
      .gitbook-sidebar, .w-80, .sidebar {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-right: 1px solid var(--glass-border);
        border-radius: 0 20px 20px 0;
      }

      .gitbook-sidebar {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.18);
      }

      .dark .gitbook-sidebar, .dark .w-80, .dark .sidebar {
        background: rgba(0, 0, 0, 0.3) !important;
        border-right: 1px solid rgba(139, 92, 246, 0.3);
      }

      /* 搜索框优化 */
      input[type="search"], input[type="text"] {
        background: var(--glass-bg) !important;
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        transition: all 0.3s ease;
        color: inherit;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }

      .search-input {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(12px);
        border-radius: 0.75rem;
        color: rgba(255, 255, 255, 0.9);
      }

      input[type="search"]:focus, input[type="text"]:focus {
        border-color: var(--ai-cyan);
        box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        outline: none;
        transform: scale(1.02);
      }

      .search-input:focus {
        border-color: rgb(var(--brand-2));
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
      }

      .dark input[type="search"], .dark input[type="text"] {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(139, 92, 246, 0.4);
        color: #f3f4f6;
      }

      /* 导航项优化 */
      .nav-item, .menu-item, .gitbook-nav-item {
        background: var(--glass-bg);
        margin: 4px 0;
        border-radius: 14px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: var(--ios-blur);
        -webkit-backdrop-filter: var(--ios-blur);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .nav-item {
        transition: all 0.2s ease;
      }

      .nav-item:hover, .menu-item:hover, .gitbook-nav-item:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 25px rgba(79, 172, 254, 0.3);
      }

      .nav-item:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(4px);
      }

      .dark .nav-item, .dark .menu-item, .dark .gitbook-nav-item {
        background: var(--glass-bg-dark);
        border: 1px solid rgba(139, 92, 246, 0.2);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 2px 10px rgba(0, 0, 0, 0.3);
      }

      .dark .nav-item:hover, .dark .menu-item:hover, .dark .gitbook-nav-item:hover {
        background: rgba(139, 92, 246, 0.15);
        border: 1px solid rgba(139, 92, 246, 0.4);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 25px rgba(139, 92, 246, 0.4);
      }

      /* 文章内容区域 */
      .notion-page, .gitbook-container {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 20px;
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
      }

      .notion-page {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.18);
        padding: 2rem;
        margin: 1rem;
      }

      .dark .notion-page, .dark .gitbook-container {
        background: rgba(0, 0, 0, 0.25) !important;
        border: 1px solid rgba(139, 92, 246, 0.3);
      }

      .dark .notion-page {
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 0.9);
      }

      /* 顶部导航栏玻璃效果 */
      .top-nav, .gitbook-header, header {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--glass-border);
        box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
      }

      .dark .top-nav, .dark .gitbook-header, .dark header {
        background: rgba(0, 0, 0, 0.4) !important;
        border-bottom: 1px solid rgba(139, 92, 246, 0.4);
      }

      /* 内容区域玻璃效果 */
      .notion-page-content, .gitbook-content, .content-area {
        background: rgba(255, 255, 255, 0.8) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--glass-border);
        margin: 20px;
        padding: 2rem;
      }

      .dark .notion-page-content, .dark .gitbook-content, .dark .content-area {
        background: rgba(0, 0, 0, 0.6) !important;
        border: 1px solid rgba(139, 92, 246, 0.3);
        color: #f3f4f6;
      }

      /* iOS磨砂玻璃风格按钮 */
      button, .btn, .cursor-pointer {
        background: var(--glass-bg) !important;
        backdrop-filter: var(--ios-blur);
        -webkit-backdrop-filter: var(--ios-blur);
        border: 1px solid var(--glass-border);
        border-radius: 16px;
        color: white !important;
        font-weight: 600;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: var(--ios-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        padding: 10px 20px;
      }

      button:hover, .btn:hover, .cursor-pointer:hover {
        transform: translateY(-2px) scale(1.02);
        background: rgba(255, 255, 255, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 12px 30px rgba(79, 172, 254, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
      }

      button:active, .btn:active, .cursor-pointer:active {
        transform: translateY(0) scale(0.98);
      }

      .dark button, .dark .btn, .dark .cursor-pointer {
        background: var(--glass-bg-dark) !important;
        border-color: var(--glass-border-dark);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      }

      .dark button:hover, .dark .btn:hover, .dark .cursor-pointer:hover {
        background: rgba(139, 92, 246, 0.2) !important;
        border-color: rgba(139, 92, 246, 0.4);
      }

      /* AI链接样式 */
      a {
        color: var(--ai-cyan) !important;
        transition: all 0.3s ease;
        text-decoration: none;
        position: relative;
      }

      a:hover {
        color: var(--ai-purple) !important;
        text-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
      }

      .dark a {
        color: #4facfe;
      }

      .dark a:hover {
        color: #8b5cf6;
        text-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
      }

      /* AI悬浮按钮 */
      .jump-to-top, .float-button {
        background: var(--ai-gradient-secondary);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 6px 25px rgba(79, 172, 254, 0.4);
        transition: all 0.4s ease;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
      }

      .jump-to-top:hover, .float-button:hover {
        transform: translateY(-6px) scale(1.15);
        box-shadow: 0 12px 40px rgba(79, 172, 254, 0.6);
        background: var(--ai-gradient-accent);
      }

      /* AI悬浮按钮 */
      .jump-to-top, .float-button {
        background: var(--ai-gradient-secondary);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 6px 25px rgba(79, 172, 254, 0.4);
        transition: all 0.4s ease;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
      }

      .jump-to-top:hover, .float-button:hover {
        transform: translateY(-6px) scale(1.15);
        box-shadow: 0 12px 40px rgba(79, 172, 254, 0.6);
        background: var(--ai-gradient-accent);
      }

      /* AI发光动画 */
      .glow, .ai-glow {
        animation: ai-glow 3s ease-in-out infinite alternate;
      }

      @keyframes ai-glow {
        from {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }
        to {
          box-shadow: 0 0 35px rgba(139, 92, 246, 0.7);
        }
      }

      /* GitBook特定样式优化 */
      .gitbook-navigation .menu-item-active {
        background: var(--ai-gradient-primary);
        color: white;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      }

      .gitbook-navigation ul li {
        border-radius: 12px;
        margin: 4px 0;
        transition: all 0.3s ease;
      }

      .gitbook-navigation ul li:hover {
        background: rgba(79, 172, 254, 0.2);
        transform: translateX(8px);
      }

      /* 响应式优化 */
      @media (max-width: 768px) {
        .notion-page-content, .gitbook-content {
          margin: 15px;
          padding: 1.5rem;
          border-radius: 16px;
        }
        
        .jump-to-top, .float-button {
          width: 45px;
          height: 45px;
        }
      }

      /* AI粒子效果背景 */
      body:before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.05) 0%, transparent 50%);
        pointer-events: none;
        z-index: -1;
      }

      .dark body:before {
        background: radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
      }
    `}</style>
  )
}

export { Style }