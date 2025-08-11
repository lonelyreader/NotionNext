
import { useState } from 'react'

export const useDocsSearch = () => {
  const [searchModal, setSearchModal] = useState(false)
  const [filteredNavPages, setFilteredNavPages] = useState([])
  const [allNavPages, setAllNavPages] = useState([])
  const [pageNavVisible, setPageNavVisible] = useState(true)
  
  const changePageNavVisible = (visible) => {
    setPageNavVisible(visible)
  }

  return {
    searchModal,
    setSearchModal,
    filteredNavPages,
    setFilteredNavPages,
    allNavPages,
    setAllNavPages,
    pageNavVisible,
    changePageNavVisible
  }
}

export const useFilteredNavPages = (allNavPages) => {
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages || [])
  
  return [filteredNavPages, setFilteredNavPages]
}
