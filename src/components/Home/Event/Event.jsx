import React from 'react'
import { NavLink } from 'react-router-dom'
import image from './leoEvent.png'
import './Event.css'
import { handleClick } from '../../onClick'

function Event() {
  return (
    <>
    <div className='event-main-div px-1 py-1'>
    <div className='headingEvent flex justify-center items-center rounded-t-2xl'>
     <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text ">OUR EVENTS</h1>
    </div>
    <div className ="event-main rounded-b-2xl">
    <div className="event-info  ">
        <h1 className="text-3xl text-gray-700 font-black text-center">ORPHANAGE VISIT</h1>
        <p className="px-10 py-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus eligendi enim, cum minus reiciendis hic aliquid dolorem, qui repudiandae aspernatur
        vero voluptas, facilis repellendus nesciunt commodi molestiae delectus quam possimus?Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Explicabo nihil quisquam, dolores eos minima optio
        delectus!
        </p>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <NavLink to="/events" onClick={handleClick}>See all events!</NavLink>
        </button>
    </div>   
    <div className="event-image">
        <img src={image} alt="ok"/>
    </div> 
    </div>
    </div>
    </>
  )
}

export default Event