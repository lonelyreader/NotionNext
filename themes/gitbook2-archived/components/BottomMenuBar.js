import { useGlobal } from '@/lib/global'
import { useGitBookGlobal } from '../index'

/**
 * 移动端底部导航
 * @param {*} param0
 * @returns
 */
export default function BottomMenuBar({ post, className }) {
  const showTocButton = post?.toc?.length > 1
  const { locale } = useGlobal()
  const { pageNavVisible, changePageNavVisible, tocVisible, changeTocVisible } =
    useGitBookGlobal()
  const togglePageNavVisible = () => {
    changePageNavVisible(!pageNavVisible)
  }

  const toggleToc = () => {
    changeTocVisible(!tocVisible)
  }

  return (
    <div className='md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600 shadow-lg'>
      <div
        className={`grid h-full max-w-lg mx-auto font-medium ${showTocButton ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <button
          type='button'
          onClick={togglePageNavVisible}
          className='inline-flex flex-col items-center justify-center px-3 sm:px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-700 group dark:border-gray-600 transition-colors duration-200'>
          <i className='fa-book fas w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300' />
          <span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'>
            {locale.COMMON.ARTICLE_LIST}
          </span>
        </button>

        {showTocButton && (
          <button
            type='button'
            onClick={toggleToc}
            className='inline-flex flex-col items-center justify-center px-3 sm:px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-700 group dark:border-gray-600 transition-colors duration-200'>
            <i className='fa-list-ol fas w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300' />
            <span className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'>
              {locale.COMMON.TABLE_OF_CONTENTS}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
