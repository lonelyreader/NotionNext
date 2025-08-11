import React from 'react'
import { cn } from '@utils/cn'
import { uuidToId } from '@utils/format'
import { useActiveSection } from '@hooks/useActiveSection'

const GitbookTableOfContents = ({ toc, className, slug }) => {
  const activeSection = useActiveSection(toc)

  return (
    <div
      id='toc-wrapper'
      className='glass rounded-xl p-3 shadow-glass'>
      <div className='toc-wrapper overflow-y-auto my-2 max-h-80 overscroll-none scroll-hidden'>
        <nav className='h-full space-y-1'>
          {toc?.map(tocItem => {
            const id = uuidToId(tocItem.id)
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`${isActive
                  ? 'border-l-2 border-brand-600/60 text-white bg-brand-600/20 pl-3'
                  : 'border-l-2 border-transparent pl-3 text-white/70 hover:text-white hover:border-white/30'
                } block py-2 px-3 rounded-xl transition-all duration-300 transform font-light
                  notion-table-of-contents-item-indent-level-${tocItem.indentLevel} catalog-item hover:bg-white/5`}>
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: tocItem.indentLevel * 16
                  }}
                  className='truncate text-sm'>
                  {tocItem.text}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default GitbookTableOfContents