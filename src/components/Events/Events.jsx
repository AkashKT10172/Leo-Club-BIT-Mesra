import React from 'react'
import data from './data'
import { useState,useRef,useEffect } from 'react'
import './Event.css'
import Ecards from './components/Ecards';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

function Events() {

  useEffect(()=>{
    gsap.from(".eheading",{
      y:-100,
      opacity:0,
      duration:1,
      ease:"power2.out",
      touchAction:"play none none none",
    })
  });

  const[edata,setData]=useState(data);
  return (
    <div className='h-auto flex flex-col overflow-x-hidden justify-center items-center my-16 mb-8 gap-3'>
      <div className='flex h-25 justify-center items-center eheading'> 
         <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text my-4 p-1 text-center">OUR EVENTS</h1>
      </div>
      <Ecards edata={edata}></Ecards>

    </div>
    
  )
}

export default Events