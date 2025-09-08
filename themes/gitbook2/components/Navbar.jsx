import { useEffect, useState } from 'react'

export default function Navbar({ leftSlot, rightSlot }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md
                  bg-white/70 dark:bg-gray-900/60
                  border-b border-gray-200 dark:border-gray-700
                  ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-2 flex items-center justify-between">
        <div className="min-w-0">{leftSlot}</div>
        <div className="flex-1" />
        <nav className="flex items-center gap-2">{rightSlot}</nav>
      </div>
    </header>
  )
}
