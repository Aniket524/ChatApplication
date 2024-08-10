import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 flex items-center justify-center h-screen'>
        <Home />
    </div>
  )
}

export default App
