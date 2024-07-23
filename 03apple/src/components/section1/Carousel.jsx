import React, { useMemo, useRef, useState } from 'react'
import Container from '../Container'
import { movies, randomMoviesSet1, randomMoviesSet2 } from '../Movies'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import {useWindowSize} from 'react-use'

function Carousel() {
    const {width,height} = useWindowSize()
    const maximumscale = useMemo(()=>{
        const windowYratio = height/width;
        const xscale = 1.6666;
        const yscale = xscale * (16/9) *windowYratio;
        return Math.max(xscale,yscale);
    },[width,height])

    const carouselwrapperref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: carouselwrapperref,
        offset: ["start start","end start"],
    })

    const scale = useTransform(scrollYProgress,[0.3,0.5,0.66],[maximumscale*1.5,maximumscale,1])
    const posteropacity = useTransform(scrollYProgress,[0.64,0.66],[0,1])
    const posterxleft = useTransform(scrollYProgress,[0.64,0.66],[-40,0])
    const posterxright = useTransform(scrollYProgress,[0.64,0.66],[40,0])
    
    const [carouselvar,setcarouselvar] = useState("inactive");

    useMotionValueEvent(scrollYProgress,"change",(progress)=>{
        if(progress>=0.67){
            setcarouselvar("active");
        }else{
            setcarouselvar("inactive");
        }
    })

    const [movecarousel,setmovecarousel] = useState("2");

    return (
    <motion.div animate={carouselvar} className=' bg-blackbg h-[350vh]'>

        <div ref={carouselwrapperref} className=' overflow-clip mt-[-100vh] h-[300vh] '>
            <div className=' sticky top-0 h-screen flex items-center'>
                <div className='flex gap-5 relative left-1/2 mb-[20px] -translate-x-1/2'>
                    <motion.div style={{opacity: posteropacity,x: posterxleft}} className='w-[45vw]  shrink-0 '>
                        <img className='h-full w-full object-cover rounded-xl' src={movies[0].poster} alt={movies[1].name} />
                    </motion.div>
                    <motion.div style={{scale}}  className='w-[45vw]  shrink-0 '>
                        <img className=' h-full w-full object-cover rounded-xl' src={movies[1].poster} alt={movies[1].name} />
                    </motion.div>
                    <motion.div style={{opacity: posteropacity, x: posterxright}} className='w-[45vw]  shrink-0 '>
                        <img className='h-full w-full object-cover rounded-xl' src={movies[2].poster} alt={movies[2].name} />
                    </motion.div>
                </div>
                    <motion.button variants={{active: {opacity: 1, y:0},inactive: {opacity:0,y:20}}}
                    className="absolute bottom-[300px] bg-white w-[120px] rounded-full h-[40px] text-2xl font-bold left-[590px] text-black">hello</motion.button>
            </div>
        </div>
        
        <motion.div 
        transition={{duration:0.4}}
        variants={{
            active: {opacity: 1, y:0},
            inactive: {opacity:0,y:20}
        }} className='mt-[-200px] overflow-clip '>
            <div className='flex gap-3  mb-5'>
                {randomMoviesSet1.map((movie,index) => {
                    return <div className='w-[23vw] h-[12vw]  shrink-0 '>
                            <img  className='h-full w-full object-cover rounded-xl'  src={movie.poster} alt={movie.name} key={`${movie.name}-${index}`}/>
                            </div>
                })}
            </div>
            <div className='flex gap-3 '>
                {randomMoviesSet2.map((movie,index) => {
                    return <div className='w-[23vw] h-[12vw] shrink-0 object-cover rounded-xl'>
                            <img className='h-full w-full object-cover rounded-3xl' src={movie.poster} alt={movie.name} key={`${movie.name}-${index}`}/>
                            </div>
                })}
            </div>
        </motion.div >
    </motion.div>
  )
}

export default Carousel;

