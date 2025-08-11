
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
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }

      .dark .ai-bg {
        background: linear-gradient(135deg,
          rgb(30, 27, 75) 0%,
          rgb(45, 25, 85) 52%,
          rgb(60, 35, 95) 100%);
      }

      .dark .glass {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .dark .glass-hover:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}</style>
  )
}
