import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {authUser} = useAuthContext()

  return (
    <div className='p-4 flex items-center justify-center h-screen'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/'/> :<Signup/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
