import Collapse from '@/components/Collapse'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { useRef, useState } from 'react'
import CONFIG from '../config'
import LogoBar from './LogoBar'
import { MenuBarMobile } from './MenuBarMobile'
import { MenuItemDrop } from './MenuItemDrop'

/**
 * GitBook3 顶栏：固定在最上方，只放品牌/全局菜单，不放搜索
 * @param {} param0
 * @returns
 */
export default function Header(props) {
  const { className, customNav, customMenu } = props
  const [isOpen, changeShow] = useState(false)
  const collapseRef = useRef(null)

  const { locale } = useGlobal()

  const defaultLinks = [
    {
      icon: 'fas fa-th',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('GITBOOK_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('GITBOOK_BOOK_MENU_TAG', null, CONFIG)
    },
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('GITBOOK_MENU_ARCHIVE', null, CONFIG)
    }
    // 注意：搜索功能已移到左侧栏，这里不再显示
  ]

  let links = defaultLinks.concat(customNav)

  const toggleMenuOpen = () => {
    changeShow(!isOpen)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  return (
    <header id='gitbook3-topbar' className={'gitbook3-topbar ' + className}>
      {/* 固定顶栏 */}
      <div className='flex justify-center items-center w-full h-full px-6'>
        <div className='max-w-screen-4xl w-full flex gap-x-4 justify-between items-center'>
          {/* 左侧：品牌标识 */}
          <div className='flex items-center'>
            <LogoBar {...props} />
          </div>

          {/* 中间：全局菜单 */}
          <div className='hidden md:flex items-center gap-6'>
            {links &&
              links?.map((link, index) => (
                <MenuItemDrop key={index} link={link} />
              ))}
          </div>

          {/* 右侧：用户操作 */}
          <div className='flex items-center gap-3'>
            {/* 登录相关 */}
            {enableClerk && (
              <>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <button className='gitbook-button primary'>
                      {locale.COMMON.SIGN_IN}
                    </button>
                  </SignInButton>
                </SignedOut>
                <UserButton />
              </>
            )}
            <DarkModeButton className='text-sm items-center h-full hidden md:flex' />
            
            {/* 移动端菜单按钮 */}
            <div className='md:hidden flex items-center gap-3'>
              <DarkModeButton className='flex text-md items-center h-full' />
              <button
                onClick={toggleMenuOpen}
                className='gitbook-button'
                aria-label="Toggle menu">
                {isOpen ? (
                  <i className='fas fa-times' />
                ) : (
                  <i className='fa-solid fa-bars' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端折叠菜单 */}
      <Collapse
        type='vertical'
        collapseRef={collapseRef}
        isOpen={isOpen}
        className='md:hidden'>
        <div className='bg-white/95 backdrop-blur-xl pt-1 py-2 dark:bg-gray-800/95'>
          <MenuBarMobile
            {...props}
            onHeightChange={param =>
              collapseRef.current?.updateCollapseHeight(param)
            }
          />
        </div>
      </Collapse>
    </header>
  )
}
