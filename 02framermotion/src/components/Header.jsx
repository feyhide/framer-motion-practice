import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

const variants = {
    buttonopen:{
        right: "25px",
        top: "25px",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3}
    },
    buttonclosed:{
        right: "0px",
        top: "0px",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3}
    },
    slideropen:{
        top: "-100%",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3}
    },
    sliderclosed:{
        top: "0%",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3}
    },
    open: {
        width: "500px",
        height: "400px",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3}
    
    },
    closed:{
        width: "80px",
        height: "35px",
        transition:{ease:[0.87, 0, 0.13, 1],duration:0.3,delay:0.3}
    
    }
}

const prespective = {
    initial:{
        rotateX:160,
        rotateY:160,
        opacity:0,
    },
    enter:(index)=> ({
        rotateX:0,
        rotateY:0,
        opacity:1,
        transition:{ duration:0.4,delay:0.1*(index+0.1)}
    }),
    exit:(index)=> ({
        
        rotateX:60,
        rotateY:30,
        opacity:0,
        transition:{delay:0.1*(index+0.1)}
    }),
}

function Header() {
    const [active,setactive]=useState(false);

    return (
    <div className='fixed flex bg-black w-full h-1/2'>
        <motion.div variants={variants} initial="closed" transition="transition" animate={active ? "open" : "closed"} className='rounded-xl absolute w-[80vw] h-[80vw] md:w-[500px] md:h-[300px] bg-slate-800 top-[6vw] right-[10vw]'>
            <div className='absolute right-0'>
                <motion.div variants={variants} transition="transition" animate={active? "buttonopen":"buttonclosed"} onClick={()=>{setactive(!active)}} className='relative font-anton uppercase overflow-hidden w-[80px] h-[35px] rounded-xl cursor-pointer'>
                    <motion.div 
                    variants={variants}
                    transition="transition"
                    animate={active ? "slideropen": "sliderclosed"}
                    className='slider relative w-full h-full'>
                        <div className='w-full h-full flex justify-center items-center bg-black text-white'>
                            <PerspectivePARA label="MENU"/>
                        </div>
                        <div className='absolute top-[100%]  w-full h-full flex justify-center items-center bg-white text-black'>
                            <PerspectivePARA label="CLOSE"/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>


            <AnimatePresence>
                {active && <div className='h-full font-light tracking-wide text-3xl p-20 text-white'>
                    <div className=''>
                        {["Home", "Projects", "Skills"].map((item, index) => (
                        <motion.h1 custom={index} initial="initial" animate="enter" exit="exit" variants={prespective} className='mb-1 perspective-400' key={index}>{item}</motion.h1>
                        ))}
                    </div>
                </div>}
            </AnimatePresence>

        </motion.div>
    </div>
  )
}

function PerspectivePARA({label}){
    return(
        <div className='w-full h-full flex justify-center items-center'>
            <p>{label}</p>
            <p className='absolute transition-all hover:-translate-y-1'>{label}</p>
        </div>
    )

}

export default Header