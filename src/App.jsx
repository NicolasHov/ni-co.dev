import React, { useState } from "react"
import reactLogo from './assets/images/react.svg'
import './App.css'
import "./Typography.css"
import { ResumeReminder } from './components/ResumeReminder/ResumeReminder'
import { ThemeContext, SizeContext } from './contexts.js';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [size, setSize] = useState('normal');
  return (
    < ThemeContext.Provider value={theme}>
      < SizeContext.Provider value={size}>
        <ResumeReminder />
        <div className="icons">
          <div className="switcher theme-switcher"
            onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          >
            ☀️
          </div >
          <div className="switcher size-switcher"
            onClick={() => setSize(size == 'big' ? 'normal' : 'big')}
          >
            <span style={{ fontSize: "8px" }}>A</span>
            <span style={{ fontSize: "12px" }}>A</span>
          </div >
        </div>
      </SizeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
