import React from 'react'
import Home from './Home'
import '../app.css'
import {Routes, Route} from 'react-router-dom'
import About from './About'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}
