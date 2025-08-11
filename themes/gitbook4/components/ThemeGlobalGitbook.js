
import React, { createContext, useContext } from 'react'

const ThemeGlobalGitbook = createContext()

const useGlobal = () => useContext(ThemeGlobalGitbook)

export { useGlobal }

export default ThemeGlobalGitbook

// Style component for theme-specific styles
export const Style = () => {
  return (
    <style jsx global>{`
      .ai-bg {
        background: linear-gradient(135deg,
          rgb(79, 70, 229) 0%,
          rgb(124, 58, 237) 52%,
          rgb(168, 85, 247) 100%);
        min-height: 100vh;
        position: relative;
      }

      .ai-bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
        pointer-events: none;
      }

      .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
      }

      .glass-hover {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .glass-hover:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      /* AI风格按钮 */
      .ai-button {
        background: linear-gradient(145deg, rgba(124, 58, 237, 0.8), rgba(168, 85, 247, 0.8));
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        border-radius: 12px;
        padding: 0.75rem 1.5rem;
        transition: all 0.3s ease;
      }

      .ai-button:hover {
        background: linear-gradient(145deg, rgba(124, 58, 237, 0.9), rgba(168, 85, 247, 0.9));
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
      }

      /* 卡片样式 */
      .ai-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 1.5rem;
        transition: all 0.3s ease;
      }

      .ai-card:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
      }

      /* 输入框样式 */
      .ai-input {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        color: white;
        padding: 0.75rem 1rem;
        transition: all 0.3s ease;
      }

      .ai-input:focus {
        outline: none;
        border-color: rgba(168, 85, 247, 0.6);
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
      }

      .ai-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      /* 导航项样式 */
      .ai-nav-item {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        margin: 0.25rem 0;
        transition: all 0.3s ease;
      }

      .ai-nav-item:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(8px);
        border-color: rgba(255, 255, 255, 0.2);
      }
    `}</style>
  )
}
