import React, {Suspense, lazy} from 'react'
const Home= React.lazy(()=>import('./Home'))
const About= React.lazy(()=>import('./About'))
import '../app.css'
import {Routes, Route} from 'react-router-dom'
export default function App() {
  console.log(Home)
  return (
    <div>
      hello world
      <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
      </Routes>
    </div>
  )
}
