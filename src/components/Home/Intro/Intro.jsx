import React from "react";
import "./Intro.css"
import leoLogo from "./leoLogo.png"
import { NavLink } from "react-router-dom";
import {handleClick} from "../../onClick"

function IntroDiv() {
    return(
        <div className ="main-div gintro overflow-x-hidden">
            <div className="image-div">
                <img src={leoLogo} alt="ok" className="glogo-image"/>
                <h1 className="text-xl text-gray-700 font-black text-center flex flex-wrap justify-center align-center gmotto">
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">LEADERSHIP&nbsp;&nbsp;</span>
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">EXPERIENCE&nbsp;&nbsp;</span>
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">OPPURTUNITY</span>
                </h1>
            </div>
            <div className="info-div">
                <h1 className="sm:text-4xl text-3xl text-gray-700 font-black text-center ginfo-head">LEO CLUB BIT MESRA</h1>
                <p className="md:px-10 sm:px-7 px-2 py-10 text-justify ginfo-content">
                Leo Club BIT Mesra is a dedicated non-profit organization committed to promoting service activities among students.
                Our mission is to nurture leadership, experience, and opportunity, fostering a spirit of friendship,
                fellowship, and mutual understanding. We strive to make a positive impact in our community,
                always working for a cause. Through collective efforts and selfless service, 
                we inspire individuals to grow, lead with purpose, and make a meaningful difference in the world around us.
                </p>
               
                <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gknow-more">
                    <NavLink to="/about" onClick={handleClick}>Click to know more!</NavLink>
                </button>
             
            </div>        
        </div>
    );
}

export default IntroDiv