// Card.js
import './card.css'
import React, { useState } from 'react';

const Card = ({ name, date, type, desc, image }) => {
  const [readmore, setReadmore] = useState(false);
  const description1=readmore? desc:`${desc.substring(0,280)}...`
  return (
    <>
      <div className="group bg-gradient-to-r from-blue-200 to-blue-100 flex flex-col justify-center items-center relative h-76 sm:h-auto w-4/5 sm:w-2/3 border-2 shadow-xl sm:flex-row sm:transition-all sm:hover:scale-105 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full text-6xl text-blue-500 bg-gray-800 bg-opacity-75 flex items-center justify-center transition-opacity group-hover:opacity-0 z-10 cursor-pointer">
             {name}
       </div>
      <div className="eimg h-2/3 sm:h-full w-full sm:w-1/2 rounded-lg blur-sm">
        <img src={image} alt={name} className="aspect-square sm:aspect-auto h-full w-full p-2" />
      </div>
      <div className="econtent flex flex-col font-serif justify-center items-center card-content h-1/2 w-full sm:w-1/2 sm:h-full p-4 overflow-auto no-scrollbar blur-sm">
        <h2 className="text-3xl font-bold">{name}</h2>
        <small>{date} | {type}</small>
        <p>{description1}
          <span
            className="text-blue-900 cursor-pointer"
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
