import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase-config';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy, limit } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import './Event.css'
import gsap from 'gsap';

function Event() {

  const [eventLists, setEventLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const eventCollectionRef = collection(db, 'events');

  const q = query(eventCollectionRef, orderBy("date", "desc"), limit(1));

  const getEvents= async() => {
    setLoading(true);
    const data = await getDocs(q);
    setEventLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setLoading(false)
  }
  useEffect(() => {
    getEvents();
  },[])
  useEffect(() => {
      const blogelements = [
        { trigger: '.gevent-heading', animation: { scale: 0,opacity:0, duration: 1} },
        { trigger: '.gevent-img', animation: { x: 150, opacity: 0, duration: 1.5 } },
        { trigger: '.gevent-info', animation: { y: 150, opacity: 0, duration: 1.5 } },
        { trigger: '.gmore-event', animation: { y: -100, opacity: 0, duration: 1, ease: 'bounce.out' } },
        ];
       blogelements.forEach((el) => {
           gsap.from(el.trigger, {
               ...el.animation,
                scrollTrigger: {
               trigger: el.trigger,
               start:  el.trigger === ".gmore-event" ? "top 90%":"top 80%",
                },
            });
        });
  }, [loading]);
  if(loading) {
    return (
      <div className='h-full'>
          <h3 className='bg-white h-screen flex items-center justify-center text-white'>Loading....</h3>
      </div>
   
    )
  }
  return (
    <>
    <div className='event-main-div  sm:px-4 sm:py-8 py-2 px-2 overflow-hidden gevent'>
      {eventLists.length === 0 ? <h3>No Posts to show</h3> : eventLists.map((event) => {
        return( <>
        <div className='border-2 border-gray-600 rounded-md pb-5 boxDivEvent'>
          <div className='headingEvent flex  justify-center items-center rounded-t-2xl gevent-heading'>
            <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text ">UPCOMING EVENT</h1>
          </div>
          <div className ="event-main rounded-b-2xl">
          <div className="event-info  gevent-info">
              <h1 className="text-3xl text-gray-700 font-black text-center">{event.name}</h1>
              <p className="px-10 py-10 text-center">{event.description}
              </p>
              <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gmore-event">
                  <NavLink to="/myEvents" onClick={()=>{
                    window.scrollTo(0,0);
                  }} >See all events! </NavLink>
              </button>
          </div>   
          <div className="event-image gevent-img">
              <img src={event.imgUrl} alt="ok"/>
          </div> 
          </div>
         </div>
        </>
        )
      })}
    </div>
    </>
  )
}

export default Event