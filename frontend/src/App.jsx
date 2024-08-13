import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 flex items-center justify-center h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
