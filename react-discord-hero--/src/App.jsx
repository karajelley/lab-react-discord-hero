import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <nav>
          <img id='logo' src= "src/assets/discord-logo-white.png" alt="Discord Logo" />
          <img id='menu' src="src/assets/menu-icon.png" alt="Menu Icon" />
        </nav>
        <div className='content'>
          <div className='text-content'>
            <h2>IMAGINE A PLACE...</h2>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more ofte.</p>
          </div>
          <div className='buttons'>
            <button id='mac'>Download for Mac</button>
            <button id='browser'>Open Discord in your browser</button>
          </div>
        </div>
      </div>
      <img id='bg' src="src/assets/discord-background.png" alt="Cartoon animals spending time together" />
    </>
  )
}

export default App
