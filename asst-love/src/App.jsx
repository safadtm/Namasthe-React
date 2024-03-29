import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="github.com/safadtm" target="_blank">
          <img src="../src/assets/heart.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Asst.Love + ? {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          one click = one love
        </button>
      </div>
    </>
  )
}

export default App
