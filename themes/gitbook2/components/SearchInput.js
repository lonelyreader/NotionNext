import { siteConfig } from '@/lib/config'
import { deepClone } from '@/lib/utils'
import { useGitBookGlobal } from '@/themes/gitbook2'
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
    <div className={`${className} relative search-container flex items-center`}>
      <div
        className='absolute left-0 ml-3 flex items-center justify-center'
        onClick={handleSearch}
        style={{ height: '100%', top: '50%', transform: 'translateY(-50%)' }}>
        <i
          className='fas fa-search text-gray-400 dark:text-gray-500'
          aria-hidden='true'
        />
      </div>
      <input
        ref={searchInputRef}
        type='text'
        className='search-input pl-10 pr-20 w-full'
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        placeholder='Search'
        onCompositionStart={lockSearchInput}
        onCompositionUpdate={lockSearchInput}
        onCompositionEnd={unLockSearchInput}
        onChange={e => updateSearchKey(e.target.value)}
        defaultValue={currentSearch}
        aria-label='Search'
        style={{ height: '36px', lineHeight: '36px' }}
      />
      <div
        className='search-shortcut absolute right-0 mr-3 flex items-center justify-center pointer-events-none'
        aria-hidden='true'
        style={{ height: '100%', top: '50%', transform: 'translateY(-50%)' }}>
        Ctrl+K
      </div>

      {showClean && (
        <div className='absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer'>
          <i
            className='fas fa-times text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
            onClick={cleanSearch}
            aria-label='Clear search'
          />
        </div>
      )}
    </div>
  )
}

export default SearchInput
