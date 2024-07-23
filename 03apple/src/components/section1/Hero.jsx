import React, { useRef } from 'react'
import Container from '../Container'
import { useScroll, useTransform, motion } from 'framer-motion'
 

function Hero() {
  const videocontainerref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: videocontainerref,
    offset: ['start start','end end']
  })

  const opacity = useTransform(scrollYProgress,[0,0.7,0.9,1],[1,0.6,0.2,0])
  
  return (
    <div className='bg-blackbg relative  text-white '>
        <motion.div ref={videocontainerref} style={{opacity}} className="absolute left-0 -top-32 w-full h-[200vh]">
          <img className='sticky top-0 h-screen object-cover' src='https://images.unsplash.com/photo-1605811784653-ee4e230bd981?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </motion.div>
        <Container className=' relative items-start  z-10 h-[80svh]'>
            <motion.div 
              className='flex flex-col justify-end h-full'
              variants={{
                hidden: {opacity:0,y:20},
                visible: {opacity:1,y:0},
              }}
                whileInView='visible'
                exit='hidden'
                animate="hidden"
                viewport={{amount:0.9}}
              >
              <h1 className='text-4xl md:text-6xl md:mb-16 font-bold mb-10'>All Apple Originals.<br/>
              Only on Apple TV+</h1>
              <button className="rounded-full font-semibold uppercase mb-10 md:mb-24 bg-white text-blackbg size-lg w-40 px-5 py-3">stream now</button>
              <p className='text-xl'>Watch on the TV+ app</p>
            </motion.div>
        </Container>
    </div>
  )
}

export default Hero