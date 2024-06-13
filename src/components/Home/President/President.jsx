import React from 'react'
import { NavLink } from 'react-router-dom'
import image from './akash.jpg'
import './President.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'

function President() {
  return (
    <>
    <div className='presi-main-div px-1 py-1'>
    <div className='headingPresident flex justify-center items-center rounded-t-2xl'>
     <h1 className="text-4xl text-center font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text flex flex-wrap">PRESIDENT'S WORD</h1>
    </div>
    <div className ="presi-main rounded-b-2xl">
    <div className="presi-info">
        <p className="px-10 py-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus eligendi enim, cum minus reiciendis hic aliquid dolorem, qui repudiandae aspernatur
        vero voluptas, facilis repellendus nesciunt commodi molestiae delectus quam possimus?Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Explicabo nihil quisquam, dolores eos minima optio
        delectus!
        </p>
        <h2 className='font-semibold'>~SHASHWAT JHA</h2>
        <h2 className='font-medium text-center'>President, LEO Club BIT Mesra, 2024</h2>
        <div className='flex sm:w-2/4 justify-evenly my-4 text-black'>
        <li className= 'text-black list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faTwitter} size="xl"/></a></li>
        <li className= 'text-black list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faFacebook} size="xl"/></a></li>
        <li className= 'text-black list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faInstagram} size="xl"/></a></li>
        <li className= 'text-black list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></li>
        </div>
    </div>   
    <div className="presi-image">
        <img src={image} alt="ok"/>
    </div> 
    </div>
    </div>
    </>
  )
}

export default President