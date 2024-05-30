import React from 'react'
import { NavLink } from 'react-router-dom'
import './TeamDiv.css'

function TeamDiv() {
  return (
    <>
    <div className ="team-main">
    <div className="team-image">
        <img src="/src/components/Home/TeamDiv/amit_sir.jpeg" alt="ok"/>
    </div> 
    <div className="team-info">
        <h1 className="text-3xl text-gray-700 font-black text-center">PROFESSOR-IN-CHARGE</h1>
        <p className="px-10 py-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus eligendi enim, cum minus reiciendis hic aliquid dolorem, qui repudiandae aspernatur
        vero voluptas, facilis repellendus nesciunt commodi molestiae delectus quam possimus?Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Explicabo nihil quisquam, dolores eos minima optio
        delectus!
        </p>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <NavLink to="/team">Our Team</NavLink>
        </button>
    </div>   
    </div>
    </>
  )
}

export default TeamDiv