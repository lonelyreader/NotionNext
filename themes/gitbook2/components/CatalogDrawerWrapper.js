import { useGlobal } from '@/lib/global'
import { useGitBookGlobal } from '../index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Catalog from './Catalog'

/**
 * 悬浮抽屉目录
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogDrawerWrapper = ({ post, cRef }) => {
  const { tocVisible, changeTocVisible } = useGitBookGlobal()
  const { locale } = useGlobal()
  const router = useRouter()
  const switchVisible = () => {
    changeTocVisible(!tocVisible)
  }
  useEffect(() => {
    changeTocVisible(false)
  }, [router])
  return (
    <>
      <div
        id='gitbook-toc-float'
        className='fixed top-0 right-0 z-40 md:hidden'>
        {/* 侧边菜单 */}
        <div
          className={
            (tocVisible
              ? 'animate__slideInRight '
              : ' -mr-72 animate__slideOutRight') +
            ' overflow-y-hidden shadow-card w-60 duration-200 fixed right-1 bottom-16 rounded-lg py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600'
          }>
          {post && (
            <>
              <div className='px-4 pb-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-600 font-bold text-gray-800 dark:text-gray-200'>
                <span className='text-sm'>{locale.COMMON.TABLE_OF_CONTENTS}</span>
                <i
                  className='fas fa-times p-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200'
                  onClick={() => {
                    changeTocVisible(false)
                  }}></i>
              </div>
              <div className='dark:text-gray-300 text-gray-600 px-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600'>
                <Catalog post={post} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* 背景蒙版 */}
      <div
        id='right-drawer-background'
        className={
          (tocVisible ? 'block' : 'hidden') +
          ' fixed top-0 left-0 z-30 w-full h-full'
        }
        onClick={switchVisible}
      />
    </>
  )
}
export default CatalogDrawerWrapper
