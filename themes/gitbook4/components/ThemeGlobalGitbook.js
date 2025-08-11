
import React, { createContext, useContext } from 'react'

// 创建主题上下文
const ThemeGlobalGitbookContext = createContext({})

// Provider组件
const ThemeGlobalGitbook = {
  Provider: ({ children, value }) => (
    <ThemeGlobalGitbookContext.Provider value={value}>
      {children}
    </ThemeGlobalGitbookContext.Provider>
  )
}

// Hook for using context
export const useGitbookGlobal = () => {
  const context = useContext(ThemeGlobalGitbookContext)
  if (!context) {
    throw new Error('useGitbookGlobal must be used within ThemeGlobalGitbook.Provider')
  }
  return context
}

// Style component
export const Style = () => {
  return (
    <style jsx global>{`
      .ai-bg {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #000033 50%, #001a33 75%, #0a0a0a 100%);
        background-size: 400% 400%;
        animation: aiGradient 15s ease infinite;
      }
      
      @keyframes aiGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .glass-button {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .glass-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      }
    `}</style>
  )
}

export default ThemeGlobalGitbook
