// Card.js
import './card.css'
import React, { useState } from 'react';

const Card = ({ name, date, type, desc, image }) => {
  const [readmore, setReadmore] = useState(false);
  const description1=readmore? desc:`${desc.substring(0,280)}...`
  return (
    <>
      <div className="h-1/3 w-1/4 min-w-[320px] mb-7 border-2 flex  flex-col justify-center  items-center bg-[#fff9f2] sm:hover:scale-105 shadow-md hover:shadow-lg hover:shadow-orange-100 transition-all rounded-md ">
      <div className='h-1/2 w-auto p-2 place-content-center'>
      <img src={image} alt={name} className="object-cover h-52 w-full" />
      </div>
       
      <div className="mt-4 font-nova flex flex-col justify-center items-center text-blue-900 text-l">
        <h2 className="text-3xl font-bold font-nova text-blue-900">{name}</h2>
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
      </div>
      </div>
    </>
    



  );
};

export default Card;
