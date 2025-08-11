
/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* AI 风格主题样式 */
      .ai-bg {
        background: 
          radial-gradient(1200px 600px at 10% -20%, rgba(124,58,237,.25), transparent 60%),
          radial-gradient(900px 500px at 90% 0%, rgba(79,70,229,.20), transparent 55%),
          linear-gradient(180deg, #0a0a12 0%, #0b0f26 60%, #0a0818 100%);
        min-height: 100vh;
      }

      /* 玻璃效果 */
      .glass {
        background-color: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: all 0.3s ease;
      }

      .dark .glass {
        background-color: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.16);
      }

      .glass:hover {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.24);
      }

      /* 阴影效果 */
      .shadow-glass {
        box-shadow: 0 10px 30px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.06);
      }

      /* 品牌渐变 */
      .bg-brand-gradient {
        background-image: linear-gradient(135deg,
          rgb(79, 70, 229) 0%,
          rgb(124, 58, 237) 52%,
          rgb(168, 85, 247) 100%);
      }

      /* 文字渐变 */
      .text-brand-gradient {
        background-image: linear-gradient(90deg,
          rgb(79, 70, 229) 0%,
          rgb(168, 85, 247) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      /* 侧边栏样式 */
      .sidebar-glass {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* 导航项悬停 */
      .nav-item {
        transition: all 0.2s ease;
        border-radius: 0.75rem;
      }

      .nav-item:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(4px);
      }

      /* 内容区域 */
      .content-glass {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
      }

      /* 底部菜单 */
      .bottom-button-group {
        box-shadow: 0px -6px 25px rgba(0, 0, 0, 0.15);
      }

      /* 搜索框样式 */
      .search-input {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(12px);
        border-radius: 0.75rem;
        color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
      }

      .search-input:focus {
        border-color: rgb(124, 58, 237);
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
        outline: none;
      }

      /* 确保文本在 AI 背景下可读 */
      .ai-bg {
        color: rgba(255, 255, 255, 0.9);
      }

      .ai-bg .dark {
        color: rgba(255, 255, 255, 0.95);
      }

      /* 响应式调整 */
      @media (max-width: 768px) {
        .content-glass {
          margin: 1rem;
          padding: 1.5rem;
          border-radius: 1rem;
        }
      }

      /* 动画效果 */
      @keyframes ai-glow {
        from {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
        }
        to {
          box-shadow: 0 0 35px rgba(168, 85, 247, 0.7);
        }
      }

      .ai-glow {
        animation: ai-glow 3s ease-in-out infinite alternate;
      }

      /* 滚动条样式 */
      .scroll-hidden::-webkit-scrollbar {
        width: 4px;
      }

      .scroll-hidden::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
      }

      .scroll-hidden::-webkit-scrollbar-thumb {
        background: rgba(124, 58, 237, 0.6);
        border-radius: 2px;
      }

      .scroll-hidden::-webkit-scrollbar-thumb:hover {
        background: rgba(124, 58, 237, 0.8);
      }
    `}</style>
  )
}

export { Style }
