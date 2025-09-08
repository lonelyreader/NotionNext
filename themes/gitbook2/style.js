/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* iOS 18风格主题样式 */
      
      /* 现代响应式设计基础 */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* 浅色模式 - EFEFEF为主 */
      body {
        background: #EFEFEF;
        color: #372E2C;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      
      /* 深色模式 - 紫色为主 */
      .dark body {
        background: linear-gradient(135deg, #53284F 0%, #372E2C 50%, #7F2629 100%);
        background-attachment: fixed;
        color: #EFEFEF;
      }

      /* 主容器 - GitBook风格 */
      #theme-gitbook {
        background: #ffffff;
        color: #24292e;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 深色模式主容器 */
      .dark #theme-gitbook {
        background: #0d1117;
        color: #f0f6fc;
      }

      /* 左侧导航栏 - GitBook风格 */
      .nav-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        width: 280px;
        min-height: 100vh;
        background: #f8f9fa;
        border-right: 1px solid #e1e4e8;
        z-index: 10;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 60px;
        transition: transform 0.2s ease;
        will-change: transform;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 左侧导航栏收起状态 */
      .nav-sidebar.collapsed {
        transform: translateX(-100%);
      }
      
      /* 深色模式左侧导航栏 */
      .dark .nav-sidebar {
        background: #24292e;
        border-right: 1px solid #444d56;
      }
      
      /* 移动端隐藏左侧导航栏 */
      @media (max-width: 768px) {
        .nav-sidebar {
          display: none;
        }
      }

      /* 右侧信息栏 - GitBook风格 */
      .info-sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 280px;
        min-height: 100vh;
        background: #f8f9fa;
        border-left: 1px solid #e1e4e8;
        z-index: 10;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 60px;
        transition: transform 0.2s ease;
        will-change: transform;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 右侧信息栏收起状态 */
      .info-sidebar.collapsed {
        transform: translateX(100%);
      }
      
      /* 深色模式右侧信息栏 */
      .dark .info-sidebar {
        background: #24292e;
        border-left: 1px solid #444d56;
      }
      
      /* 中等屏幕隐藏右侧信息栏 */
      @media (max-width: 1280px) {
        .info-sidebar {
          display: none;
        }
      }

      /* 正文背景容器 - GitBook风格 */
      #center-wrapper {
        background: #ffffff;
        border: none;
        border-radius: 0;
        margin: 0;
        padding: 0;
        box-shadow: none;
        min-height: 100vh;
        position: relative;
        margin-left: 280px;
        margin-right: 280px;
        z-index: 1;
        transition: margin 0.2s ease;
      }
      
      /* 侧边栏收起时的正文边距调整 */
      .nav-sidebar.collapsed {
        transform: translateX(-100%);
      }
      
      .info-sidebar.collapsed {
        transform: translateX(100%);
      }
      
      /* 当侧边栏收起时，调整正文边距 */
      body.nav-collapsed #center-wrapper {
        margin-left: 0;
      }
      
      body.info-collapsed #center-wrapper {
        margin-right: 0;
      }
      
      body.nav-collapsed.info-collapsed #center-wrapper {
        margin-left: 0;
        margin-right: 0;
      }
      
      /* 深色模式正文背景容器 */
      .dark #center-wrapper {
        background: #0d1117;
      }
      
      /* 正文文字容器 - 保持美观距离 */
      .main-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 100px 40px 40px 40px;
        color: #372E2C;
        line-height: 1.7;
      }
      
      /* 深色模式正文文字容器 */
      .dark .main-content {
        color: #EFEFEF;
      }
      
      /* 响应式正文布局 */
      @media (max-width: 1280px) {
        #center-wrapper {
          margin-left: 280px;
          margin-right: 0;
        }
      }
      
      @media (max-width: 768px) {
        #center-wrapper {
          margin-left: 0;
          margin-right: 0;
        }
        
        .main-content {
          padding: 80px 20px 20px 20px;
        }
      }
      
      /* 调试样式 - 确保布局可见 */
      #theme-gitbook {
        position: relative;
      }
      
      #wrapper {
        position: relative;
        z-index: 2;
      }

      /* 标题样式 - 浅色模式 */
      h1, h2, h3, h4, h5, h6 {
        color: #372E2C;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 标题样式 - 深色模式 */
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #EFEFEF;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* 链接样式 - 浅色模式 */
      a {
        color: #53284F;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        font-weight: 500;
      }
      
      a:hover {
        color: #7F2629;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
      }
      
      /* 链接样式 - 深色模式 */
      .dark a {
        color: #EFEFEF;
      }
      
      .dark a:hover {
        color: #CC9F53;
      }

      /* 按钮样式 - Apple风格磨砂玻璃 */
      button, .btn {
        background: rgba(83, 40, 79, 0.8);
        backdrop-filter: blur(30px) saturate(180%);
        -webkit-backdrop-filter: blur(30px) saturate(180%);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 12px;
        color: #EFEFEF;
        padding: 12px 24px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px rgba(83, 40, 79, 0.15);
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }
      
      button::before, .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
      }
      
      button:hover, .btn:hover {
        background: rgba(83, 40, 79, 0.9);
        border-color: rgba(83, 40, 79, 0.3);
        box-shadow: 0 8px 30px rgba(83, 40, 79, 0.25);
        transform: translateY(-2px) scale(1.02);
      }
      
      button:hover::before, .btn:hover::before {
        left: 100%;
      }
      
      button:active, .btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* 按钮样式 - 深色模式 */
      .dark button, .dark .btn {
        background: rgba(239, 239, 239, 0.8);
        border: 1px solid rgba(239, 239, 239, 0.2);
        color: #53284F;
        box-shadow: 0 4px 20px rgba(239, 239, 239, 0.15);
      }
      
      .dark button:hover, .dark .btn:hover {
        background: rgba(239, 239, 239, 0.9);
        border-color: rgba(239, 239, 239, 0.3);
        color: #372E2C;
        box-shadow: 0 8px 30px rgba(239, 239, 239, 0.25);
      }

      /* 卡片样式 - 简化设计 */
      .card, .info-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(83, 40, 79, 0.08);
        border-radius: 8px;
        padding: 16px;
        margin: 12px 0;
        transition: all 0.2s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        color: #372E2C;
        position: relative;
        overflow: hidden;
      }
      
      .card::before, .info-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(83, 40, 79, 0.1), transparent);
      }
      
      .card:hover, .info-card:hover {
        background: rgba(255, 255, 255, 0.95);
        border-color: rgba(83, 40, 79, 0.15);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
      }
      
      /* 卡片样式 - 深色模式 */
      .dark .card, .dark .info-card {
        background: rgba(83, 40, 79, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(204, 159, 83, 0.1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        color: #EFEFEF;
      }
      
      .dark .card::before, .dark .info-card::before {
        background: linear-gradient(90deg, transparent, rgba(204, 159, 83, 0.1), transparent);
      }
      
      .dark .card:hover, .dark .info-card:hover {
        background: rgba(83, 40, 79, 0.2);
        border-color: rgba(204, 159, 83, 0.15);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        transform: translateY(-4px) scale(1.01);
      }

      /* 输入框样式 - 浅色模式 */
      input, textarea, select {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 8px;
        color: #372E2C;
        padding: 12px 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 16px;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: rgba(83, 40, 79, 0.5);
        box-shadow: 0 0 0 3px rgba(83, 40, 79, 0.1);
        background: rgba(239, 239, 239, 1);
      }
      
      /* 输入框样式 - 深色模式 */
      .dark input, .dark textarea, .dark select {
        background: rgba(83, 40, 79, 0.2);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }
      
      .dark input:focus, .dark textarea:focus, .dark select:focus {
        border-color: rgba(204, 159, 83, 0.5);
        box-shadow: 0 0 0 3px rgba(204, 159, 83, 0.1);
        background: rgba(83, 40, 79, 0.3);
      }

      /* 底部按钮组样式 - 浅色模式 */
      .bottom-button-group {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(83, 40, 79, 0.1);
        box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.05);
      }
      
      /* 底部按钮组样式 - 深色模式 */
      .dark .bottom-button-group {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
      }

      /* GitBook风格设计系统 */
      
      /* 左侧边栏 - GitBook风格 */
      .nav-sidebar {
        background: #f8f9fa;
        border-right: 1px solid #e1e4e8;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dark .nav-sidebar {
        background: #24292e;
        border-right: 1px solid #444d56;
      }
      
      /* GitBook风格导航项 */
      .gitbook-nav-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 8px 16px;
        margin: 0;
        border: none;
        background: transparent;
        color: #586069;
        font-size: 14px;
        line-height: 1.5;
        cursor: pointer;
        transition: all 0.15s ease;
        border-radius: 0;
      }
      
      .dark .gitbook-nav-item {
        color: #c6cbd1;
      }
      
      .gitbook-nav-item:hover {
        background: #f1f3f4;
        color: #24292e;
      }
      
      .dark .gitbook-nav-item:hover {
        background: #2f363d;
        color: #f0f6fc;
      }
      
      .gitbook-nav-item.active {
        background: #e3f2fd;
        color: #1976d2;
        font-weight: 500;
      }
      
      .dark .gitbook-nav-item.active {
        background: #1c2128;
        color: #58a6ff;
      }
      
      /* GitBook风格缩进系统 */
      .gitbook-indent {
        position: relative;
        margin-left: 16px;
      }
      
      .gitbook-indent::before {
        content: '';
        position: absolute;
        left: -16px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #d1d5da;
        transition: background 0.15s ease;
      }
      
      .dark .gitbook-indent::before {
        background: #444d56;
      }
      
      .gitbook-indent::after {
        content: '';
        position: absolute;
        left: -16px;
        top: 12px;
        width: 8px;
        height: 1px;
        background: #d1d5da;
      }
      
      .dark .gitbook-indent::after {
        background: #444d56;
      }
      
      /* 多级缩进 */
      .gitbook-indent-2 {
        margin-left: 32px;
      }
      
      .gitbook-indent-2::before {
        left: -32px;
      }
      
      .gitbook-indent-2::after {
        left: -32px;
      }
      
      .gitbook-indent-3 {
        margin-left: 48px;
      }
      
      .gitbook-indent-3::before {
        left: -48px;
      }
      
      .gitbook-indent-3::after {
        left: -48px;
      }
      
      /* GitBook风格容器 */
      .gitbook-container {
        background: #ffffff;
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin: 16px 0;
        overflow: hidden;
      }
      
      .dark .gitbook-container {
        background: #0d1117;
        border: 1px solid #30363d;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      
      /* GitBook风格卡片 */
      .gitbook-card {
        background: #ffffff;
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        padding: 16px;
        margin: 8px 0;
        transition: all 0.15s ease;
      }
      
      .dark .gitbook-card {
        background: #0d1117;
        border: 1px solid #30363d;
      }
      
      .gitbook-card:hover {
        border-color: #d1d5da;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .dark .gitbook-card:hover {
        border-color: #444d56;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      
      /* GitBook风格按钮 */
      .gitbook-button {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        background: #f6f8fa;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        color: #24292e;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .dark .gitbook-button {
        background: #21262d;
        border: 1px solid #30363d;
        color: #f0f6fc;
      }
      
      .gitbook-button:hover {
        background: #e1e4e8;
        border-color: #c6cbd1;
      }
      
      .dark .gitbook-button:hover {
        background: #30363d;
        border-color: #444d56;
      }
      
      .gitbook-button.primary {
        background: #0969da;
        border-color: #0969da;
        color: #ffffff;
      }
      
      .gitbook-button.primary:hover {
        background: #0860ca;
        border-color: #0860ca;
      }

      /* Apple风格滚动条样式 */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(83, 40, 79, 0.3);
        border-radius: 3px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(83, 40, 79, 0.5);
      }
      
      /* 深色模式滚动条 */
      .dark ::-webkit-scrollbar-thumb {
        background: rgba(204, 159, 83, 0.3);
      }
      
      .dark ::-webkit-scrollbar-thumb:hover {
        background: rgba(204, 159, 83, 0.5);
      }
      
      /* 隐藏滚动条但保持功能 */
      .nav-sidebar, .info-sidebar {
        scrollbar-width: thin;
        scrollbar-color: rgba(83, 40, 79, 0.3) transparent;
      }
      
      .dark .nav-sidebar, .dark .info-sidebar {
        scrollbar-color: rgba(204, 159, 83, 0.3) transparent;
      }

      /* 文字颜色优化 - 浅色模式 */
      p, div, span, li {
        color: #372E2C;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }
      
      /* 文字颜色优化 - 深色模式 */
      .dark p, .dark div, .dark span, .dark li {
        color: #EFEFEF;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }

      /* 代码块样式 - 浅色模式 */
      pre, code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        color: #EFEFEF;
        border-radius: 8px;
        padding: 12px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      }
      
      /* 代码块样式 - 深色模式 */
      .dark pre, .dark code {
        background: rgba(55, 46, 44, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(204, 159, 83, 0.2);
        color: #EFEFEF;
      }

      /* 下拉菜单和导航优化 - 浅色模式 */
      .dropdown-menu, .menu-dropdown {
        background: rgba(239, 239, 239, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.2);
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        padding: 8px 0;
        margin-top: 8px;
      }
      
      .dropdown-menu a, .menu-dropdown a {
        color: #372E2C;
        padding: 10px 16px;
        display: block;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .dropdown-menu a:hover, .menu-dropdown a:hover {
        background: rgba(83, 40, 79, 0.1);
        color: #53284F;
      }
      
      /* 下拉菜单和导航优化 - 深色模式 */
      .dark .dropdown-menu, .dark .menu-dropdown {
        background: rgba(83, 40, 79, 0.2);
        border: 1px solid rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }
      
      .dark .dropdown-menu a, .dark .menu-dropdown a {
        color: #EFEFEF;
      }
      
      .dark .dropdown-menu a:hover, .dark .menu-dropdown a:hover {
        background: rgba(239, 239, 239, 0.1);
        color: #CC9F53;
      }

      /* 正文预览优化 - 浅色模式 */
      .post-preview, .article-preview {
        background: rgba(239, 239, 239, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.1);
        border-radius: 12px;
        padding: 20px;
        margin: 16px 0;
        color: #372E2C;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .post-preview:hover, .article-preview:hover {
        border-color: rgba(83, 40, 79, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
      
      /* 正文预览优化 - 深色模式 */
      .dark .post-preview, .dark .article-preview {
        background: rgba(83, 40, 79, 0.2);
        border: 1px solid rgba(204, 159, 83, 0.1);
        color: #EFEFEF;
      }
      
      .dark .post-preview:hover, .dark .article-preview:hover {
        border-color: rgba(204, 159, 83, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      /* 顶部导航栏 - GitBook风格 */
      .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        z-index: 100;
        background: #ffffff;
        border-bottom: 1px solid #e1e4e8;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* 深色模式顶部导航栏 */
      .dark .top-nav {
        background: #0d1117;
        border-bottom: 1px solid #30363d;
      }
      
      /* 底部导航栏 - Apple风格磨砂玻璃 */
      .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 100;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-top: 1px solid rgba(83, 40, 79, 0.06);
        box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.02);
      }
      
      /* 深色模式底部导航栏 */
      .dark .bottom-nav {
        background: rgba(83, 40, 79, 0.3);
        backdrop-filter: blur(60px) saturate(200%);
        -webkit-backdrop-filter: blur(60px) saturate(200%);
        border-top: 1px solid rgba(204, 159, 83, 0.08);
        box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.05);
      }
      
      /* 移动端显示底部导航栏 */
      @media (min-width: 769px) {
        .bottom-nav {
          display: none;
        }
      }
      
      /* 侧边栏切换按钮 - 参考Cursor设计 */
      .sidebar-toggle {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 48px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(83, 40, 79, 0.1);
        border-radius: 0 12px 12px 0;
        cursor: pointer;
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
      }
      
      .sidebar-toggle:hover {
        background: rgba(255, 255, 255, 1);
        border-color: rgba(83, 40, 79, 0.2);
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) translateX(2px);
      }
      
      .sidebar-toggle.left {
        left: 320px;
        border-radius: 0 12px 12px 0;
      }
      
      .sidebar-toggle.right {
        right: 320px;
        border-radius: 12px 0 0 12px;
      }
      
      /* 侧边栏收起时的按钮位置 */
      body.nav-collapsed .sidebar-toggle.left {
        left: 0;
      }
      
      body.info-collapsed .sidebar-toggle.right {
        right: 0;
      }
      
      /* 深色模式切换按钮 */
      .dark .sidebar-toggle {
        background: rgba(83, 40, 79, 0.8);
        border-color: rgba(204, 159, 83, 0.1);
        color: #EFEFEF;
      }
      
      .dark .sidebar-toggle:hover {
        background: rgba(83, 40, 79, 0.9);
        border-color: rgba(204, 159, 83, 0.2);
      }
      
      /* 按钮图标 */
      .sidebar-toggle i {
        font-size: 12px;
        color: rgba(83, 40, 79, 0.7);
        transition: all 0.3s ease;
      }
      
      .dark .sidebar-toggle i {
        color: rgba(204, 159, 83, 0.7);
      }
      
      .sidebar-toggle:hover i {
        color: rgba(83, 40, 79, 1);
      }
      
      .dark .sidebar-toggle:hover i {
        color: rgba(204, 159, 83, 1);
      }
      
      /* 移动端隐藏切换按钮 */
      @media (max-width: 768px) {
        .sidebar-toggle {
          display: none;
        }
      }
    `}</style>
  )
}

export { Style }
