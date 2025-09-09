import { useState, useEffect } from 'react'
import { useGitBookGlobal } from '../index'

/**
 * 边缘把手组件
 * 当侧栏收起时显示，提供重新展开的入口
 * 遵循苹果HIG的侧栏与导航可发现性建议
 */
export default function EdgeHandle() {
  const { isCollapsed, toggleSidebar, setTemporaryOpen } = useGitBookGlobal()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // 只在桌面端且侧栏收起时显示
  useEffect(() => {
    const checkVisibility = () => {
      const isDesktop = window.innerWidth >= 1024
      setIsVisible(isDesktop && isCollapsed)
    }

    checkVisibility()
    window.addEventListener('resize', checkVisibility)
    return () => window.removeEventListener('resize', checkVisibility)
  }, [isCollapsed])

  // 处理鼠标进入热区
  const handleMouseEnter = () => {
    setIsHovering(true)
    setTemporaryOpen(true) // 临时滑出侧栏
  }

  // 处理鼠标离开热区
  const handleMouseLeave = () => {
    setIsHovering(false)
    setTemporaryOpen(false) // 收起临时滑出的侧栏
  }

  // 处理点击把手
  const handleClick = () => {
    toggleSidebar()
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* 热区 */}
      <div
        className='gitbook3-hover-zone'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      />
      {/* 把手 */}
      <button
        className={`gitbook3-edge-handle ${isHovering ? 'hovering' : ''}`}
        onClick={handleClick}
        aria-label="Show sidebar"
        aria-expanded="false"
        title="Show sidebar"
      >
        <i className='fas fa-chevron-right gitbook3-handle-icon' />
      </button>
    </>
  )
}
