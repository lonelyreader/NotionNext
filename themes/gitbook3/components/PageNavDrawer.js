import { useGlobal } from '@/lib/global'
import { useGitBookGlobal } from '../index'
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
  const { pageNavVisible, changePageNavVisible } = useGitBookGlobal()
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
        id='gitbook-left-float'
        className='fixed top-0 left-0 z-40 md:hidden'>
        {/* 侧边菜单 */}
        <div
          className={`${pageNavVisible ? 'animate__slideInLeft ' : '-ml-80 animate__slideOutLeft'} 
                      overflow-y-hidden shadow-card w-72 duration-200 fixed left-1 bottom-16 rounded-lg py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600`}>
          <div className='px-4 pb-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-600 font-bold text-gray-800 dark:text-gray-200'>
            <span className='text-sm'>{locale.COMMON.ARTICLE_LIST}</span>
            <i
              className='fas fa-times p-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200'
              onClick={() => {
                changePageNavVisible(false)
              }}></i>
          </div>
          {/* 所有文章列表 */}
          <div className='dark:text-gray-300 text-gray-600 h-96 overflow-y-scroll p-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600'>
            <NavPostList filteredNavPages={filteredNavPages} />
          </div>
        </div>
      </div>

      {/* 背景蒙版 */}
      <div
        id='left-drawer-background'
        className={`${pageNavVisible ? 'block' : 'hidden'} fixed top-0 left-0 z-30 w-full h-full`}
        onClick={switchVisible}
      />
    </>
  )
}
export default PageNavDrawer
