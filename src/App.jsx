import React, { useState } from "react"
import reactLogo from './assets/images/react.svg'
import './App.css'
import "./Typography.css"
import { ResumeReminder } from './components/ResumeReminder/ResumeReminder'
import { ThemeContext } from './contexts.js';

const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    < ThemeContext.Provider value={theme}>
      <ResumeReminder />
      <div
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        style={{ cursor: "pointer" }}
      >
        ☀️
      </div >
    </ThemeContext.Provider>
  )
}

export default App
