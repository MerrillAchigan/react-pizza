import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Types from './components/Types'
import Footer from './components/Footer'
// import { Navbar } from '@material-tailwind/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Types />
      <Footer />
    </>
  )
}

export default App
