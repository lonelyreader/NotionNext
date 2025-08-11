
import React, { useState, useEffect } from 'react'

// Utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(' ')

// Utility function to convert UUID to ID
const uuidToId = (uuid) => {
  if (!uuid) return ''
  return uuid.replace(/-/g, '')
}

// Active section hook
const useActiveSection = (toc) => {
  const [activeSection, setActiveSection] = useState(null)
  
  useEffect(() => {
    if (!toc || toc.length === 0) return
    
    const handleScroll = () => {
      const sections = toc.map(item => ({
        id: uuidToId(item.id),
        element: document.getElementById(uuidToId(item.id))
      })).filter(section => section.element)
      
      let current = null
      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect()
        if (rect.top <= 100) {
          current = section.id
        }
      })
      
      setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])
  
  return activeSection
}

const GitbookTableOfContents = ({ toc, className, slug }) => {
  const activeSection = useActiveSection(toc)

  if (!toc || toc.length === 0) {
    return null
  }

  const renderTocItem = (item, index) => {
    const id = uuidToId(item.id)
    const isActive = activeSection === id

    return (
      <li key={index} className={cn('my-1', item.indentLevel > 0 && 'ml-4')}>
        <a
          href={`#${id}`}
          className={cn(
            'block py-2 px-3 text-sm rounded-lg transition-all duration-200 glass-button',
            isActive
              ? 'text-blue-400 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/25'
              : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20'
          )}
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById(id)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          {item.text}
        </a>
        {item.children && item.children.length > 0 && (
          <ul className="ml-2 mt-1">
            {item.children.map((child, childIndex) =>
              renderTocItem(child, `${index}-${childIndex}`)
            )}
          </ul>
        )}
      </li>
    )
  }

  return (
    <div className={cn('table-of-contents', className)}>
      <h3 className="text-lg font-semibold mb-4 text-white/90 flex items-center">
        <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></span>
        目录
      </h3>
      <ul className="space-y-1">
        {toc.map((item, index) => renderTocItem(item, index))}
      </ul>
    </div>
  )
}

export default GitbookTableOfContents
