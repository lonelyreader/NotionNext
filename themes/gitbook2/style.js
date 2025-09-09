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
      
      /* 浅色模式 - 使用色盘配色 */
      body {
        background: #EFEFEF;
        color: #372E2C;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        line-height: 1.6;
      }
      
      /* 深色模式 */
      .dark body {
        background: #0d1117;
        color: #f0f6fc;
      }

      /* 主容器 */
      #theme-gitbook {
        background: #EFEFEF;
        color: #372E2C;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      }
      
      /* 深色模式主容器 */
      .dark #theme-gitbook {
        background: #0d1117;
        color: #f0f6fc;
      }

      /* 左侧导航栏 - 使用Cultured背景色 */
      .nav-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        width: 280px;
        min-height: 100vh;
        background: #EFEFEF;
        border-right: none;
        z-index: 50;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0;
        transition: transform 0.2s ease;
        will-change: transform;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        display: flex;
        flex-direction: column;
        box-shadow: none;
      }
      
      /* 左侧导航栏收起状态 */
      .nav-sidebar.collapsed {
        transform: translateX(-100%);
      }
      
      
      /* 深色模式左侧导航栏 */
      .dark .nav-sidebar {
        background: #24292e;
        border-right: none;
        box-shadow: none;
      }
      
      /* 侧边栏头部区域 */
      .nav-sidebar-header {
        padding: 16px;
        border-bottom: none;
        background: #EFEFEF;
        position: sticky;
        top: 0;
        z-index: 20;
        flex-shrink: 0;
      }
      
      .dark .nav-sidebar-header {
        background: #24292e;
        border-bottom: none;
      }
      
      /* Hide Sidebar 按钮 */
      .nav-sidebar-hide-btn {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 24px;
        height: 24px;
        background: transparent;
        border: 1px solid #d1d5da;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #586069;
        font-size: 12px;
        z-index: 30;
        transition: all 0.15s ease;
        padding: 0;
      }
      
      .nav-sidebar-hide-btn:hover {
        background: #f6f8fa;
        border-color: #8b949e;
        color: #24292e;
      }
      
      .nav-sidebar-hide-btn:active {
        background: #e1e4e8;
        transform: scale(0.95);
      }
      
      .dark .nav-sidebar-hide-btn {
        border-color: #444d56;
        color: #8b949e;
      }
      
      .dark .nav-sidebar-hide-btn:hover {
        background: #21262d;
        border-color: #6e7681;
        color: #f0f6fc;
      }
      
      .dark .nav-sidebar-hide-btn:active {
        background: #30363d;
      }
      
      /* 显示侧边栏按钮 - 默认隐藏 */
      .nav-sidebar-show-btn {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 32px;
        height: 32px;
        background: #ffffff;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        color: #586069;
        z-index: 100;
        transition: all 0.15s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .nav-sidebar-show-btn:hover {
        background: #f6f8fa;
        border-color: #8b949e;
        color: #24292e;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .nav-sidebar-show-btn:active {
        background: #e1e4e8;
        transform: scale(0.95);
      }
      
      /* 显示按钮的显示状态由JavaScript控制 */
      
      .dark .nav-sidebar-show-btn {
        background: #24292e;
        border-color: #444d56;
        color: #8b949e;
      }
      
      .dark .nav-sidebar-show-btn:hover {
        background: #21262d;
        border-color: #6e7681;
        color: #f0f6fc;
      }
      
      .dark .nav-sidebar-show-btn:active {
        background: #30363d;
      }
      
      /* 品牌标识区域 */
      .nav-brand {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 16px;
        color: #372E2C;
      }
      
      .dark .nav-brand {
        color: #f0f6fc;
      }
      
      .nav-brand-icon {
        width: 24px;
        height: 24px;
        background: #53284F;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
      
      /* 搜索框样式 */
      .nav-search {
        position: relative;
      }
      
      .nav-search-input {
        width: 100%;
        padding: 8px 12px 8px 36px;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        background: #ffffff;
        font-size: 13px;
        color: #372E2C;
        transition: all 0.15s ease;
        box-shadow: none;
      }
      
      .nav-search-input:focus {
        outline: none;
        border-color: #53284F;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(83, 40, 79, 0.1);
      }
      
      .dark .nav-search-input {
        background: #21262d;
        border-color: #444d56;
        color: #f0f6fc;
      }
      
      .dark .nav-search-input:focus {
        background: #0d1117;
        border-color: #1f6feb;
        box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.1);
      }
      
      .nav-search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        color: #6a737d;
      }
      
      .nav-search-shortcut {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 11px;
        color: #6a737d;
        background: #f1f3f4;
        padding: 1px 4px;
        border-radius: 3px;
        border: 1px solid #d1d5da;
      }
      
      .dark .nav-search-shortcut {
        background: #21262d;
        border-color: #444d56;
        color: #8b949e;
      }
      
      /* 侧边栏内容区域 */
      .nav-sidebar-content {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
        margin: 0;
      }
      
      /* 侧边栏底部区域 */
      .nav-sidebar-footer {
        padding: 16px;
        border-top: none;
        background: #EFEFEF;
        position: sticky;
        bottom: 0;
        z-index: 20;
        flex-shrink: 0;
      }
      
      .dark .nav-sidebar-footer {
        background: #24292e;
        border-top: none;
      }
      
      /* 底部操作按钮 - iOS 18风格 */
      .nav-footer-item {
        display: flex;
        align-items: center;
        padding: 6px 12px;
        margin: 2px 12px;
        border: none;
        background: transparent;
        color: #372E2C;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 8px;
        width: calc(100% - 24px);
        text-align: left;
        min-height: 28px;
        position: relative;
        overflow: hidden;
      }
      
      .nav-footer-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(83, 40, 79, 0.08);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 8px;
      }
      
      .nav-footer-item:hover::before {
        opacity: 1;
      }
      
      .nav-footer-item:hover {
        color: #EFEFEF;
        transform: translateY(-1px);
      }
      
      .dark .nav-footer-item {
        color: #c6cbd1;
      }
      
      .dark .nav-footer-item::before {
        background: rgba(139, 92, 246, 0.1);
      }
      
      .dark .nav-footer-item:hover {
        color: #f0f6fc;
      }
      
      /* 作者卡片已删除 */
      
      .nav-footer-item .nav-icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        flex-shrink: 0;
      }
      
      /* 移动端隐藏左侧导航栏 */
      @media (max-width: 768px) {
        .nav-sidebar {
          display: none;
        }
      }

      /* 右侧信息栏 - 使用Cultured背景色 */
      .info-sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 280px;
        min-height: 100vh;
        background: #EFEFEF;
        border-left: none;
        z-index: 10;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 60px;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        box-shadow: none;
      }
      
      /* 右侧信息栏收起状态 */
      .info-sidebar.collapsed {
        transform: translateX(100%);
      }
      
      /* 深色模式右侧信息栏 */
      .dark .info-sidebar {
        background: #0d1117;
        border-left: none;
        box-shadow: none;
      }
      
      /* 中等屏幕隐藏右侧信息栏 */
      @media (max-width: 1280px) {
        .info-sidebar {
          display: none;
        }
      }

      /* 正文背景容器 - 白色小圆角 */
      #center-wrapper {
        background: #ffffff;
        border: none;
        border-radius: 12px;
        margin: 20px 20px 20px 300px;
        padding: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        min-height: calc(100vh - 40px);
        position: relative;
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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      
      /* 正文文字容器 */
      .main-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 60px 40px 40px 40px;
        color: #372E2C;
        line-height: 1.7;
        font-size: 16px;
      }
      
      /* 深色模式正文文字容器 */
      .dark .main-content {
        color: #f0f6fc;
      }
      
      /* 响应式正文布局 */
      @media (max-width: 1280px) {
        #center-wrapper {
          margin: 20px 20px 20px 300px;
        }
      }
      
      @media (max-width: 768px) {
        #center-wrapper {
          margin: 10px;
          border-radius: 8px;
        }
        
        .main-content {
          padding: 40px 20px 20px 20px;
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

      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        color: #372E2C;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.25;
        margin-top: 24px;
        margin-bottom: 16px;
      }
      
      h1 {
        font-size: 32px;
        font-weight: 700;
        border-bottom: 1px solid #e1e4e8;
        padding-bottom: 10px;
      }
      
      h2 {
        font-size: 24px;
        font-weight: 600;
      }
      
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
      
      /* 深色模式标题样式 */
      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #f0f6fc;
      }
      
      .dark h1 {
        border-bottom-color: #444d56;
      }

      /* 链接样式 - iOS 18风格 */
      a {
        color: #372E2C;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-weight: 500;
        position: relative;
        padding: 2px 4px;
        border-radius: 4px;
      }
      
      a::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(83, 40, 79, 0.08);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 4px;
        z-index: -1;
      }
      
      a:hover::before {
        opacity: 1;
      }
      
      a:hover {
        color: #EFEFEF;
        text-decoration: none;
        transform: translateY(-1px);
      }
      
      /* 链接样式 - 深色模式 */
      .dark a {
        color: #f0f6fc;
      }
      
      .dark a::before {
        background: rgba(139, 92, 246, 0.1);
      }
      
      .dark a:hover {
        color: #f0f6fc;
      }

      /* 按钮样式 - GitBook风格 */
      button, .btn {
        background: #f6f8fa;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        color: #24292e;
        padding: 8px 16px;
        transition: all 0.15s ease;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      button:hover, .btn:hover {
        background: #e1e4e8;
        border-color: #c6cbd1;
      }
      
      button:active, .btn:active {
        background: #d1d5da;
        border-color: #b1bac4;
      }
      
      /* 按钮样式 - 深色模式 */
      .dark button, .dark .btn {
        background: #21262d;
        border: 1px solid #30363d;
        color: #f0f6fc;
      }
      
      .dark button:hover, .dark .btn:hover {
        background: #30363d;
        border-color: #444d56;
      }
      
      .dark button:active, .dark .btn:active {
        background: #444d56;
        border-color: #6e7681;
      }

      /* 卡片样式 - 取消边框 */
      .card, .info-card {
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 8px 0;
        margin: 4px 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: none;
        color: #372E2C;
        font-size: 13px;
        position: relative;
        overflow: hidden;
      }
      
      .card::before, .info-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(83, 40, 79, 0.08);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 8px;
        z-index: -1;
      }
      
      .card:hover::before, .info-card:hover::before {
        opacity: 1;
      }
      
      .card:hover, .info-card:hover {
        color: #EFEFEF;
        transform: translateY(-1px);
      }
      
      /* 卡片样式 - 深色模式 */
      .dark .card, .dark .info-card {
        background: transparent;
        border: none;
        box-shadow: none;
        color: #f0f6fc;
      }
      
      .dark .card::before, .dark .info-card::before {
        background: rgba(139, 92, 246, 0.1);
      }
      
      .dark .card:hover, .dark .info-card:hover {
        color: #f0f6fc;
      }

      /* 输入框样式 - GitBook风格 */
      input, textarea, select {
        background: #ffffff;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        color: #24292e;
        padding: 8px 12px;
        transition: all 0.15s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #0969da;
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
        background: #ffffff;
      }
      
      /* 输入框样式 - 深色模式 */
      .dark input, .dark textarea, .dark select {
        background: #21262d;
        border: 1px solid #444d56;
        color: #f0f6fc;
      }
      
      .dark input:focus, .dark textarea:focus, .dark select:focus {
        border-color: #1f6feb;
        box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.1);
        background: #0d1117;
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
      
      /* 导航项样式 - iOS 18风格 */
      .gitbook-nav-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 6px 12px;
        margin: 0;
        border: none;
        background: transparent;
        color: #372E2C;
        font-size: 13px;
        line-height: 1.4;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 8px;
        font-weight: 400;
        min-height: 28px;
        width: calc(100% - 24px);
        margin: 2px 12px;
        text-align: left;
        overflow: hidden;
      }
      
      .dark .gitbook-nav-item {
        color: #c6cbd1;
      }
      
      .gitbook-nav-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(83, 40, 79, 0.08);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 8px;
      }
      
      .gitbook-nav-item:hover::before {
        opacity: 1;
      }
      
      .gitbook-nav-item:hover {
        color: #EFEFEF;
        transform: translateY(-1px);
      }
      
      .dark .gitbook-nav-item::before {
        background: rgba(139, 92, 246, 0.1);
      }
      
      .dark .gitbook-nav-item:hover {
        color: #f0f6fc;
      }
      
      .gitbook-nav-item.active {
        background: rgba(83, 40, 79, 0.12);
        color: #53284F;
        font-weight: 500;
        border-right: none;
      }
      
      .dark .gitbook-nav-item.active {
        background: rgba(139, 92, 246, 0.15);
        color: #8b5cf6;
        border-right: none;
      }
      
      /* 导航项图标 */
      .gitbook-nav-item .nav-icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        flex-shrink: 0;
        color: inherit;
      }
      
      /* 展开/收起按钮 */
      .gitbook-nav-item .nav-expand {
        margin-left: auto;
        width: 16px;
        height: 16px;
        color: #586069;
        transition: transform 0.15s ease;
        flex-shrink: 0;
        cursor: pointer;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
      
      .gitbook-nav-item .nav-expand:hover {
        background: #f6f8fa;
        color: #24292e;
      }
      
      .gitbook-nav-item.expanded .nav-expand {
        transform: rotate(90deg);
        background: transparent;
      }
      
      .dark .gitbook-nav-item .nav-expand {
        color: #8b949e;
      }
      
      .dark .gitbook-nav-item .nav-expand:hover {
        background: #21262d;
        color: #f0f6fc;
      }
      
      /* 分组标题样式 */
      .gitbook-nav-item.group-title {
        font-weight: 600;
        color: #24292e;
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 8px 12px 4px 12px;
        background: #f6f8fa;
        border-radius: 0;
      }
      
      .dark .gitbook-nav-item.group-title {
        color: #f0f6fc;
        background: #21262d;
      }
      
      /* 子项样式 */
      .gitbook-nav-item.sub-item {
        margin-left: 0;
        font-size: 13px;
        color: #586069;
        padding: 4px 12px;
        min-height: 24px;
      }
      
      .dark .gitbook-nav-item.sub-item {
        color: #9ca3af;
      }
      
      /* 徽章样式 */
      .gitbook-nav-item .nav-badge {
        margin-left: auto;
        background: #ef4444;
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 10px;
        font-weight: 500;
        min-width: 16px;
        text-align: center;
        line-height: 1.2;
      }
      
      /* GitBook专业缩进系统 */
      .gitbook-indent {
        position: relative;
        margin-left: 16px;
        padding-left: 8px;
      }
      
      .gitbook-indent::before {
        content: '';
        position: absolute;
        left: -8px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #e1e4e8;
      }
      
      .dark .gitbook-indent::before {
        background: #444d56;
      }
      
      /* 多级缩进 */
      .gitbook-indent .gitbook-indent {
        margin-left: 16px;
      }
      
      .gitbook-indent .gitbook-indent::before {
        left: -8px;
      }
      
      /* 折叠/展开动画 */
      .nav-collapsible {
        overflow: hidden;
        transition: height 0.2s ease;
      }
      
      .nav-collapsible.collapsed {
        height: 0;
      }
      
      .gitbook-indent::after {
        content: '';
        position: absolute;
        left: -8px;
        top: 14px;
        width: 8px;
        height: 1px;
        background: #e1e4e8;
      }
      
      .dark .gitbook-indent::after {
        background: #444d56;
      }
      
      /* 多级缩进 */
      .gitbook-indent-2 {
        margin-left: 24px;
        padding-left: 8px;
      }
      
      .gitbook-indent-2::before {
        left: -8px;
      }
      
      .gitbook-indent-2::after {
        left: -8px;
      }
      
      .gitbook-indent-3 {
        margin-left: 32px;
        padding-left: 8px;
      }
      
      .gitbook-indent-3::before {
        left: -8px;
      }
      
      .gitbook-indent-3::after {
        left: -8px;
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
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
      }
      
      /* GitBook官方风格卡片 */
      .gitbook-card {
        background: #ffffff;
        border: 1px solid #e1e4e8;
        border-radius: 8px;
        padding: 16px;
        margin: 8px 0;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      }
      
      .dark .gitbook-card {
        background: #161b22;
        border: 1px solid #30363d;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }
      
      .gitbook-card:hover {
        border-color: #d0d7de;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
      
      .dark .gitbook-card:hover {
        border-color: #444d56;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      /* GitBook风格滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #d1d5da;
        border-radius: 4px;
        transition: all 0.15s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #8b949e;
      }
      
      /* 深色模式滚动条 */
      .dark ::-webkit-scrollbar-thumb {
        background: #444d56;
      }
      
      .dark ::-webkit-scrollbar-thumb:hover {
        background: #6e7681;
      }
      
      /* 隐藏滚动条但保持功能 */
      .nav-sidebar, .info-sidebar {
        scrollbar-width: thin;
        scrollbar-color: #d1d5da transparent;
      }
      
      .dark .nav-sidebar, .dark .info-sidebar {
        scrollbar-color: #444d56 transparent;
      }

      /* 文字颜色优化 */
      p, div, span, li {
        color: #372E2C;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        font-size: 16px;
      }
      
      /* 文字颜色优化 - 深色模式 */
      .dark p, .dark div, .dark span, .dark li {
        color: #f0f6fc;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        font-size: 16px;
      }

      /* 代码块样式 - GitBook风格 */
      pre, code {
        background: #f6f8fa;
        border: 1px solid #e1e4e8;
        color: #24292e;
        border-radius: 6px;
        padding: 12px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.45;
      }
      
      /* 代码块样式 - 深色模式 */
      .dark pre, .dark code {
        background: #161b22;
        border: 1px solid #30363d;
        color: #f0f6fc;
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

      /* 顶部导航栏 */
      .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        z-index: 100;
        background: #EFEFEF;
        border-bottom: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        box-shadow: none;
        transition: all 0.2s ease;
      }
      
      /* 深色模式顶部导航栏 */
      .dark .top-nav {
        background: #0d1117;
        border-bottom: none;
        box-shadow: none;
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
