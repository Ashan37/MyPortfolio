import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
