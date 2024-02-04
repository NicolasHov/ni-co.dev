import reactLogo from './assets/images/react.svg'
import './App.css'
import "./Typography.css"
import { ResumeReminder } from './components/ResumeReminder/ResumeReminder'

const App = () => {
  return (
    <>
      <ResumeReminder />
      {/* <header>
        <a href="https://react.dev" target="_blank">
          <div className='logo'>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>

        </a>
      </header> */}
    </>
  )
}

export default App
