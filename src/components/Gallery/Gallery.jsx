import React, { useState } from 'react';
import mm1 from './assets/mm1.jpg';
import mm2 from './assets/mm2.jpg';
import mm3 from './assets/mm3.jpg';
import mm4 from './assets/mm4.jpg';
import mm5 from './assets/mm5.jpg';
import mm6 from './assets/mm6.jpg';
import mm7 from './assets/mm7.jpg';
import dd1 from './assets/dd1.jpg';
import dd2 from './assets/dd2.jpg';
import dd3 from './assets/dd3.jpg';
import dd4 from './assets/dd4.jpg';
import dd5 from './assets/dd5.jpg';
import dd6 from './assets/dd6.jpg';
import dd7 from './assets/dd7.jpg';
import dd8 from './assets/dd8.jpg';
import dd9 from './assets/dd9.jpg';
import dd10 from './assets/dd10.jpg';
import dd11 from './assets/dd11.jpg';
import dd12 from './assets/dd12.jpg';
const images=[dd1,dd2,dd3,dd4,dd5,dd6,dd7,dd8,dd9,dd10,dd11,dd12,mm1,mm2,mm3,mm4,mm5,mm6,mm7];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mb-6 mt-16">
      <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">IMAGE GALLERY</h1>
      <div className="flex flex-wrap justify-evenly items-center  gap-1 w-11/12  sm:w-4/5  md:gap-4 h-full md:w-4/5">
        {images.map((image, index) => (
          <div key={index} className="card group h-58 w-full sm:h-64 sm:w-5/12 md:h-80 md:w-1/4">
            <img
              src={image}
              loading='lazy'
              alt={`Image ${index + 1}`}
              className="card-image object-cover  h-full w-full shadow-xl rounded-sm  sm:hover:scale-105 sm:hover:opacity-80 cursor-pointer transition-transform  duration-300"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="w-full h-[450px] rounded-lg max-w-3xl max-h-full object-contain hover:cursor-pointer  mx-auto"
            onClick={handleCloseClick}
          />
          <button
            type="button"
            className="absolute top-0 right-0 m-4 text-white  hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2 shadow-sm"
            onClick={handleCloseClick}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
