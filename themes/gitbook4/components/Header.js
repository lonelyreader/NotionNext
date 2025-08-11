import Collapse from '@/components/Collapse'
import DarkModeButton from '@/components/DarkModeButton'
import GlassButton from '@/components/ui/GlassButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { useRef, useState } from 'react'
import CONFIG from '../config'
import LogoBar from './LogoBar'
import { MenuBarMobile } from './MenuBarMobile'
import { MenuItemDrop } from './MenuItemDrop'
import SearchInput from './SearchInput'

export function Nav (props) {
  const collapseRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { locale, THEME_CONFIG } = useGlobal()
  const enableClerk = THEME_CONFIG.ENABLE_CLERK
  const navRef = useRef(null)

  const MENU_LIST = CONFIG.MENU
  const SHOW_MENU_SEARCH = CONFIG.MENU_SEARCH
  const SHOW_MENU_GITHUB = CONFIG.MENU_GITHUB
  const SHOW_MENU_HOMEPAGE = CONFIG.MENU_HOMEPAGE
  const SHOW_MENU_NOTION_HOME = CONFIG.MENU_NOTION_HOME

  // Function to handle menu item clicks and close the mobile menu
  const handleMenuItemClick = () => {
    setIsOpen(false)
    collapseRef.current?.closeCollapse()
  }

  return (
    <div id='top-nav' className={'sticky top-4 w-full z-20 ' + props.className}>
      {/* PC端菜单 */}
      <div className='glass rounded-xl mx-4 shadow-glass'>
        <div className='px-5 w-full flex gap-x-3 justify-between items-center h-16'>
          <div className='flex items-center'>
            {/* Logo */}
            <LogoBar />

            {/* Menu */}
            <nav className='ml-8'>
              <ul className='flex'>
                {SHOW_MENU_HOMEPAGE && (
                  <li className='mx-3 '>
                    {SHOW_MENU_NOTION_HOME ? (
                      <Link href='/' className='hover:text-blue-600 duration-200'>
                        {locale.NAV.HOME}
                      </Link>
                    ) : (
                      <Link href='/archive' className='hover:text-blue-600 duration-200'>
                        {locale.NAV.HOME}
                      </Link>
                    )}
                  </li>
                )}
                {MENU_LIST.map((menuItem, index) => (
                  <MenuItemDrop
                    key={index}
                    menuItem={menuItem}
                    handleMenuItemClick={handleMenuItemClick}
                  />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex items-center'>
            {SHOW_MENU_SEARCH && <SearchInput />}
            {SHOW_MENU_GITHUB && (
              <a
                href={siteConfig.SINICE_WEBSITE}
                rel='noreferrer'
                target='_blank'
                className='text-xs hidden mr-4 text-gray-600 dark:text-gray-400 md:inline-block'
              >
                {siteConfig.SINICE_WEBSITE_TEXT}
              </a>
            )}

            <DarkModeButton />

            {/* Clerk Login */}
            {enableClerk && (
              <>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <GlassButton className="flex items-center gap-2">
                      <span className="text-sm">{locale.COMMON.SIGN_IN}</span>
                    </GlassButton>
                  </SignInButton>
                </SignedOut>
                <UserButton />
              </>
            )}
          </div>
        </div>
      </div>

      <Collapse
        type='vertical'
        collapseRef={collapseRef}
        isOpen={isOpen}
        className='md:hidden'>
        <div className='glass rounded-xl mx-4 mt-2 p-2 shadow-glass lg:hidden'>
          <MenuBarMobile
            {...props}
            onHeightChange={param =>
              collapseRef.current?.updateCollapseHeight(param)
            }
          />
        </div>
      </Collapse>
    </div>
  )
}