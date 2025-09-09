/* eslint-disable react/no-unknown-property */
/**
 * GitBook风格主题样式
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
  // 底色
  .dark body{
      background-color: black;
  }
  
  // 文本不可选取
  .forbid-copy {
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
  }
  
  #theme-gitbook2 #announcement-content {
    /* background-color: #f6f6f6; */
  }
  
  #theme-gitbook2 .blog-item-title {
    color: #276077;
  }
  
  .dark #theme-gitbook2 .blog-item-title {
    color: #d1d5db;
  }
  
  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* GitBook风格布局 */
  #theme-gitbook2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  
  /* 侧边栏样式 */
  #theme-gitbook2 .sidebar {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;
  }
  
  #theme-gitbook2 .sidebar::-webkit-scrollbar {
    width: 6px;
  }
  
  #theme-gitbook2 .sidebar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  #theme-gitbook2 .sidebar::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }
  
  #theme-gitbook2 .sidebar::-webkit-scrollbar-thumb:hover {
    background-color: #a0aec0;
  }
  
  /* 目录样式 */
  #theme-gitbook2 .toc-container {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;
  }
  
  #theme-gitbook2 .toc-container::-webkit-scrollbar {
    width: 6px;
  }
  
  #theme-gitbook2 .toc-container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  #theme-gitbook2 .toc-container::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }
  
  #theme-gitbook2 .toc-container::-webkit-scrollbar-thumb:hover {
    background-color: #a0aec0;
  }
  
  /* 文章内容样式 */
  #theme-gitbook2 .article-content {
    line-height: 1.7;
  }
  
  #theme-gitbook2 .article-content h1,
  #theme-gitbook2 .article-content h2,
  #theme-gitbook2 .article-content h3,
  #theme-gitbook2 .article-content h4,
  #theme-gitbook2 .article-content h5,
  #theme-gitbook2 .article-content h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }
  
  #theme-gitbook2 .article-content h1 {
    font-size: 2rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }
  
  #theme-gitbook2 .article-content h2 {
    font-size: 1.5rem;
  }
  
  #theme-gitbook2 .article-content h3 {
    font-size: 1.25rem;
  }
  
  .dark #theme-gitbook2 .article-content h1 {
    border-bottom-color: #4a5568;
  }
  
  /* 代码块样式 */
  #theme-gitbook2 .article-content pre {
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .dark #theme-gitbook2 .article-content pre {
    background-color: #2d3748;
    border-color: #4a5568;
  }
  
  /* 引用块样式 */
  #theme-gitbook2 .article-content blockquote {
    border-left: 4px solid #3182ce;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4a5568;
  }
  
  .dark #theme-gitbook2 .article-content blockquote {
    color: #a0aec0;
  }
  
  /* 表格样式 */
  #theme-gitbook2 .article-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  
  #theme-gitbook2 .article-content th,
  #theme-gitbook2 .article-content td {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: left;
  }
  
  #theme-gitbook2 .article-content th {
    background-color: #f7fafc;
    font-weight: 600;
  }
  
  .dark #theme-gitbook2 .article-content th,
  .dark #theme-gitbook2 .article-content td {
    border-color: #4a5568;
  }
  
  .dark #theme-gitbook2 .article-content th {
    background-color: #2d3748;
  }
  
  /* 移动端抽屉动画 */
  #theme-gitbook2 .mobile-drawer {
    transition: transform 0.3s ease-in-out;
  }
  
  /*  菜单下划线动画 */
  #theme-gitbook2 .menu-link {
      text-decoration: none;
      background-image: linear-gradient(#dd3333, #dd3333);
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 0 2px;
      transition: background-size 100ms ease-in-out;
  }
   
  #theme-gitbook2 .menu-link:hover {
      background-size: 100% 2px;
      color: #dd3333;
      cursor: pointer;
  }
  
  /* 响应式调整 */
  @media (max-width: 1024px) {
    #theme-gitbook2 .article-content {
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 768px) {
    #theme-gitbook2 .article-content h1 {
      font-size: 1.75rem;
    }
    
    #theme-gitbook2 .article-content h2 {
      font-size: 1.375rem;
    }
    
    #theme-gitbook2 .article-content h3 {
      font-size: 1.125rem;
    }
  }

  `}</style>
}

export { Style }