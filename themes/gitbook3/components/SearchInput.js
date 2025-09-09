import { siteConfig } from '@/lib/config'
import { deepClone } from '@/lib/utils'
import { useGitBookGlobal } from '@/themes/gitbook3'
import { useImperativeHandle, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
let lock = false

/**
 * 搜索栏
 */
const SearchInput = ({ currentSearch, cRef, className }) => {
  const searchInputRef = useRef()
  const { searchModal, setFilteredNavPages, allNavPages } = useGitBookGlobal()

  useImperativeHandle(cRef, () => {
    return {
      focus: () => {
        searchInputRef?.current?.focus()
      }
    }
  })

  /**
   * 快捷键设置
   */
  useHotkeys('ctrl+k', e => {
    searchInputRef?.current?.focus()
    e.preventDefault()
    handleSearch()
  })

  const handleSearch = () => {
    // 使用Algolia
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal?.current?.openSearch()
    }
    let keyword = searchInputRef.current.value
    if (keyword) {
      keyword = keyword.trim()
    } else {
      setFilteredNavPages(allNavPages)
      return
    }
    const filterAllNavPages = deepClone(allNavPages)

    for (let i = filterAllNavPages.length - 1; i >= 0; i--) {
      const post = filterAllNavPages[i]
      const articleInfo = post.title + ''
      const hit = articleInfo.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      if (!hit) {
        // 删除
        filterAllNavPages.splice(i, 1)
      }
    }

    // 更新完
    setFilteredNavPages(filterAllNavPages)
  }

  /**
   * 回车键
   * @param {*} e
   */
  const handleKeyUp = e => {
    // 使用Algolia
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal?.current?.openSearch()
      return
    }

    if (e.keyCode === 13) {
      // 回车
      handleSearch(searchInputRef.current.value)
    } else if (e.keyCode === 27) {
      // ESC
      cleanSearch()
    }
  }

  const handleFocus = () => {
    // 使用Algolia
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal?.current?.openSearch()
    }
  }

  /**
   * 清理搜索
   */
  const cleanSearch = () => {
    searchInputRef.current.value = ''
    handleSearch()
    setShowClean(false)
  }

  const [showClean, setShowClean] = useState(false)
  const updateSearchKey = val => {
    if (lock) {
      return
    }
    searchInputRef.current.value = val
    if (val) {
      setShowClean(true)
    } else {
      setShowClean(false)
    }
  }

  function lockSearchInput() {
    lock = true
  }

  function unLockSearchInput() {
    lock = false
  }

  return (
    <div className={`${className} relative flex items-center`}>
      <div className='relative flex-1'>
        <div
          className='absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center'
          onClick={handleSearch}>
          <i
            className={
              'fas fa-search text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-200'
            }
          />
        </div>
        <input
          ref={searchInputRef}
          type='text'
          className={`rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-20 h-10 placeholder-gray-400 dark:placeholder-gray-500 outline-none w-full transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 text-sm`}
          onFocus={handleFocus}
          onKeyUp={handleKeyUp}
          placeholder='Search documentation...'
          onCompositionStart={lockSearchInput}
          onCompositionUpdate={lockSearchInput}
          onCompositionEnd={unLockSearchInput}
          onChange={e => updateSearchKey(e.target.value)}
          defaultValue={currentSearch}
        />
        <div
          className='absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs cursor-pointer'
          onClick={handleSearch}>
          ⌘K
        </div>

        {showClean && (
          <div className='absolute right-12 top-1/2 transform -translate-y-1/2 flex items-center justify-center'>
            <i
              className='fas fa-times text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer text-sm transition-colors duration-200'
              onClick={cleanSearch}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchInput
