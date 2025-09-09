/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      .dark body {
        background-color: black;
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* GitBook2 主题移动端响应式优化 */
      
      /* 基础移动端优化 */
      #theme-gitbook {
        overflow-x: hidden;
      }
      
      /* 移动端内容区域优化 */
      @media (max-width: 768px) {
        #theme-gitbook #center-wrapper {
          padding-bottom: 80px; /* 为底部导航栏留出更多空间 */
        }
        
        #theme-gitbook #container-inner {
          padding-left: 16px;
          padding-right: 16px;
          max-width: 100%;
        }
        
        /* 移动端文章内容优化 */
        #theme-gitbook #article-wrapper {
          padding: 0 8px;
        }
        
        /* 移动端标题优化 */
        #theme-gitbook h1 {
          font-size: 1.75rem;
          line-height: 1.3;
          margin-bottom: 1rem;
          word-break: break-word;
        }
        
        /* 移动端段落优化 */
        #theme-gitbook p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        /* 移动端代码块优化 */
        #theme-gitbook pre {
          overflow-x: auto;
          font-size: 0.875rem;
          padding: 12px;
          margin: 1rem 0;
          border-radius: 6px;
        }
        
        /* 移动端表格优化 */
        #theme-gitbook table {
          display: block;
          overflow-x: auto;
          white-space: nowrap;
          margin: 1rem 0;
        }
        
        /* 移动端图片优化 */
        #theme-gitbook img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1rem auto;
        }
        
        /* 移动端引用块优化 */
        #theme-gitbook blockquote {
          margin: 1rem 0;
          padding: 12px 16px;
          border-left: 4px solid #e5e7eb;
          background-color: #f9fafb;
        }
        
        .dark #theme-gitbook blockquote {
          background-color: #1f2937;
          border-left-color: #4b5563;
        }
      }
      
      /* 小屏幕优化 (最大宽度 480px) */
      @media (max-width: 480px) {
        #theme-gitbook #container-inner {
          padding-left: 12px;
          padding-right: 12px;
        }
        
        #theme-gitbook h1 {
          font-size: 1.5rem;
        }
        
        #theme-gitbook h2 {
          font-size: 1.25rem;
        }
        
        #theme-gitbook h3 {
          font-size: 1.125rem;
        }
        
        /* 移动端底部导航栏优化 */
        #theme-gitbook .md\\:hidden {
          height: 64px;
        }
        
        /* 移动端抽屉组件优化 */
        #gitbook-left-float .w-72 {
          width: 280px;
          max-width: 85vw;
        }
        
        #gitbook-toc-float .w-60 {
          width: 240px;
          max-width: 80vw;
        }
      }
      
      /* 移动端导航栏优化 */
      @media (max-width: 768px) {
        #theme-gitbook #top-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }
        
        #theme-gitbook #top-nav .h-16 {
          height: 56px;
        }
        
        /* 移动端搜索框优化 */
        #theme-gitbook .search-input {
          width: 100%;
          max-width: 200px;
        }
      }
      
      /* 移动端抽屉动画优化 */
      @media (max-width: 768px) {
        #gitbook-left-float,
        #gitbook-toc-float {
          transition: all 0.3s ease-in-out;
        }
        
        #gitbook-left-float .animate__slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }
        
        #gitbook-left-float .animate__slideOutLeft {
          animation: slideOutLeft 0.3s ease-out;
        }
        
        #gitbook-toc-float .animate__slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        
        #gitbook-toc-float .animate__slideOutRight {
          animation: slideOutRight 0.3s ease-out;
        }
      }
      
      /* 动画定义 */
      @keyframes slideInLeft {
        from {
          transform: translateX(-100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutLeft {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(-100%);
          opacity: 0;
        }
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      
      /* 移动端滚动优化 */
      @media (max-width: 768px) {
        #theme-gitbook {
          -webkit-overflow-scrolling: touch;
        }
        
        #theme-gitbook .overflow-y-scroll {
          -webkit-overflow-scrolling: touch;
        }
      }
      
      /* 移动端触摸优化 */
      @media (max-width: 768px) {
        #theme-gitbook button,
        #theme-gitbook .cursor-pointer {
          min-height: 44px;
          min-width: 44px;
        }
        
        #theme-gitbook a {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
        }
      }
      
      /* 移动端深色模式优化 */
      @media (max-width: 768px) {
        .dark #theme-gitbook {
          background-color: #000000;
        }
        
        .dark #theme-gitbook #top-nav {
          background-color: #1f2937;
          border-bottom-color: #374151;
        }
        
        .dark #theme-gitbook .md\\:hidden {
          background-color: #1f2937;
          border-top-color: #374151;
        }
      }
    `}</style>
  )
}

export { Style }
