import { useEffect, useState } from 'react'

// The theme class is set on <html> by an inline script before React loads,
// so the server render stays theme-neutral and the icon syncs after mount.
export function useTheme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // not critical
    }
    setDark(next)
  }

  return { dark, toggle }
}
