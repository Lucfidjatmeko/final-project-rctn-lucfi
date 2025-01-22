import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detail/:id' element={<DetailPage/>} />
 
      </Routes>
    </>
  )
}
 
export default App