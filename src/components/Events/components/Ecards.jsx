import React from 'react'
import Card from './Card.jsx'
import '../Event.css'
export default function Ecards({edata}) {
    console.log(edata);
    return (
    <div className='flex flex-wrap justify-evenly w-11/12 gap-4'>
       {
        edata.map((edesc,index)=>{
            return <Card key={index} {...edesc}></Card>
        })
       }
    </div>
  )
}
