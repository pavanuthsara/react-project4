import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './UserGreeting'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
    </>
  )
}

export default App 
