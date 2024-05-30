// ImageGallery.js
import React, { useState } from 'react';
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const images=["/src/components/Gallery/assets/SquidGame.png","/src/components/Gallery/assets/Tvf.png"];
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="relative rounded overflow-hidden cursor-pointer"
          onClick={() => handleImageClick(imageUrl)}
        >
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-auto transition-transform transform hover:scale-105"
          />
          {selectedImage === imageUrl && (
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

