
import React from 'react'

// Utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(' ')

// Utility function to convert UUID to ID
const uuidToId = (uuid) => {
  if (!uuid) return ''
  return uuid.replace(/-/g, '')
}

// Simple hook for active section
const useActiveSection = (toc) => {
  return null // Simplified for now
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
            'block py-1 px-2 text-sm rounded transition-colors',
            isActive 
              ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
          )}
        >
          {item.text}
        </a>
        {item.children && item.children.length > 0 && (
          <ul className="ml-2">
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
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        目录
      </h3>
      <ul className="space-y-1">
        {toc.map((item, index) => renderTocItem(item, index))}
      </ul>
    </div>
  )
}

export default GitbookTableOfContents
