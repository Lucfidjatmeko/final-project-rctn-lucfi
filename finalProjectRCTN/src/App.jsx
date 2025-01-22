import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HomePage from './pages/HomePage'
import {Routes, Route} from "react-router-dom"
import NavbarComponent from './ComponenPages/NavBarComponent'
import DetailPage from './pages/DetailPage'
 
function App() {
  // const [count, setCount] = useState(0)
 
  return (
    <>
    {/* <HomePage/> */}
 
<NavbarComponent/>
 
    <Routes>
       <Route path ='/' element={<HomePage/>} />
       <Route path ='/detail/:id' element={<DetailPage/>} />
    </Routes>
   
    </>
  )
}
 
export default App