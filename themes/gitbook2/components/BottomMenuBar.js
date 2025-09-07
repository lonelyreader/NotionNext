import { useGlobal } from '@/lib/global'
import { useGitBookGlobal } from '..'

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
    <div className='md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-gradient-to-r from-blue-500/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90 backdrop-blur-md border-t border-blue-400/30 dark:border-purple-400/30 bottom-button-group'>
      <div
        className={`grid h-full max-w-lg  mx-auto font-medium ${showTocButton && 'grid-cols-2'}`}>
        <button
          type='button'
          onClick={togglePageNavVisible}
          className='inline-flex flex-col items-center justify-center px-5 border-blue-400/30 border-x hover:bg-blue-500/20 dark:hover:bg-purple-500/20 group dark:border-purple-400/30 transition-all duration-300'>
          <i className='fa-book fas w-5 h-5 mb-2 text-white group-hover:text-blue-200' />
          <span className='text-sm text-white group-hover:text-blue-200'>
            {locale.COMMON.ARTICLE_LIST}
          </span>
        </button>

        {showTocButton && (
          <button
            type='button'
            onClick={toggleToc}
            className='inline-flex flex-col items-center justify-center px-5 border-blue-400/30 border-x hover:bg-blue-500/20 dark:hover:bg-purple-500/20 group dark:border-purple-400/30 transition-all duration-300'>
            <i className='fa-list-ol fas w-5 h-5 mb-2 text-white group-hover:text-blue-200' />
            <span className='text-sm text-white group-hover:text-blue-200'>
              {locale.COMMON.TABLE_OF_CONTENTS}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
