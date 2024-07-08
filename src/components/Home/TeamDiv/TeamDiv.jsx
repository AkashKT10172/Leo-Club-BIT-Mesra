import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './TeamDiv.css'
import profIn from "/src/components/Home/TeamDiv/amit_sir.jpeg"
import { handleClick } from '../../onClick'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function TeamDiv({eventloaded}) {
  const profelement=[
    { trigger: '.gprof-img', animation: { xPercent: -100, duration: 1 } },
    { trigger: '.gprof-heading', animation: { xPercent: 200, duration: 1 } },
    { trigger: '.gprof-content', animation: { scale: 0, duration: 1 } },
    { trigger: '.gprof-button', animation: { y: -50, opacity: 0, duration: 1, ease: 'bounce.out' } },
  ];
  useEffect(()=>{
    console.log("inside");
    profelement.forEach((el) => {
      gsap.from(el.trigger, {
          ...el.animation,
           scrollTrigger: {
          trigger: el.trigger,
          start: "top 80%",
           },
       });
   });
  },[eventloaded])
  if(!eventloaded){
    return (
      <h3 className='bg-white h-screen flex items-center justify-center text-white'>Loading....</h3>
    )
  }
  return (
    <>
    <div className ="team-main overflow-hidden">
    <div className="team-image gprof-img">
        <img src={profIn} alt="ok" className=''/>
    </div> 
    <div className="team-info">
        <h1 className="text-3xl text-gray-700 font-black text-center gprof-heading">PROFESSOR-IN-CHARGE</h1>
        <p className="px-10 py-10 text-center gprof-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus eligendi enim, cum minus reiciendis hic aliquid dolorem, qui repudiandae aspernatur
        vero voluptas, facilis repellendus nesciunt commodi molestiae delectus quam possimus?Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Explicabo nihil quisquam, dolores eos minima optio
        delectus!
        </p>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gprof-button">
            <NavLink to="/team" onClick={handleClick}>Our Team</NavLink>
        </button>
    </div>   
    </div>
    </>
  )
}

export default TeamDiv