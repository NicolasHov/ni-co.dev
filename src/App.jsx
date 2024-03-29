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
          <div
            onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
            style={{ cursor: "pointer", marginLeft: '10px' }}
          >
            ☀️
          </div >
          <div
            onClick={() => setSize(size == 'big' ? 'normal' : 'big')}
            style={{ cursor: "pointer", marginLeft: '10px' }}
          >
            A+
          </div >
        </div>
      </SizeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
