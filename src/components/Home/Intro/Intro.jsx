import React from "react";
import "./Intro.css"
import leoLogo from "./leoLogo.png"
import { Link } from "react-router-dom";

function IntroDiv() {
    return(
        <div className ="main-div">
            <div className="image-div">
                <img src={leoLogo} alt="ok"/>
                <h1 className="text-xl text-gray-700 font-black text-center flex flex-wrap justify-center align-center">
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">LEADERSHIP&nbsp;&nbsp;</span>
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">EXPERIENCE&nbsp;&nbsp;</span>
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">OPPURTUNITY</span>
                </h1>
            </div>
            <div className="info-div">
                <h1 className="text-3xl text-gray-700 font-black text-center">LEO CLUB BIT MESRA</h1>
                <p className="px-10 py-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus eligendi enim, cum minus reiciendis hic aliquid dolorem, qui repudiandae aspernatur
                vero voluptas, facilis repellendus nesciunt commodi molestiae delectus quam possimus?Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Explicabo nihil quisquam, dolores eos minima optio
                delectus! Nobis error nihil harum, mollitia quo provident eligendi vitae commodi esse iste autem
                quas.
                </p>
               
                <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/about">Click to know more!</Link>
                </button>
             
            </div>        
        </div>
    );
}

export default IntroDiv