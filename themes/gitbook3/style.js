import { siteConfig } from '@/lib/config'
import CONFIG from './config'

const Style = () => {
  return (
    <style jsx global>{`
      /* GitBook3 — 现代化阅读卡片布局 + Liquid Glass 审美 */
      
      /* =========================
         CSS 变量定义
         ========================= */
      :root {
        /* 布局尺寸 */
        --gitbook3-sidebar-width: 280px;
        --gitbook3-topbar-height: 64px;
        --gitbook3-container-radius: 12px;
        --gitbook3-card-radius: 16px;
        
        /* 阴影系统 */
        --gitbook3-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        --gitbook3-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.1);
        --gitbook3-shadow-card: 0 8px 32px rgba(0, 0, 0, 0.08);
        
        /* 边框与分隔 */
        --gitbook3-border: rgba(0, 0, 0, 0.06);
        --gitbook3-border-light: rgba(0, 0, 0, 0.04);
        
        /* 文本颜色 */
        --gitbook3-text-primary: #1F2328;
        --gitbook3-text-secondary: #656D76;
        --gitbook3-text-tertiary: #8B949E;
        
        /* 背景颜色 */
        --gitbook3-bg-primary: #FFFFFF;
        --gitbook3-bg-secondary: #F6F8FA;
        --gitbook3-bg-tertiary: #F1F3F4;
        --gitbook3-bg-card: rgba(255, 255, 255, 0.95);
        
        /* 强调色 */
        --gitbook3-accent: #0969DA;
        --gitbook3-accent-hover: #0860CA;
        --gitbook3-accent-active: #0550A3;
        
        /* 过渡动画 */
        --gitbook3-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        --gitbook3-transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        
        /* Liquid Glass 链接系统 */
        --gitbook3-link-color: #007aff;
        --gitbook3-link-color-hover: #0056cc;
        --gitbook3-link-color-active: #004499;
        
        /* 玻璃材质参数 */
        --gitbook3-glass-blur: 8px;
        --gitbook3-glass-saturation: 1.4;
        --gitbook3-glass-brightness: 1.1;
        
        /* 微胶囊玻璃背景 - Clear外观 */
        --gitbook3-glass-clear-bg: rgba(255, 255, 255, 0.8);
        --gitbook3-glass-clear-border: rgba(0, 0, 0, 0.06);
        --gitbook3-glass-clear-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        --gitbook3-glass-clear-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.08);
        --gitbook3-glass-clear-shadow-active: 0 4px 12px rgba(0, 0, 0, 0.04);
        
        /* 微胶囊圆角 */
        --gitbook3-glass-radius: 9px;
        
        /* 链接过渡动画 */
        --gitbook3-link-transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .dark:root {
        /* 深色模式布局尺寸 */
        --gitbook3-border: rgba(255, 255, 255, 0.08);
        --gitbook3-border-light: rgba(255, 255, 255, 0.06);
        
        /* 深色模式文本颜色 */
        --gitbook3-text-primary: #E6EDF3;
        --gitbook3-text-secondary: #8B949E;
        --gitbook3-text-tertiary: #6E7681;
        
        /* 深色模式背景颜色 */
        --gitbook3-bg-primary: #0D1117;
        --gitbook3-bg-secondary: #161B22;
        --gitbook3-bg-tertiary: #21262D;
        --gitbook3-bg-card: rgba(13, 17, 23, 0.95);
        
        /* 深色模式强调色 */
        --gitbook3-accent: #58A6FF;
        --gitbook3-accent-hover: #1F6FEB;
        --gitbook3-accent-active: #0969DA;
        
        /* 深色模式 Liquid Glass 链接系统 */
        --gitbook3-link-color: #58a6ff;
        --gitbook3-link-color-hover: #79c0ff;
        --gitbook3-link-color-active: #388bfd;
        
        /* 深色模式微胶囊玻璃背景 - Tint外观 */
        --gitbook3-glass-clear-bg: rgba(0, 0, 0, 0.6);
        --gitbook3-glass-clear-border: rgba(255, 255, 255, 0.08);
        --gitbook3-glass-clear-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        --gitbook3-glass-clear-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.3);
        --gitbook3-glass-clear-shadow-active: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      /* =========================
         基础样式重置
         ========================= */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        line-height: 1.6;
        transition: var(--gitbook3-transition);
      }
      
      /* =========================
         Liquid Glass 链接系统
         ========================= */
      a {
        color: var(--gitbook3-link-color);
        text-decoration: none;
        position: relative;
        display: inline-block;
        transition: var(--gitbook3-link-transition);
        border-radius: var(--gitbook3-glass-radius);
        padding: 2px 4px;
        margin: -2px -4px;
        z-index: 1;
      }
      
      /* 悬停和聚焦状态 - Liquid Glass 微胶囊 */
      a:hover,
      a:focus-visible {
        color: var(--gitbook3-link-color-hover);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow-hover);
        transform: translateY(-1px);
        text-decoration: none;
      }
      
      /* 按下状态 - 玻璃轻压效果 */
      a:active {
        color: var(--gitbook3-link-color-active);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow-active);
        transform: translateY(0);
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* 禁用状态 */
      a:disabled,
      a[disabled] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      
      /* 无障碍支持 - 减少透明度时的降级处理 */
      @media (prefers-reduced-transparency: reduce) {
        a:hover,
        a:focus-visible,
        a:active {
          background: var(--gitbook3-glass-clear-bg);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 2px solid var(--gitbook3-link-color);
        }
      }
      
      /* 减少动效时的降级处理 */
      @media (prefers-reduced-motion: reduce) {
        a {
          transition: none;
        }
        
        a:hover,
        a:focus-visible,
        a:active {
          transform: none;
        }
      }
      
      /* =========================
         主题根容器
         ========================= */
      #theme-gitbook3 {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        transition: var(--gitbook3-transition);
      }
      
      /* =========================
         主布局容器（两列布局，无TopBar）
         ========================= */
      .gitbook3-main-layout {
        display: grid;
        grid-template-columns: var(--gitbook3-sidebar-width) 1fr;
        grid-template-areas: "sidebar reading";
        min-height: 100vh;
        margin-top: 0;
        gap: 0;
      }
      
      /* 侧栏收起时的布局调整 */
      body.gitbook3-sidebar-collapsed .gitbook3-main-layout {
        grid-template-columns: 0 1fr;
      }
      
      /* =========================
         全局侧栏（全高度）
         ========================= */
      .gitbook3-global-sidebar {
        grid-area: sidebar;
        background: var(--gitbook3-bg-primary);
        border-right: 1px solid var(--gitbook3-border);
        height: 100vh;
        overflow-y: auto;
        position: sticky;
        top: 0;
        transition: transform var(--gitbook3-transition), opacity var(--gitbook3-transition);
        z-index: 30;
        will-change: transform, opacity;
      }
      
      .gitbook3-global-sidebar.collapsed {
        transform: translateX(-100%);
        opacity: 0;
        pointer-events: none;
      }
      
      .gitbook3-global-sidebar.temporarily-open {
        transform: translateX(0);
        width: var(--gitbook3-sidebar-width);
        border-right: 1px solid var(--gitbook3-border);
        z-index: 50;
      }
      
      /* 工具条 */
      .gitbook3-sidebar-toolbar {
        background: var(--gitbook3-bg-primary);
        border-bottom: 1px solid var(--gitbook3-border);
        padding: 12px 16px;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      
      .gitbook3-toolbar-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      /* 菜单按钮 */
      .gitbook3-menu-btn {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        transition: var(--gitbook3-transition);
        color: var(--gitbook3-text-secondary);
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 40px;
        margin-left: auto;
      }
      
      .gitbook3-menu-btn:hover {
        background: var(--gitbook3-bg-secondary);
        border-color: var(--gitbook3-accent);
        color: var(--gitbook3-accent);
        box-shadow: var(--gitbook3-shadow);
      }
      
      .gitbook3-menu-btn:focus {
        outline: none;
        border-color: var(--gitbook3-accent);
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
      }

      /* 折叠菜单 */
      .gitbook3-sidebar-menu-collapse {
        border-bottom: 1px solid var(--gitbook3-border-light);
      }

      .gitbook3-sidebar-menu-content {
        padding: 16px;
        background: var(--gitbook3-bg-secondary);
      }

      .gitbook3-sidebar-menu-items {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      }

      .gitbook3-sidebar-user-actions {
        display: flex;
        align-items: center;
        gap: 12px;
        padding-top: 16px;
        border-top: 1px solid var(--gitbook3-border-light);
      }
      
      /* 隐藏侧栏按钮 */
      .gitbook3-hide-sidebar-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: transparent;
        border: 1px solid var(--gitbook3-border);
        border-radius: 6px;
        color: var(--gitbook3-text-secondary);
        cursor: pointer;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-hide-sidebar-btn:hover {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        border-color: var(--gitbook3-border);
      }
      
      .gitbook3-hide-sidebar-btn:focus {
        outline: 2px solid var(--gitbook3-accent);
        outline-offset: 2px;
      }
      
      /* 侧栏内容 */
      .gitbook3-sidebar-content {
        padding: 16px;
      }
      
      /* =========================
         边缘把手和热区
         ========================= */
      .gitbook3-hover-zone {
        position: fixed;
        left: 0;
        top: var(--gitbook3-topbar-height);
        width: 16px;
        height: calc(100vh - var(--gitbook3-topbar-height));
        z-index: 40;
        cursor: pointer;
      }
      
      .gitbook3-edge-handle {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 44px;
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-left: none;
        border-radius: 0 8px 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 45;
        transition: var(--gitbook3-transition);
        box-shadow: var(--gitbook3-shadow);
      }
      
      .gitbook3-edge-handle:hover {
        background: var(--gitbook3-bg-secondary);
        box-shadow: var(--gitbook3-shadow-hover);
        transform: translateY(-50%) translateX(2px);
      }
      
      .gitbook3-edge-handle.hovering {
        transform: translateY(-50%) translateX(4px);
      }
      
      .gitbook3-handle-icon {
        color: var(--gitbook3-text-secondary);
        font-size: 12px;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-edge-handle:hover .gitbook3-handle-icon {
        color: var(--gitbook3-text-primary);
      }
      
      /* TopBar 侧栏开关按钮 */
      .gitbook3-sidebar-toggle-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: transparent;
        border: 1px solid var(--gitbook3-border);
        border-radius: 6px;
        color: var(--gitbook3-text-secondary);
        cursor: pointer;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-sidebar-toggle-btn:hover {
        background: var(--gitbook3-bg-secondary);
        color: var(--gitbook3-text-primary);
        border-color: var(--gitbook3-border);
      }
      
      .gitbook3-sidebar-toggle-btn:focus {
        outline: 2px solid var(--gitbook3-accent);
        outline-offset: 2px;
      }
      
      /* =========================
         阅读区域（合并了原来的中间内容列和右侧栏）
         ========================= */
      .gitbook3-reading-area {
        grid-area: reading;
        background: var(--gitbook3-bg-secondary);
        overflow-y: auto;
        padding: 24px;
      }
      
      .gitbook3-reading-wrapper {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      /* =========================
         阅读卡片（GitBook风格）
         ========================= */
      .gitbook3-reading-card {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: var(--gitbook3-container-radius);
        box-shadow: var(--gitbook3-shadow);
        overflow: hidden;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook3-reading-card:hover {
        box-shadow: var(--gitbook3-shadow-hover);
      }
      
      /* CardHeader：文档抬头区域 */
      .gitbook3-card-header {
        padding: 40px 40px 24px 40px;
        border-bottom: none;
      }
      
      .gitbook3-notice {
        background: rgba(255, 193, 7, 0.1);
        color: #856404;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 24px;
        border: 1px solid rgba(255, 193, 7, 0.2);
      }
      
      .gitbook3-document-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--gitbook3-text-primary);
        margin: 0 0 16px 0;
        line-height: 1.2;
      }
      
      .gitbook3-document-description {
        font-size: 1.125rem;
        color: var(--gitbook3-text-secondary);
        margin: 0;
        line-height: 1.6;
      }
      
      /* CardBody：卡片正文区域，内部是两列布局 */
      .gitbook3-card-body {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 40px;
        padding: 0 40px 40px 40px;
      }
      
      /* MainPane：正文内容区 */
      .gitbook3-main-pane {
        min-width: 0; /* 防止内容溢出 */
      }
      
      /* SidePane：辅助信息（MetaCard 与 ToC） */
      .gitbook3-side-pane {
        min-width: 0; /* 防止内容溢出 */
      }
      
      /* =========================
         目录样式
         ========================= */
      .gitbook3-catalog {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: var(--gitbook3-container-radius);
        box-shadow: var(--gitbook3-shadow);
        padding: 24px;
        position: sticky;
        top: 24px;
        margin-bottom: 24px;
        max-height: calc(100vh - 120px);
        overflow-y: auto;
      }
      
      /* 确保粘性目录在卡片内部贴顶，不覆盖正文 */
      @media (min-width: 1024px) {
        .gitbook3-sticky-toc {
          position: sticky;
          top: 24px;
        }
      }
      
      /* =========================
         响应式设计
         ========================= */
      
      /* 大屏幕 (>= 1440px) */
      @media (min-width: 1440px) {
        .gitbook3-reading-wrapper {
          max-width: 1400px;
        }
        
        .gitbook3-card-body {
          grid-template-columns: 1fr 320px;
          gap: 48px;
        }
      }
      
      /* 中等屏幕 (1024px - 1439px) */
      @media (max-width: 1439px) and (min-width: 1024px) {
        .gitbook3-card-body {
          grid-template-columns: 1fr 280px;
          gap: 32px;
        }
      }
      
      /* 平板与手机 (< 1024px) - 单列堆叠 */
      @media (max-width: 1023px) {
        .gitbook3-main-layout {
          grid-template-columns: var(--gitbook3-sidebar-width) 1fr;
          grid-template-areas: "sidebar reading";
        }
        
        body.gitbook3-sidebar-collapsed .gitbook3-main-layout {
          grid-template-columns: 0 1fr;
        }
        
        /* 卡片内部改为单列堆叠 */
        .gitbook3-card-body {
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 0 32px 32px 32px;
        }
        
        /* SidePane 内容移动到正文上方 */
        .gitbook3-side-pane {
          order: -1;
        }
        
        /* 禁用粘性定位 */
        .gitbook3-sticky-toc {
          position: static;
          top: auto;
        }
      }
      
      /* 手机 (< 768px) */
      @media (max-width: 767px) {
        .gitbook3-main-layout {
          grid-template-columns: 1fr;
          grid-template-areas: "reading";
        }
        
        .gitbook3-global-sidebar {
          display: none;
        }
        
        .gitbook3-reading-area {
          padding: 16px;
        }
        
        .gitbook3-card-header {
          padding: 24px 24px 16px 24px;
        }
        
        .gitbook3-card-body {
          padding: 0 24px 24px 24px;
          gap: 24px;
        }
        
        /* 移动端隐藏边缘把手和热区 */
        .gitbook3-hover-zone,
        .gitbook3-edge-handle {
          display: none;
        }
      }
      
      /* 超小屏幕 (<= 480px) */
      @media (max-width: 480px) {
        .gitbook3-reading-area {
          padding: 12px;
        }
        
        .gitbook3-card-header {
          padding: 20px 20px 12px 20px;
        }
        
        .gitbook3-card-body {
          padding: 0 20px 20px 20px;
          gap: 20px;
        }
      }
      
      /* =========================
         特殊链接样式覆盖 - 保持 Liquid Glass 风格
         ========================= */
      .gitbook3-reading-card a,
      .gitbook3-sidebar-content a,
      .gitbook3-topbar a {
        /* 继承全局磨砂玻璃样式 */
      }
      
      /* 导航链接特殊处理 */
      .gitbook3-nav-item a {
        color: var(--gitbook3-text-secondary);
        padding: 4px 8px;
        margin: -4px -8px;
        border-radius: var(--gitbook3-glass-radius);
      }
      
      .gitbook3-nav-item a:hover,
      .gitbook3-nav-item a:focus-visible {
        color: var(--gitbook3-text-primary);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow);
        transform: translateY(-1px);
      }
      
      .dark .gitbook3-nav-item a:hover,
      .dark .gitbook3-nav-item a:focus-visible {
        background: var(--gitbook3-glass-clear-bg);
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow);
      }
      
      /* =========================
         标题样式
         ========================= */
      h1, h2, h3, h4, h5, h6 {
        color: var(--gitbook3-text-primary);
        font-weight: 600;
        line-height: 1.25;
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      h1 {
        font-size: 2.25rem;
      }
      
      h2 {
        font-size: 1.875rem;
      }
      
      h3 {
        font-size: 1.5rem;
      }
      
      h4 {
        font-size: 1.25rem;
      }
      
      h5 {
        font-size: 1.125rem;
      }
      
      h6 {
        font-size: 1rem;
      }
      
      /* =========================
         按钮样式
         ========================= */
      .gitbook-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 6px;
        color: var(--gitbook3-text-primary);
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: var(--gitbook3-transition);
      }
      
      .gitbook-button:hover {
        background: var(--gitbook3-bg-secondary);
        border-color: var(--gitbook3-border);
        transform: translateY(-1px);
        box-shadow: var(--gitbook3-shadow);
      }
      
      .gitbook-button.primary {
        background: var(--gitbook3-accent);
        border-color: var(--gitbook3-accent);
        color: white;
      }
      
      .gitbook-button.primary:hover {
        background: var(--gitbook3-accent-hover);
        border-color: var(--gitbook3-accent-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
      }
      
      /* 特殊链接样式覆盖 - 保持 Liquid Glass 风格 */
      .gitbook3-nav-item a {
        color: var(--gitbook3-text-secondary);
        padding: 4px 8px;
        margin: -4px -8px;
        border-radius: var(--gitbook3-glass-radius);
      }
      
      .gitbook3-nav-item a:hover,
      .gitbook3-nav-item a:focus-visible {
        color: var(--gitbook3-text-primary);
        background: var(--gitbook3-glass-clear-bg);
        backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        -webkit-backdrop-filter: blur(var(--gitbook3-glass-blur)) saturate(var(--gitbook3-glass-saturation)) brightness(var(--gitbook3-glass-brightness));
        border: 1px solid var(--gitbook3-glass-clear-border);
        box-shadow: var(--gitbook3-glass-clear-shadow);
        transform: translateY(-1px);
      }
      
      /* =========================
         滚动条样式
         ========================= */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--gitbook3-bg-secondary);
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--gitbook3-border);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--gitbook3-text-secondary);
      }
      
      /* =========================
         动画和过渡
         ========================= */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .gitbook3-fade-in {
        animation: fadeIn 0.3s ease-out;
      }
      
      /* =========================
         边缘把手样式
         ========================= */
      .gitbook3-edge-handle-container {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 40;
        width: 54px; /* 22px handle + 16px hot zone on each side */
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .gitbook3-edge-handle {
        width: 22px;
        height: 44px;
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--gitbook3-transition);
        box-shadow: var(--gitbook3-shadow);
        color: var(--gitbook3-text-secondary);
        font-size: 12px;
      }
      
      .gitbook3-edge-handle:hover {
        background: var(--gitbook3-bg-secondary);
        border-color: var(--gitbook3-accent);
        color: var(--gitbook3-accent);
        box-shadow: var(--gitbook3-shadow-hover);
        transform: translateY(-1px);
      }
      
      .gitbook3-edge-handle:focus {
        outline: none;
        border-color: var(--gitbook3-accent);
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
      }
      
      .gitbook3-edge-handle:active {
        transform: translateY(0);
        box-shadow: var(--gitbook3-shadow);
      }
      
      /* 热区效果 */
      .gitbook3-edge-handle-container:hover .gitbook3-global-sidebar.collapsed {
        transform: translateX(0);
        opacity: 1;
      }
      
      /* 临时滑出状态 */
      .gitbook3-global-sidebar.temporarily-open {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
      }
      
      /* TopBar 侧栏开关按钮 */
      .gitbook3-sidebar-toggle-btn {
        background: var(--gitbook3-bg-primary);
        border: 1px solid var(--gitbook3-border);
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        transition: var(--gitbook3-transition);
        color: var(--gitbook3-text-secondary);
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 40px;
      }
      
      .gitbook3-sidebar-toggle-btn:hover {
        background: var(--gitbook3-bg-secondary);
        border-color: var(--gitbook3-accent);
        color: var(--gitbook3-accent);
        box-shadow: var(--gitbook3-shadow);
      }
      
      .gitbook3-sidebar-toggle-btn:focus {
        outline: none;
        border-color: var(--gitbook3-accent);
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
      }
      
      /* =========================
         打印样式
         ========================= */
      @media print {
        .gitbook3-global-sidebar,
        .gitbook3-edge-handle,
        .gitbook3-hover-zone {
          display: none !important;
        }
        
        .gitbook3-main-layout {
          grid-template-columns: 1fr !important;
        }
        
        .gitbook3-card-body {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  )
}

export { Style }