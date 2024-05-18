import React from 'react'
import Card from './Card.jsx'
import '../Event.css'
export default function Ecards({edata}) {
    console.log(edata);
    return (
    <div className='h-1000 w-full flex flex-col justify-center items-center gap-4'>
       {
        edata.map((edesc,index)=>{
            return <Card key={index} {...edesc}></Card>
        })
       }
    </div>
  )
}
