import React, { useState, createContext } from "react";

export const ThemeContext = createContext('dark');

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');  
}
  return (
    <ThemeContext.Provider value={{theme, handleToggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}