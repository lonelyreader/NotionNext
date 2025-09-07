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
    <div className={`${className} relative`}>
      <div
        className='absolute left-0 ml-4 items-center justify-center py-2'
        onClick={handleSearch}>
        <i
          className={
            'hover:text-white transform duration-200 text-gray-400 cursor-pointer fas fa-search'
          }
        />
      </div>
      <input
        ref={searchInputRef}
        type='text'
        className={`rounded border border-gray-600 pl-12 leading-10 placeholder-gray-400 outline-none w-full transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white bg-gray-800`}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        placeholder='Search'
        onCompositionStart={lockSearchInput}
        onCompositionUpdate={lockSearchInput}
        onCompositionEnd={unLockSearchInput}
        onChange={e => updateSearchKey(e.target.value)}
        defaultValue={currentSearch}
      />
      <div
        className='absolute right-0 mr-4 items-center justify-center py-2 text-gray-400'
        onClick={handleSearch}>
        Ctrl+K
      </div>

      {showClean && (
        <div className='-ml-12 cursor-pointer flex float-right items-center justify-center py-2'>
          <i
            className='fas fa-times hover:text-white transform duration-200 text-gray-400 cursor-pointer'
            onClick={cleanSearch}
          />
        </div>
      )}
    </div>
  )
}

export default SearchInput
