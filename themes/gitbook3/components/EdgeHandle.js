import { useGitBookGlobal } from '../index'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 桌面端侧栏边缘把手
 * 当侧栏收起时显示，提供热区和点击功能
 */
export default function EdgeHandle() {
  const { isCollapsed, setTemporaryOpen, toggleSidebar } = useGitBookGlobal()
  const { fullWidth } = useGlobal()

  // 仅在桌面端且侧栏收起时显示
  if (!CONFIG.GITBOOK3_EDGE_HANDLE || !isCollapsed || fullWidth) {
    return null
  }

  const handleMouseEnter = () => {
    setTemporaryOpen(true)
  }

  const handleMouseLeave = () => {
    setTemporaryOpen(false)
  }

  const handleClick = () => {
    toggleSidebar()
  }

  return (
    <div
      className='gitbook3-edge-handle-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className='gitbook3-edge-handle'
        onClick={handleClick}
        aria-label="Show sidebar"
        aria-expanded="false"
        title="Show sidebar"
      >
        <i className='fas fa-bars' />
      </button>
    </div>
  )
}