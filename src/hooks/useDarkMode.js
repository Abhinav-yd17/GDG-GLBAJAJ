import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Set dark mode by default as per requirements
    setIsDark(true)
    document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return [isDark, toggleDarkMode]
}