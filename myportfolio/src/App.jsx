import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App
