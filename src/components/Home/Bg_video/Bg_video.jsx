import React from 'react';
import videoBg from './Bg_video.mp4'
import './Bg_video.css'
import { useRef } from 'react';


const Video = () => {

    const nextDivRef = useRef(null);
    
    function handleScrollToNextDiv() {
      nextDivRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    return (
    <>
    <div className='main'>
      {/* <video src={videoBg} autoPlay loop muted/> */}
      <div className="content">
        <button onClick={handleScrollToNextDiv} className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GET STARTED</button>
      </div>
    </div>
    <div ref={nextDivRef}></div>
    </>
    );
  };
  
export default Video;