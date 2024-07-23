import { useEffect, useRef, useState } from 'react'
import './App.css'
import {motion, useAnimate, useInView,useTransform, useScroll, useAnimation} from "framer-motion"

const gridmotion = {
    hidden: {opacity: 0},
    show: { opacity:1,
            transition:{
            staggerChildren: 0.25,
            },
  }
}

const boxmotion = {
  hidden:{opacity:0},
  show:{opacity:1}
}

function App() {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)
  const {scrollYProgress: completionProgress} = useScroll()
  const {scrollYProgress2: completionProgress2} = useScroll()
  
  const isInView = useInView(containerRef)
  const mainControls = useAnimation()
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end","end end"],
  })
  
  const {scrollYProgress2} = useScroll({
    target: containerRef,
    offset: ["end end","start end"],
  })
  const headingvalue = useTransform(
    scrollYProgress,
    [0,1],
    ["0%","100%"]
  )
  
  const bgvalue = useTransform(
    scrollYProgress,
    [0,1],
    ["0%","100%"]
  )

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0,1],
    ["-100%","0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0,1],
    ["100%","0%"]
  )
  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }
  },[isInView])
  return (
    <>
     <div className='flex flex-col gap-10 overflow-x-hidden'>
      <motion.div variants={gridmotion} initial="hidden" animate="show" className='grid grid-cols-3 p-10 gap-10'>
        {/* fade up down */}
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
          <motion.div className='w-20 h-20 bg-stone-100 rounded-lg' initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeOut",delay:1}} ></motion.div>
          <motion.div className='w-20 h-20 bg-stone-100 rounded-full' initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeOut",delay:1}} ></motion.div>
        </motion.div>
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
          <motion.div className='w-20 h-20 bg-stone-100 rounded-lg' animate={{border:[2,2,2,0],scale:[1,2,2,1],rotate:[0,90,90,0],borderRadius:["10%","50%","50%","10%"]}} transition={{duration:2,ease:"easeInOut",delay:1,repeat:Infinity}} ></motion.div>
        </motion.div>
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex flex-col items-center'>
          <div className='flex justify-center'>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
          </div>
          <div className='flex justify-center'>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
          </div>
          <div className='flex justify-center'>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
          </div>
          <div className='flex justify-center'>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
          </div>
          <div className='flex justify-center'>
            <motion.div className='w-8 h-8 bg-stone-100 hexagon cursor-grab ' drag dragConstraints={{top:0,right:0,left:0,bottom:0}}></motion.div>
          </div>
        </motion.div>
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
          <motion.button whileTap={{ scale:0.9 }} whileHover={{scale:1.1,backgroundColor:"lightgreen",color:"green"}} transition={{bounceDamping:10,bounceStiffness:500}}   className='bg-emerald-600 w-1/2 py-4 rounded-lg text-xl text-gray-50 font-light tracking-wider'>
            subscribe
          </motion.button>
        </motion.div>
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
          <motion.div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
            <motion.div className='w-full bg-gray-400 rounded-xl h-full origin-top' style={{scaleY: completionProgress }}></motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={boxmotion} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
      </motion.div>
      
      
      <div ref={containerRef} className='flex justify-center relative flex-col gap-10 mb-10 '>
        <motion.div style={{opacity: bgvalue}} className='flex justify-center flex-col h-screen bg-white'>
          <motion.h1 style={{opacity: headingvalue}} className='text-5xl tracking-wide text-black text-center'>
            Keep scrolling
          </motion.h1>
          <motion.p style={{translateX: paragraphOneValue}} className='text-black font-thin text-4xl mx-auto'>
            my name is
          </motion.p>
          <motion.p style={{translateX: paragraphTwoValue}} className='text-black font-thin text-4xl mx-auto'>
            f1hadish
          </motion.p>
          <motion.p style={{translateX: paragraphTwoValue}} className='text-black absolute bottom-0 font-bold text-9xl mx-auto'>
            HELLOHELLOHELLOHELLOHELLOHELLO
          </motion.p>
        </motion.div>        
      </div>

      <div className='w-screen h-screen bg-white'>
      </div>

      
     </div>
    </>
  )
}

export default App
