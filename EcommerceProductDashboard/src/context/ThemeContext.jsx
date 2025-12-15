import { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // TODO: Your logic here
  // 1. Create state for theme (light/dark)
  // 2. Get initial theme from localStorage or default to 'light'
  // 3. Create toggleTheme function
  // 4. Save theme to localStorage when it changes
  // 5. Return ThemeContext.Provider with value={{ theme, toggleTheme }}

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    // TODO: Your logic to toggle between light and dark
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
