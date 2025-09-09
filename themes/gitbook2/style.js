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

      /* 壳体背景变量定义 */
      :root {
        --shell-bg: #F6F7F9;
        --shell-bg-dark: #0B0B0C;
        --header-h: 56px;
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* 滚动条自动隐藏样式 - 优化版 */
      .scrollable {
        scrollbar-gutter: stable both-edges;
        -webkit-overflow-scrolling: touch;
        transition: scrollbar-color 0.2s ease;
      }

      /* WebKit 滚动条样式 - 优化版 */
      .scrollable::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      .scrollable::-webkit-scrollbar-track {
        background: transparent;
      }

      .scrollable:not(:hover)::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 9999px;
        transition: background-color 0.2s ease;
      }

      .scrollable:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 9999px;
        transition: background-color 0.2s ease;
      }

      .dark .scrollable:hover::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.25);
      }

      /* Firefox 滚动条样式 - 优化版 */
      .scrollable {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
      }

      .scrollable:not(:hover) {
        scrollbar-color: transparent transparent;
      }

      .dark .scrollable {
        scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
      }

      .dark .scrollable:not(:hover) {
        scrollbar-color: transparent transparent;
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
        
        /* 移动端标题优化 - 缩小20% */
        #theme-gitbook h1 {
          font-size: 1.4rem;
          line-height: 1.3;
          margin-bottom: 1rem;
          word-break: break-word;
        }
        
        /* 移动端段落优化 */
        #theme-gitbook p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        /* 移动端代码块优化 - 缩小20% */
        #theme-gitbook pre {
          overflow-x: auto;
          font-size: 0.7rem;
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
          font-size: 1.2rem;
        }
        
        #theme-gitbook h2 {
          font-size: 1rem;
        }
        
        #theme-gitbook h3 {
          font-size: 0.9rem;
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
      
      /* 深色模式壳体背景 */
      .dark #theme-gitbook {
        background-color: var(--shell-bg-dark);
      }

      /* 正文字号与行距优化 - 缩小20% */
      #theme-gitbook #article-wrapper {
        font-size: 13.6px;
        line-height: 1.7;
      }

      #theme-gitbook #article-wrapper p {
        font-size: 13.6px;
        line-height: 1.7;
        margin-top: 8px;
        margin-bottom: 16px;
      }

      /* 标题流体字号 - 缩小20% */
      #theme-gitbook #article-wrapper h1 {
        font-size: clamp(1.4rem, 3.2vw, 2rem);
        line-height: 1.3;
        margin-top: 12px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      #theme-gitbook #article-wrapper h2 {
        font-size: clamp(1.2rem, 2.8vw, 1.6rem);
        line-height: 1.4;
        margin-top: 16px;
        margin-bottom: 12px;
        font-weight: 600;
      }

      #theme-gitbook #article-wrapper h3 {
        font-size: clamp(1rem, 2.4vw, 1.2rem);
        line-height: 1.4;
        margin-top: 14px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      #theme-gitbook #article-wrapper h4 {
        font-size: clamp(0.9rem, 2vw, 1rem);
        line-height: 1.5;
        margin-top: 12px;
        margin-bottom: 8px;
        font-weight: 600;
      }

      #theme-gitbook #article-wrapper h5 {
        font-size: clamp(0.8rem, 1.6vw, 0.9rem);
        line-height: 1.5;
        margin-top: 10px;
        margin-bottom: 8px;
        font-weight: 600;
      }

      #theme-gitbook #article-wrapper h6 {
        font-size: clamp(0.7rem, 1.2vw, 0.8rem);
        line-height: 1.5;
        margin-top: 8px;
        margin-bottom: 6px;
        font-weight: 600;
      }

      /* 标题与段落垂直节奏优化 */
      #theme-gitbook #article-wrapper h1 {
        margin-top: 12px;
        margin-bottom: 10px;
      }

      #theme-gitbook #article-wrapper h2 {
        margin-top: 16px;
        margin-bottom: 12px;
      }

      #theme-gitbook #article-wrapper h3 {
        margin-top: 14px;
        margin-bottom: 10px;
      }

      /* 相邻段落统一段后距 */
      #theme-gitbook #article-wrapper p + p {
        margin-top: 0;
        margin-bottom: 16px;
      }

      /* 标题后段落间距 */
      #theme-gitbook #article-wrapper h1 + p,
      #theme-gitbook #article-wrapper h2 + p,
      #theme-gitbook #article-wrapper h3 + p,
      #theme-gitbook #article-wrapper h4 + p,
      #theme-gitbook #article-wrapper h5 + p,
      #theme-gitbook #article-wrapper h6 + p {
        margin-top: 8px;
      }

      /* 表格样式优化 */
      #theme-gitbook #article-wrapper table {
        border-collapse: collapse;
        width: 100%;
        margin: 16px 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        overflow: hidden;
      }

      #theme-gitbook #article-wrapper th {
        background-color: rgba(0, 0, 0, 0.02);
        font-weight: 600;
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      #theme-gitbook #article-wrapper td {
        padding: 10px 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      #theme-gitbook #article-wrapper tr:last-child td {
        border-bottom: none;
      }

      .dark #theme-gitbook #article-wrapper table {
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .dark #theme-gitbook #article-wrapper th {
        background-color: rgba(255, 255, 255, 0.02);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .dark #theme-gitbook #article-wrapper td {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      /* 代码块与引用块优化 - 缩小20% */
      #theme-gitbook #article-wrapper pre {
        margin: 16px 0;
        padding: 16px;
        background-color: rgba(0, 0, 0, 0.02);
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        overflow-x: auto;
        font-size: 11.2px;
        line-height: 1.5;
      }

      .dark #theme-gitbook #article-wrapper pre {
        background-color: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      #theme-gitbook #article-wrapper code {
        background-color: rgba(0, 0, 0, 0.04);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.72em;
      }

      .dark #theme-gitbook #article-wrapper code {
        background-color: rgba(255, 255, 255, 0.08);
      }

      /* 引用块优化 */
      #theme-gitbook #article-wrapper blockquote {
        margin: 16px 0;
        padding: 12px 16px;
        border-left: 4px solid #059669;
        background-color: rgba(5, 150, 105, 0.03);
        border-radius: 0 6px 6px 0;
      }

      .dark #theme-gitbook #article-wrapper blockquote {
        border-left-color: #10b981;
        background-color: rgba(16, 185, 129, 0.05);
      }

      /* 图片与图注优化 */
      #theme-gitbook #article-wrapper img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 14px auto;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .dark #theme-gitbook #article-wrapper img {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      /* 图注明度弱化 - 缩小20% */
      #theme-gitbook #article-wrapper figcaption,
      #theme-gitbook #article-wrapper .image-caption {
        font-size: 10.4px;
        color: rgba(0, 0, 0, 0.6);
        text-align: center;
        margin-top: 8px;
        margin-bottom: 16px;
        line-height: 1.4;
      }

      .dark #theme-gitbook #article-wrapper figcaption,
      .dark #theme-gitbook #article-wrapper .image-caption {
        color: rgba(255, 255, 255, 0.6);
      }

      /* 目录层级密度优化 */
      #theme-gitbook .toc-wrapper {
        line-height: 30px;
      }

      #theme-gitbook .toc-wrapper a {
        display: block;
        padding: 4px 0;
        text-decoration: none;
        transition: all 0.15s ease;
        border-left: 2px solid transparent;
        padding-left: 16px;
        margin: 2px 0;
        border-radius: 0 4px 4px 0;
      }

      #theme-gitbook .toc-wrapper a:hover {
        background-color: rgba(0, 0, 0, 0.02);
        color: #059669;
      }

      .dark #theme-gitbook .toc-wrapper a:hover {
        background-color: rgba(255, 255, 255, 0.03);
        color: #10b981;
      }

      /* 目录层级缩进 */
      #theme-gitbook .toc-wrapper .notion-table-of-contents-item-indent-level-0 {
        margin-left: 0;
      }

      #theme-gitbook .toc-wrapper .notion-table-of-contents-item-indent-level-1 {
        margin-left: 14px;
      }

      #theme-gitbook .toc-wrapper .notion-table-of-contents-item-indent-level-2 {
        margin-left: 22px;
      }

      /* 当前阅读锚点高亮 */
      #theme-gitbook .toc-wrapper a.border-green-500 {
        border-left-color: #059669;
        background-color: rgba(5, 150, 105, 0.08);
        color: #059669;
        font-weight: 600;
      }

      .dark #theme-gitbook .toc-wrapper a.border-green-500 {
        border-left-color: #10b981;
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
      }

      /* 作者InfoCard优化 - 左侧导航栏底部居中 */
      #theme-gitbook #info-card {
        padding: 16px 12px;
        border-radius: 0;
        background-color: transparent;
        border: none;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-shadow: none;
      }

      .dark #theme-gitbook #info-card {
        background-color: transparent;
        border: none;
      }

      #theme-gitbook #info-card img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: transform 0.15s ease;
      }

      #theme-gitbook #info-card img:hover {
        transform: scale(1.05);
      }

      #theme-gitbook #info-card .text-xl {
        font-size: 0.9rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        margin: 4px 0;
        transition: color 0.15s ease;
        text-align: center;
      }

      .dark #theme-gitbook #info-card .text-xl {
        color: rgba(255, 255, 255, 0.8);
      }

      #theme-gitbook #info-card .font-light {
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.4;
        margin-bottom: 8px;
        text-align: center;
      }

      .dark #theme-gitbook #info-card .font-light {
        color: rgba(255, 255, 255, 0.6);
      }

      /* 社交按钮优化 - 左侧导航栏底部 */
      #theme-gitbook #info-card .social-button {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 4px 8px;
        margin: 2px;
        transition: all 0.15s ease;
        background-color: transparent;
        font-size: 0.7rem;
      }

      #theme-gitbook #info-card .social-button:hover {
        background-color: rgba(0, 0, 0, 0.04);
        border-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
      }

      .dark #theme-gitbook #info-card .social-button {
        border-color: rgba(255, 255, 255, 0.1);
      }

      .dark #theme-gitbook #info-card .social-button:hover {
        background-color: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.2);
      }

      /* 文章信息模块优化 */
      #theme-gitbook .pt-10.pb-6 {
        padding-top: 16px;
        padding-bottom: 12px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        line-height: 1.6;
      }

      .dark #theme-gitbook .pt-10.pb-6 {
        border-bottom-color: rgba(255, 255, 255, 0.05);
      }

      /* 右侧边栏布局优化 - 目录在上信息卡在下 */
      #theme-gitbook .hidden.lg\\:block .py-4 {
        padding-top: 16px;
        padding-bottom: 16px;
      }

      /* 信息卡行距放松 */
      #theme-gitbook #info-card {
        margin-top: 24px;
        line-height: 1.6;
      }

      /* 图标风格一致性优化 */
      #theme-gitbook i.fas,
      #theme-gitbook i.far,
      #theme-gitbook i.fab {
        font-size: 0.875rem;
        line-height: 1;
        vertical-align: middle;
      }

      /* 图标颜色对比度优化 */
      #theme-gitbook i {
        color: rgba(0, 0, 0, 0.6);
        transition: color 0.15s ease;
      }

      #theme-gitbook i:hover {
        color: rgba(0, 0, 0, 0.8);
      }

      .dark #theme-gitbook i {
        color: rgba(255, 255, 255, 0.6);
      }

      .dark #theme-gitbook i:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      /* 特定图标大小统一 */
      #theme-gitbook .fa-search,
      #theme-gitbook .fa-bars,
      #theme-gitbook .fa-times {
        font-size: 1rem;
      }

      #theme-gitbook .fa-chevron-left {
        font-size: 0.75rem;
      }

      /* 颜色阶与强调色优化 */
      :root {
        --text-primary: rgba(0, 0, 0, 0.9);
        --text-secondary: rgba(0, 0, 0, 0.6);
        --text-tertiary: rgba(0, 0, 0, 0.4);
        --border-primary: rgba(0, 0, 0, 0.1);
        --accent-primary: #059669;
        --accent-secondary: #10b981;
      }

      .dark {
        --text-primary: rgba(255, 255, 255, 0.9);
        --text-secondary: rgba(255, 255, 255, 0.6);
        --text-tertiary: rgba(255, 255, 255, 0.4);
        --border-primary: rgba(255, 255, 255, 0.1);
        --accent-primary: #10b981;
        --accent-secondary: #059669;
      }

      /* 去掉不协调的黄色hover */
      #theme-gitbook .dark\\:hover\\:bg-yellow-100,
      #theme-gitbook .dark\\:hover\\:text-yellow-600 {
        background-color: transparent !important;
        color: inherit !important;
      }

      #theme-gitbook .dark\\:hover\\:bg-yellow-100:hover,
      #theme-gitbook .dark\\:hover\\:text-yellow-600:hover {
        background-color: rgba(255, 255, 255, 0.05) !important;
        color: var(--accent-primary) !important;
      }

      /* 断点策略优化 */
      /* md 单列，lg 起双列 */
      @media (max-width: 1023px) {
        #workspace-sheet {
          grid-template-columns: 1fr;
        }
        
        #theme-gitbook .hidden.lg\\:block {
          display: none;
        }
      }

      @media (min-width: 1024px) {
        #workspace-sheet {
          grid-template-columns: minmax(0, 1fr) 18rem;
        }
      }

      /* 移动端底部菜单显示时正文底部预留空间 */
      @media (max-width: 768px) {
        #theme-gitbook #center-wrapper {
          padding-bottom: 60px;
        }
      }

      /* 右栏在 md 以下折叠为目录按钮 */
      @media (max-width: 1023px) {
        #theme-gitbook .hidden.lg\\:block {
          display: none;
        }
      }

      /* 动效收敛优化 */
      #theme-gitbook * {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* 大面积卡片禁用 scale 放大 */
      #theme-gitbook .hover\\:scale-105:hover {
        transform: scale(1.02) !important;
      }

      #theme-gitbook .hover\\:scale-110:hover {
        transform: scale(1.05) !important;
      }

      /* 统一过渡时间 */
      #theme-gitbook .duration-150,
      #theme-gitbook .duration-200,
      #theme-gitbook .duration-300 {
        transition-duration: 0.15s !important;
      }

      /* 标准缓动曲线 */
      #theme-gitbook .ease-in-out,
      #theme-gitbook .ease-out,
      #theme-gitbook .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      /* 白纸工作区样式优化 - 统一边距 */
      #workspace-sheet {
        min-height: calc(100vh - 2rem);
        margin: 20px;
        margin-left: 0;
      }

      /* 纸面外边距与内边距优化 - 调整边距 */
      #theme-gitbook #container-inner {
        padding-left: 20px;
        padding-right: 20px;
      }

      /* 右侧边栏内边距与正文对齐 - 调整边距 */
      #theme-gitbook .hidden.lg\\:block {
        padding-right: 20px;
      }

      /* 移动端内边距调整 */
      @media (max-width: 768px) {
        #theme-gitbook #container-inner {
          padding-left: 18px;
          padding-right: 18px;
        }
        
        #workspace-sheet {
          margin: 16px;
          margin-left: 0;
        }
      }

      @media (max-width: 480px) {
        #theme-gitbook #container-inner {
          padding-left: 16px;
          padding-right: 16px;
        }
        
        #workspace-sheet {
          margin: 12px;
          margin-left: 0;
        }
      }
      
      /* 白纸圆角与轮廓优化 */
      #workspace-sheet {
        border-radius: 15px;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      }

      .dark #workspace-sheet {
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      /* 顶栏与纸面关系优化 - 自适应布局 */
      #theme-gitbook #top-nav {
        background-color: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        height: 56px;
        padding-left: 20px;
        padding-right: 20px;
        box-shadow: none;
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
        overflow: hidden;
      }

      .dark #theme-gitbook #top-nav {
        background-color: #0a0a0a;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      #theme-gitbook #top-nav .flex {
        height: 56px;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      }

      /* 顶部导航栏自适应布局优化 */
      #theme-gitbook #top-nav .flex > div:first-child {
        flex: 1;
        display: flex;
        align-items: center;
        min-width: 0;
        gap: 12px;
      }

      #theme-gitbook #top-nav .flex > div:last-child {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }

      /* Logo区域自适应 */
      #theme-gitbook #logo-wrapper {
        flex: 0 0 auto;
        min-width: 0;
        max-width: 200px;
      }

      /* 桌面端菜单自适应 */
      #theme-gitbook #top-nav .hidden.md\\:flex {
        flex: 0 0 auto;
        display: flex;
        gap: 8px;
        min-width: 0;
      }

      /* 搜索框自适应 */
      #theme-gitbook .search-input {
        flex: 0 0 auto;
        min-width: 200px;
        max-width: 300px;
        width: clamp(200px, 20vw, 300px);
      }

      /* 移动端优化 */
      @media (max-width: 768px) {
        #theme-gitbook #top-nav .flex {
          gap: 4px;
        }
        
        #theme-gitbook #top-nav .flex > div:first-child {
          gap: 8px;
        }
        
        #theme-gitbook #top-nav .flex > div:last-child {
          gap: 4px;
        }
        
        #theme-gitbook #logo-wrapper {
          max-width: 150px;
        }
      }

      @media (max-width: 480px) {
        #theme-gitbook #logo-wrapper {
          max-width: 120px;
        }
      }

      /* 站点标题自适应优化 - 缩小20% */
      #theme-gitbook #logo-wrapper a {
        font-size: clamp(0.9rem, 2vw, 1.4rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      #theme-gitbook #logo-wrapper img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }

      /* 移动端顶栏优化 */
      @media (max-width: 768px) {
        #theme-gitbook #top-nav {
          padding-left: 16px;
          padding-right: 16px;
        }
        
        #theme-gitbook #top-nav .flex {
          padding-left: 16px;
          padding-right: 16px;
        }

        #theme-gitbook #logo-wrapper a {
          max-width: 150px;
          font-size: clamp(0.8rem, 2.4vw, 1rem);
        }
      }

      @media (max-width: 480px) {
        #theme-gitbook #logo-wrapper a {
          max-width: 120px;
          font-size: clamp(0.7rem, 3.2vw, 0.9rem);
        }
      }

      /* 搜索输入一致性优化 */
      #theme-gitbook .search-input {
        min-width: 200px;
        max-width: 300px;
        width: clamp(200px, 25vw, 300px);
        transition: all 0.2s ease;
      }

      #theme-gitbook .search-input input {
        background-color: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.08);
        transition: all 0.2s ease;
      }

      #theme-gitbook .search-input input:focus {
        background-color: white;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
      }

      #theme-gitbook .search-input input::placeholder {
        color: rgba(0, 0, 0, 0.4);
        transition: color 0.2s ease;
      }

      #theme-gitbook .search-input input:focus::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      .dark #theme-gitbook .search-input input {
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .dark #theme-gitbook .search-input input:focus {
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
      }

      .dark #theme-gitbook .search-input input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      .dark #theme-gitbook .search-input input:focus::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      /* 快捷键提示优化 */
      #theme-gitbook .search-input .absolute.right-0 {
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.3);
        transition: color 0.2s ease;
      }

      .dark #theme-gitbook .search-input .absolute.right-0 {
        color: rgba(255, 255, 255, 0.3);
      }

      /* 左栏覆盖与滚动优化 */
      #theme-gitbook .hidden.md\\:block {
        width: 260px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: var(--shell-bg);
        border-right: 1px solid rgba(0, 0, 0, 0.05);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-gutter: stable;
      }

      .dark #theme-gitbook .hidden.md\\:block {
        background-color: var(--shell-bg-dark);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* 左栏内容区域 */
      #theme-gitbook .hidden.md\\:block > div {
        width: 260px;
        height: 100vh;
        padding-top: 56px;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      /* 左栏导航区域 - 优化边距 */
      #theme-gitbook .hidden.md\\:block .overflow-y-scroll {
        flex: 1;
        padding-top: 20px;
        padding-left: 16px;
        padding-right: 12px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      /* 左侧导航栏Footer优化 */
      #theme-gitbook .hidden.md\\:block footer {
        background-color: transparent;
        border: none;
        border-radius: 0;
        padding: 12px 16px;
        margin: 0;
        text-align: center;
        font-size: 0.7rem;
        line-height: 1.4;
        color: rgba(0, 0, 0, 0.6);
        border-top: 1px solid rgba(0, 0, 0, 0.05);
      }

      .dark #theme-gitbook .hidden.md\\:block footer {
        color: rgba(255, 255, 255, 0.6);
        border-top-color: rgba(255, 255, 255, 0.1);
      }

      #theme-gitbook .hidden.md\\:block footer a {
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .dark #theme-gitbook .hidden.md\\:block footer a {
        color: rgba(255, 255, 255, 0.7);
      }

      #theme-gitbook .hidden.md\\:block footer a:hover {
        color: rgba(0, 0, 0, 0.9);
      }

      .dark #theme-gitbook .hidden.md\\:block footer a:hover {
        color: rgba(255, 255, 255, 0.9);
      }

      /* 大屏幕左栏宽度调整 */
      @media (min-width: 1280px) {
        #theme-gitbook .hidden.md\\:block {
          width: 280px;
        }
        
        #theme-gitbook .hidden.md\\:block > div {
          width: 280px;
        }
      }

      /* 折叠箭头样式优化 */
      #theme-gitbook .fas.fa-chevron-left {
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0.6;
        font-size: 0.75rem;
        transform: rotate(0deg);
      }

      #theme-gitbook .fas.fa-chevron-left:hover {
        opacity: 1;
      }

      #theme-gitbook .fas.fa-chevron-left.-rotate-90 {
        transform: rotate(-90deg);
        opacity: 0.8;
      }

      /* 分组标题hover效果优化 */
      #theme-gitbook .cursor-pointer.relative.flex {
        transition: all 0.15s ease;
        border-radius: 6px;
        padding: 8px 12px;
        margin: 2px 0;
      }

      #theme-gitbook .cursor-pointer.relative.flex:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }

      .dark #theme-gitbook .cursor-pointer.relative.flex:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      /* 分组标题与项密度优化 - 调整边距 */
      #theme-gitbook .cursor-pointer.relative.flex {
        line-height: 32px;
        padding-left: 12px;
        padding-right: 12px;
        margin: 1px 0;
      }

      /* 子项左缩进一致 - 优化边距 */
      #theme-gitbook .ml-3.border-l {
        margin-left: 16px;
        border-left: 1px solid rgba(0, 0, 0, 0.12);
        padding-left: 12px;
      }

      .dark #theme-gitbook .ml-3.border-l {
        border-left: 1px solid rgba(255, 255, 255, 0.12);
      }

      /* 子项hover轻底色 - 优化边距 */
      #theme-gitbook .relative.py-1\\.5.cursor-pointer {
        transition: all 0.15s ease;
        border-radius: 6px;
        padding: 4px 8px;
        margin: 1px 0;
      }

      #theme-gitbook .relative.py-1\\.5.cursor-pointer:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }

      .dark #theme-gitbook .relative.py-1\\.5.cursor-pointer:hover {
        background-color: rgba(255, 255, 255, 0.04);
      }

      /* 选中态半粗+主色 */
      #theme-gitbook .relative.py-1\\.5.cursor-pointer.text-green-500 {
        font-weight: 600;
        color: #059669;
        background-color: rgba(5, 150, 105, 0.08);
      }

      .dark #theme-gitbook .relative.py-1\\.5.cursor-pointer.text-green-500 {
        color: #10b981;
        background-color: rgba(16, 185, 129, 0.1);
      }

      /* 最新红点位置固定 */
      #theme-gitbook .relative.py-1\\.5.cursor-pointer .absolute {
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
      }

      /* 确保白纸工作区在移动端的正确显示 */
      @media (max-width: 1024px) {
        #workspace-sheet {
          grid-template-columns: 1fr;
        }
      }

      /* 移动端响应式优化 */
      @media (max-width: 768px) {
        #workspace-sheet {
          margin-right: 1rem;
          height: calc(100vh - 1rem);
        }
        
        #center-wrapper {
          height: calc(100% - var(--header-h)) !important;
        }
      }
      
      /* 左侧边栏样式优化 */
      #theme-gitbook .hidden.md\\:block > div {
        background-color: var(--shell-bg);
        border-right: 1px solid rgba(0, 0, 0, 0.05);
      }
      
      .dark #theme-gitbook .hidden.md\\:block > div {
        background-color: var(--shell-bg-dark);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      /* 移动端深色模式优化 */
      @media (max-width: 768px) {
        .dark #theme-gitbook {
          background-color: var(--shell-bg-dark);
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
      
      /* 修复移动端正文溢出问题 */
      @media (max-width: 768px) {
        /* 确保主容器不会溢出 */
        #theme-gitbook {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        /* 修复主布局容器 */
        #theme-gitbook main {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        /* 修复内容包装器 */
        #theme-gitbook #wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        /* 修复中心内容区域 */
        #theme-gitbook #center-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        /* 修复容器内部 */
        #theme-gitbook #container-inner {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        
        /* 修复文章容器 */
        #theme-gitbook #container {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        /* 修复文章包装器 */
        #theme-gitbook #article-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        
        /* 确保所有内容元素不会溢出 */
        #theme-gitbook * {
          max-width: 100%;
          box-sizing: border-box;
        }
        
        /* 特别处理可能溢出的元素 */
        #theme-gitbook pre,
        #theme-gitbook code,
        #theme-gitbook table,
        #theme-gitbook img,
        #theme-gitbook video,
        #theme-gitbook iframe {
          max-width: 100%;
          overflow-x: auto;
        }
        
        /* 修复长文本换行 */
        #theme-gitbook p,
        #theme-gitbook div,
        #theme-gitbook span,
        #theme-gitbook h1,
        #theme-gitbook h2,
        #theme-gitbook h3,
        #theme-gitbook h4,
        #theme-gitbook h5,
        #theme-gitbook h6 {
          word-wrap: break-word;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        /* 修复代码块 */
        #theme-gitbook pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        /* 修复表格 */
        #theme-gitbook table {
          width: 100%;
          table-layout: fixed;
        }
        
        #theme-gitbook table td,
        #theme-gitbook table th {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      }
      
      /* 超小屏幕优化 */
      @media (max-width: 480px) {
        #theme-gitbook #container-inner {
          padding-left: 8px;
          padding-right: 8px;
        }
        
        #theme-gitbook #article-wrapper {
          padding: 0 4px;
        }
        
        #theme-gitbook h1 {
          font-size: 1.25rem;
          line-height: 1.2;
        }
        
        #theme-gitbook h2 {
          font-size: 1.125rem;
          line-height: 1.2;
        }
        
        #theme-gitbook h3 {
          font-size: 1rem;
          line-height: 1.2;
        }
        
        #theme-gitbook p {
          font-size: 0.875rem;
          line-height: 1.5;
        }
      }
    `}</style>
  )
}

export { Style }
