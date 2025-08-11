
import { useState, useRef } from 'react'

export const useDocsSearch = () => {
  const [allNavPages, setAllNavPages] = useState([])
  const [pageNavVisible, setPageNavVisible] = useState(true)
  const searchModal = useRef(null)
  
  const changePageNavVisible = (visible) => {
    setPageNavVisible(visible)
  }

  return {
    searchModal,
    allNavPages,
    setAllNavPages,
    pageNavVisible,
    changePageNavVisible
  }
}
