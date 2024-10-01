import React from 'react';
import videoBg from './Bg_video_1.mp4'
import './Bg_video.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'


const Video = () => {
    const navigate = useNavigate()
    const nextDivRef = useRef(null);
    
    function handleScrollToNextDiv() {
      nextDivRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    return (
    <>
    <div className='main'>
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <button onClick = {() => {window.scrollTo(0,0); navigate('/mm-registration')}}
         className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register for Murder Mystery</button>
      </div>
    </div>
    <div ref={nextDivRef}></div>
    </>
    );
  };
  
export default Video;