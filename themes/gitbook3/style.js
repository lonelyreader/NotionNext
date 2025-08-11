
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

      /* 玻璃磨砂效果容器 */
      .notion-page, .gitbook-container {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 20px;
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
      }

      .dark .notion-page, .dark .gitbook-container {
        background: rgba(0, 0, 0, 0.25) !important;
        border: 1px solid rgba(139, 92, 246, 0.3);
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

      /* 左侧导航栏玻璃效果 */
      .gitbook-sidebar, .w-80, .sidebar {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-right: 1px solid var(--glass-border);
        border-radius: 0 20px 20px 0;
      }

      .dark .gitbook-sidebar, .dark .w-80, .dark .sidebar {
        background: rgba(0, 0, 0, 0.3) !important;
        border-right: 1px solid rgba(139, 92, 246, 0.3);
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

      /* iOS磨砂风格导航菜单项 */
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

      .nav-item:hover, .menu-item:hover, .gitbook-nav-item:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(8px) scale(1.01);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 25px rgba(79, 172, 254, 0.3);
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

      /* AI风格标题 */
      h1, h2, h3, h4, h5, h6 {
        background: var(--ai-gradient-primary);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        text-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
      }

      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        background: var(--ai-gradient-secondary);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* AI代码块 */
      pre, code {
        background: rgba(0, 0, 0, 0.9) !important;
        border: 1px solid var(--ai-cyan);
        border-radius: 12px;
        box-shadow: 0 0 25px rgba(6, 182, 212, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      /* AI搜索框 */
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

      input[type="search"]:focus, input[type="text"]:focus {
        border-color: var(--ai-cyan);
        box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        outline: none;
        transform: scale(1.02);
      }

      .dark input[type="search"], .dark input[type="text"] {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(139, 92, 246, 0.4);
        color: #f3f4f6;
      }

      /* AI滚动条 */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--glass-bg);
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--ai-gradient-secondary);
        border-radius: 10px;
        border: 2px solid transparent;
        background-clip: content-box;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--ai-gradient-accent);
        background-clip: content-box;
      }

      /* AI卡片效果 */
      .card, .shadow-card, .bg-white, .bg-gray-50 {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid var(--glass-border);
        border-radius: 16px;
        transition: all 0.4s ease;
        box-shadow: var(--glass-shadow);
      }

      .card:hover, .shadow-card:hover, .bg-white:hover, .bg-gray-50:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 16px 50px rgba(0, 0, 0, 0.25);
        border-color: var(--ai-cyan);
      }

      .dark .card, .dark .shadow-card, .dark .bg-white, .dark .bg-gray-50 {
        background: rgba(0, 0, 0, 0.4) !important;
        border: 1px solid rgba(139, 92, 246, 0.3);
      }

      /* 底部按钮组 */
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

      /* 目录链接AI效果 */
      .toc a, .catalog a {
        color: var(--ai-blue) !important;
        transition: all 0.3s ease;
        position: relative;
      }

      .toc a:hover, .catalog a:hover {
        color: var(--ai-purple) !important;
        padding-left: 15px;
        text-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
      }

      .toc a:before, .catalog a:before {
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 0;
        background: var(--ai-gradient-accent);
        transition: height 0.3s ease;
        border-radius: 2px;
      }

      .toc a:hover:before, .catalog a:hover:before {
        height: 100%;
      }

      /* AI标签 */
      .tag {
        background: var(--ai-gradient-secondary);
        border-radius: 20px;
        padding: 6px 16px;
        color: white;
        font-size: 0.875rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .tag:hover {
        transform: scale(1.1) rotate(2deg);
        box-shadow: 0 6px 20px rgba(79, 172, 254, 0.5);
        background: var(--ai-gradient-accent);
      }

      /* AI分类 */
      .category {
        background: var(--ai-gradient-primary);
        border-radius: 12px;
        padding: 8px 20px;
        color: white;
        font-weight: 700;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .category:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
        background: var(--ai-gradient-accent);
      }

      /* AI加载动画 */
      .animate-spin {
        color: var(--ai-cyan);
        filter: drop-shadow(0 0 15px var(--ai-cyan));
        animation: ai-pulse 2s ease-in-out infinite;
      }

      @keyframes ai-pulse {
        0%, 100% { 
          filter: drop-shadow(0 0 15px var(--ai-cyan));
        }
        50% { 
          filter: drop-shadow(0 0 25px var(--ai-purple));
        }
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
