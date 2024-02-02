import reactLogo from './assets/images/react.svg'
import './App.css'
import { ResumeReminder } from './components/ResumeReminder/ResumeReminder'

const App = () => {
  return (
    <>
      <ResumeReminder />
      <header>
        {/* <a href="https://react.dev" target="_blank">
          <div className='logo'>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>

        </a> */}
      </header>
      {/* <footer>
        <button onClick={() => console.log('contact')}>
          contact
        </button>
        <p>
          From <code>src/App.jsx</code> to your business
        </p>
      </footer> */}
    </>
  )
}

export default App
