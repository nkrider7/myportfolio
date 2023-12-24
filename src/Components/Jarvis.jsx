import React from 'react'
import ironman from '../assets/ironman.png'



export default function Jarvis() {
  return (
    <>
    <div className='sticky'>
        <div className="h-80 flex justify-center pt-6 bg-hero-pattern w-full">
      
     <div>
     <p className="md:text-6xl md:pt-4 text-6xl drop-shadow-4xl font-bold text-white  absolute "> में हूँ</p>
    
     </div>
     <p className="md:text-9xl md:pt-20 text-6xl pt-24 drop-shadow-4xl font-bold text-white  absolute ">IRON  MAN</p>
                
                <img src={ironman} className='z-10  ' alt="" />
                <span className='border-dashed  border-4 border-white hover:shadow-3xl shadow-sky h-8 w-8 rounded-full animate-spin z-20 top-64 absolute'>
                </span>
        </div>
    </div>
    </>

  )
}