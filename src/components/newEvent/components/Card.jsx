// Card.js
import './card.css'
import React, { useState } from 'react';

const Card = ({ name, date, type, description, imgUrl,id ,deleteEvent,isAuth}) => {
  const [readmore, setReadmore] = useState(false);
 const description1=readmore? description:`${description.substring(0,280)}...`
  return (
    <>
      <div className="h-1/3 w-1/4 min-w-[320px] mb-7 border-2 flex  flex-col justify-center  items-center bg-[#fff9f2] sm:hover:scale-105 shadow-md hover:shadow-lg hover:shadow-orange-100 transition-all rounded-md ">
      <div className='h-1/2 w-auto p-2 place-content-center'>
      <img src={imgUrl} alt={name} className="object-cover h-52 w-full" />
      </div>
       
      <div className="mt-4 font-nova flex flex-col justify-center items-center text-blue-900 text-l">
        <h2 className="text-[26px] font-bold font-nova text-blue-900">{name}</h2>
        <small>{date} | {type}</small>
        <p className='p-2'>{description1}
          <span
            className="text-blackcursor-pointer hover:cursor-pointer text-black"
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? ' show less' : ' read more'}
          </span>
        </p>
        {isAuth ? <div className='min-h-[10%] h-auto'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {deleteEvent(id)}}>Delete</button>
              </div> : <></>}  
      </div>
      </div>
    </>
    



  );
};

export default Card;
