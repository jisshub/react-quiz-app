import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="App">
      <h1>Welcome to Quiz App</h1>
    </div>
  )
}

export default App
