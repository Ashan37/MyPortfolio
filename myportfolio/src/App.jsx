import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Works from './components/Works'


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </>
  )
}

export default App
