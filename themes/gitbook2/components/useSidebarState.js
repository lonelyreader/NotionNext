import { useEffect, useState } from 'react'

export default function useSidebarState() {
  const [ready, setReady] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    try {
      const c = localStorage.getItem('gb2:sidebar:collapsed')
      const p = localStorage.getItem('gb2:sidebar:pinned')
      if (c !== null) setCollapsed(c === '1')
      if (p !== null) setPinned(p === '1')
    } finally { 
      setReady(true) 
    }
  }, [])

  useEffect(() => { 
    if (ready) localStorage.setItem('gb2:sidebar:collapsed', collapsed ? '1' : '0') 
  }, [collapsed, ready])

  useEffect(() => { 
    if (ready) localStorage.setItem('gb2:sidebar:pinned', pinned ? '1' : '0') 
  }, [pinned, ready])

  return { ready, collapsed, setCollapsed, pinned, setPinned }
}
