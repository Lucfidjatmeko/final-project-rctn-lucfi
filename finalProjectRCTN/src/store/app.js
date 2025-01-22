import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HomePage from './Pages/HomePage'
import {Routes, Route} from "react-router-dom"
import NavbarComponent from './ComponenPages/NavBarComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <HomePage/> */}

<NavbarComponent/>

    <Routes>
       <Route path ='/' element={<HomePage/>} />
    </Routes>
    
    </>
  )
}


export default App