
import { useState, useRef } from 'react'

export const useDocsSearch = () => {
  const [filteredNavPages, setFilteredNavPages] = useState([])
  const [allNavPages, setAllNavPages] = useState([])
  const [pageNavVisible, setPageNavVisible] = useState(true)
  const searchModal = useRef(null)
  
  const changePageNavVisible = (visible) => {
    setPageNavVisible(visible)
  }

  return {
    searchModal,
    filteredNavPages,
    setFilteredNavPages,
    allNavPages,
    setAllNavPages,
    pageNavVisible,
    changePageNavVisible
  }
}
