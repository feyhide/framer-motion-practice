import React from 'react'
import Container from '../Container'
import { Fadein } from '../Fadein'

function Usp() {
  return (
    <>
        <div>
            <Container className="relative z-10 top-[0px] flex flex-col justify-end pb-[100px] h-[1200px] text-4xl font-bold space-y-12 text-white"> 
                <Fadein>
                    <p>New Apple Originals every month — always ad‑free.</p>
                </Fadein>
                <Fadein>
                    <p>Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
                </Fadein>
                <Fadein>    
                    <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
                </Fadein>
                <Fadein>  
                    <p>Share a single subscription with up to five people.</p>
                </Fadein>
                <Fadein>
                    <div className='flex justify-around space-x-5 items-center'>
                        <div className='w-[300px] h-[300px] bg-red-900'></div>
                        <div className='w-[300px] h-[300px] bg-red-900'></div>
                        <div className='w-[300px] h-[300px] bg-red-900'></div>
                    </div>
                </Fadein>
            </Container>
        </div>
        
    </>
  )
}

export default Usp