import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from './Bg_video_1.mp4';
import './Bg_video.css';

const Video = () => {
    const navigate = useNavigate();
    const nextDivRef = useRef(null);

    const handleScrollToNextDiv = () => {
        if (nextDivRef.current) {
            nextDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="main relative w-full h-screen flex items-center justify-center">
                <video src={videoBg} autoPlay loop muted className="absolute w-full h-full object-cover" />
                
                {/* Overlay content */}
                <div className="content flex flex-col items-center z-10">
                    <button 
                        onClick={handleScrollToNextDiv}
                        className="my-5 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        GET STARTED
                    </button>

                    {/* Registration Buttons */}
                    <div className="mt-6 flex flex-col space-y-4">
                        <button 
                            onClick={() => navigate('/register?event=takeshi')}
                            className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Register for Takeshi's Castle
                        </button>
                        <button 
                            onClick={() => navigate('/register?event=mismatched')}
                            className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Register for Mismatched
                        </button>
                    </div>
                </div>
            </div>

            {/* Empty div for scrolling */}
            <div ref={nextDivRef} className="h-10"></div>
        </>
    );
};

export default Video;
