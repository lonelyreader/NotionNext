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
    <div className='md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-800 border-t border-gray-600 bottom-button-group'>
      <div
        className={`grid h-full max-w-lg  mx-auto font-medium ${showTocButton && 'grid-cols-2'}`}>
        <button
          type='button'
          onClick={togglePageNavVisible}
          className='inline-flex flex-col items-center justify-center px-5 border-gray-600 border-x hover:bg-gray-700 group transition-colors duration-200'>
          <i className='fa-book fas w-5 h-5 mb-2 text-gray-300 group-hover:text-white' />
          <span className='text-sm text-gray-300 group-hover:text-white'>
            {locale.COMMON.ARTICLE_LIST}
          </span>
        </button>

        {showTocButton && (
          <button
            type='button'
            onClick={toggleToc}
            className='inline-flex flex-col items-center justify-center px-5 border-gray-600 border-x hover:bg-gray-700 group transition-colors duration-200'>
            <i className='fa-list-ol fas w-5 h-5 mb-2 text-gray-300 group-hover:text-white' />
            <span className='text-sm text-gray-300 group-hover:text-white'>
              {locale.COMMON.TABLE_OF_CONTENTS}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
