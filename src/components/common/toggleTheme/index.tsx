'use client'
import { useTheme } from 'next-themes'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <button type="button" onClick={handleChangeTheme}>
      Toggle Theme
    </button>
  )
}
