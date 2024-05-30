import React, { useState } from 'react';

const images=["/src/components/Gallery/assets/img1.JPG","/src/components/Gallery/assets/img2.JPG","/src/components/Gallery/assets/img3.JPG","/src/components/Gallery/assets/img4.JPG","/src/components/Gallery/assets/img2.JPG","/src/components/Gallery/assets/img3.JPG"];

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
      <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">Image Gallery</h1>
      <div className="flex flex-wrap justify-evenly items-center  gap-1 w-11/12  sm:w-4/5  md:gap-4 h-full md:w-4/5">
        {images.map((image, index) => (
          <div key={index} className="card group h-58 w-full sm:h-64 sm:w-5/12 md:h-80 md:w-1/4">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image object-cover  h-full w-full shadow-xl rounded-lg  hover:scale-105 hover:opacity-80 cursor-pointer transition-transform  duration-300"
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
