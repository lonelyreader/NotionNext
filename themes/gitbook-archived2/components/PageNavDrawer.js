import { useGlobal } from '@/lib/global'
import { useGitBookGlobal } from '@/themes/gitbook2'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NavPostList from './NavPostList'

/**
 * 悬浮抽屉 页面内导航
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const PageNavDrawer = props => {
  const { pageNavVisible, changePageNavVisible, navPinned, setNavPinned } = useGitBookGlobal()
  const { filteredNavPages } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const switchVisible = () => {
    changePageNavVisible(!pageNavVisible)
  }

  useEffect(() => {
    changePageNavVisible(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <>
      <div
        id='gitbook2-left-float'
        className='fixed top-0 left-0 z-40 md:hidden'>
        {/* 侧边菜单 */}
        <div
          id="left-drawer"
          className={`${pageNavVisible ? 'animate__slideInLeft ' : '-ml-80 animate__slideOutLeft'} 
                      overflow-y-hidden shadow-card w-72 duration-200 fixed left-6 top-18 rounded py-2 bg-white dark:bg-hexo-black-gray`}
          style={{ 
            position: 'fixed', 
            left: '24px', 
            top: '72px', 
            width: '280px', 
            maxHeight: 'calc(100vh - 120px)', 
            overflow: 'auto', 
            zIndex: 40 
          }}>
          {/* 钉选和关闭按钮 */}
          <div className="flex items-center justify-between mb-2 px-4">
            <button 
              aria-label="钉选导航" 
              title="钉选导航" 
              className="btn h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => { 
                setNavPinned(true); 
                changePageNavVisible(false) 
              }}
            >
              <i className="fa-solid fa-thumbtack" />
            </button>
            <button 
              aria-label="收起导航" 
              title="收起导航" 
              className="btn h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => changePageNavVisible(false)}
            >
              <i className="fa-solid fa-outdent" />
            </button>
          </div>
          
          <div className='px-4 pb-2 flex justify-between items-center border-b font-bold'>
            <span>{locale.COMMON.ARTICLE_LIST}</span>
          </div>
          {/* 所有文章列表 */}
          <div className='dark:text-gray-400 text-gray-600 h-96 overflow-y-scroll p-3'>
            <NavPostList filteredNavPages={filteredNavPages} />
          </div>
        </div>
      </div>

      {/* 背景蒙版 */}
      <div
        id='left-drawer-background'
        className={`${pageNavVisible ? 'block' : 'hidden'} fixed top-0 left-0 z-30 w-full h-full`}
        onClick={() => changePageNavVisible(false)}
      />
    </>
  )
}
export default PageNavDrawer
