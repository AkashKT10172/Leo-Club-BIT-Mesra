import React, { useState,useEffect } from 'react';
import gsap from 'gsap';
import mm1 from './assets/mm1.jpg';
import mm2 from './assets/mm2.jpg';
import mm3 from './assets/mm3.jpg';
import mm4 from './assets/mm4.jpg';
import mm5 from './assets/mm5.jpg';
import mm6 from './assets/mm6.jpg';
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
const images=[dd1,dd2,dd3,dd4,dd5,dd6,dd7,dd8,dd9,dd10,dd11,dd12,mm1,mm2,mm3,mm4,mm5,mm6];

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const gridItems = document.querySelectorAll('.grid-item');
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.grid-container', 
        start: 'top bottom', 
        end: 'bottom top',
      },
    });

    gridItems.forEach((item) => {
      scrollTrigger.fromTo(
        item,
        { opacity: 0, scaleX: 0 }, 
        { opacity: 1, scaleX: 1, duration: 0.5 }, 
        '<0.2' 
      );
    });

    scrollTrigger.play(); 
  }, []); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.classList.add('overflow-hidden'); 
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
    document.body.classList.remove('overflow-hidden'); 
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mb-6 mt-16">
      <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">
        IMAGE GALLERY
      </h1>
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-container">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden max-h-[300px] rounded-md grid-item"> 
            <img
              src={image}
              loading="lazy"
              alt={`Image ${index + 1}`}
              className="card-image object-cover h-full w-full shadow-xl rounded-sm sm:hover:scale-105 sm:hover:opacity-80 cursor-pointer transition-transform duration-300"
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
            className="w-full h-[450px] rounded-lg max-w-3xl max-h-full object-contain hover:cursor-pointer mx-auto"
            onClick={handleCloseClick}
          />
          <button
            type="button"
            className="absolute top-0 right-0 m-4 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2 shadow-sm"
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
