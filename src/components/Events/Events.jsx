import React from 'react'
import data from './data'
import { useState } from 'react'
import './Event.css'
import Ecards from './components/Ecards';
function Events() {

  const[edata,setData]=useState(data);
  return (
    <div className='h-auto flex flex-col justify-center items-center mt-16 mb-8 gap-3'>
      <div className='flex h-25 justify-center items-center'> 
         <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">OUR EVENTS</h1>
      </div>
      <Ecards edata={edata}></Ecards>

    </div>
    
  )
}

export default Events