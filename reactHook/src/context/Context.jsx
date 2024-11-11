import React, { createContext, useState } from 'react'
import FunctionalContext from './FunctionalContext'

export const ThemeContext = createContext()

function Context() {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


  return (
    <div>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionalContext/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Context