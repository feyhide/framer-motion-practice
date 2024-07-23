import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Hero from './components/section1/Hero'
import Usp from './components/section1/Usp'
import Carousel from './components/section1/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className='relative z-10 bg-blackbg '>
          <Hero/>
          <Usp/>
        </div>
        <Carousel/>
        <div className='bg-white h-[600px]'>

        </div>
      </main>
    </>
  )
}

export default App
