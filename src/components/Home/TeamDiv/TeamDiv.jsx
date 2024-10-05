import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './TeamDiv.css'
import profIn from "/src/components/Home/TeamDiv/amitsir_final.jpg"
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
    <div className="team-image">
        <img src={profIn} alt="ok" className=''/>
    </div> 
    <div className="team-info">
        <h1 className="text-3xl text-gray-700 font-black text-center">PROFESSOR-IN-CHARGE</h1>
        <p className="md:px-10 sm:px-7 px-2 pt-10 pb-5 text-justify">The word LEO stands for Leadership, Experience, Opportunity. The objective of the LEO Club is to provide the youth of the world an opportunity for development and contribution individually and collectively.
          The LEO Club of BIT Mesra is a socio-cultural club governed by the Lions International Club. LEOs are known for their ferocious and passionate attitude. Their interests often revolve around bringing social changes in society. Leos love to showcase their talents and inspire others to channel their own bold actions.
          So, be the change that you wish to see in the world.
          Thanks and all the best
        </p>
        <p className='font-bold text-center'>Dr. Amit Saran</p>
        <p className='font-bold pb-5 text-center'>Professor-In-chagre, Leo BIT Mesra</p>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gprof-button">
            <NavLink to="/team" onClick={handleClick}>Our Team</NavLink>
        </button>
    </div>   
    </div>
    </>
  )
}

export default TeamDiv