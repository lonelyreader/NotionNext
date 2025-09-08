import Badge from '@/components/Badge'
import Collapse from '@/components/Collapse'
import { siteConfig } from '@/lib/config'
import { useEffect, useState } from 'react'
import BlogPostCard from './BlogPostCard'

/**
 * 导航列表
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const NavPostItem = props => {
  const { group, expanded, toggleItem } = props // 接收传递的展开状态和切换函数
  const hoverExpand = siteConfig('GITBOOK_FOLDER_HOVER_EXPAND')
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // 检测是否为触摸设备
  useEffect(() => {
    const checkTouchDevice = () => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsTouchDevice(true)
      }
    }
    checkTouchDevice()

    // 可选：监听窗口大小变化时重新检测
    window.addEventListener('resize', checkTouchDevice)
    return () => {
      window.removeEventListener('resize', checkTouchDevice)
    }
  }, [])

  // 当展开状态改变时触发切换函数，并根据传入的展开状态更新内部状态
  const toggleOpenSubMenu = () => {
    toggleItem() // 调用父组件传递的切换函数
  }
  const onHoverToggle = () => {
    // 允许鼠标悬停时自动展开，而非点击展开
    if (!hoverExpand || isTouchDevice) {
      return
    }
    toggleOpenSubMenu()
  }

  const groupHasLatest = group?.items?.some(post => post.isLatest)

  if (group?.category) {
    return (
      <>
        <div
          onMouseEnter={onHoverToggle}
          onClick={toggleOpenSubMenu}
          className='cursor-pointer relative flex justify-between text-md p-3 hover:bg-purple-600/10 dark:hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-purple-600/20 dark:hover:border-yellow-400/20 backdrop-blur-sm'
          key={group?.category}>
          <span className={`${expanded && 'font-semibold'} text-gray-800 dark:text-white`}>
            {group?.category}
          </span>
          <div className='inline-flex items-center select-none pointer-events-none '>
            <i
              className={`px-2 fas fa-chevron-left transition-all opacity-70 duration-700 text-gray-800 dark:text-white ${expanded ? '-rotate-90' : ''}`}></i>
          </div>
          {groupHasLatest &&
            siteConfig('GITBOOK_LATEST_POST_RED_BADGE') &&
            !expanded && <Badge />}
        </div>
        <Collapse isOpen={expanded} onHeightChange={props.onHeightChange}>
          {group?.items?.map((post, index) => (
            <div key={index} className='ml-3 border-l border-gray-300/30 dark:border-white/20'>
              <BlogPostCard className='ml-3' post={post} />
            </div>
          ))}
        </Collapse>
      </>
    )
  } else {
    return (
      <>
        {group?.items?.map((post, index) => (
          <div key={index}>
            <BlogPostCard className='text-md py-2' post={post} />
          </div>
        ))}
      </>
    )
  }
}

export default NavPostItem
