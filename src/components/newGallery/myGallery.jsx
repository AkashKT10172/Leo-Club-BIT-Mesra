import { auth, db } from '../../firebase-config';
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy } from 'firebase/firestore';


const MyGallery = () => {
  const isAuth = useSelector((state) => state.auth.value);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageCollectionRef = collection(db, 'images');

  const q = query(imageCollectionRef, orderBy("date", "desc"));

  const getImages = async() => {
    setLoading(true);
    const data = await getDocs(q);
    setImages(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setTimeout(() =>{
      setLoading(false);
  }, 1500)
  }


  const deletePost = async(id) => {
      const toDeletedoc = doc(db, 'images', id);
      await deleteDoc(toDeletedoc);
      getImages();
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.classList.add('overflow-hidden'); 
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
    document.body.classList.remove('overflow-hidden'); 
  };

  useEffect(() => {
    getImages();
  },[])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4889f2]">
        <div className="lds-roller">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>
        <style jsx>{`
          .lds-roller {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-roller div {
            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            transform-origin: 40px 40px;
          }
          .lds-roller div:after {
            content: " ";
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #ffffff;
            margin: -4px 0 0 -4px;
          }
          .lds-roller div:nth-child(1) {
            animation-delay: -0.036s;
          }
          .lds-roller div:nth-child(1):after {
            top: 63px;
            left: 63px;
          }
          .lds-roller div:nth-child(2) {
            animation-delay: -0.072s;
          }
          .lds-roller div:nth-child(2):after {
            top: 68px;
            left: 56px;
          }
          .lds-roller div:nth-child(3) {
            animation-delay: -0.108s;
          }
          .lds-roller div:nth-child(3):after {
            top: 71px;
            left: 48px;
          }
          .lds-roller div:nth-child(4) {
            animation-delay: -0.144s;
          }
          .lds-roller div:nth-child(4):after {
            top: 72px;
            left: 40px;
          }
          .lds-roller div:nth-child(5) {
            animation-delay: -0.18s;
          }
          .lds-roller div:nth-child(5):after {
            top: 71px;
            left: 32px;
          }
          .lds-roller div:nth-child(6) {
            animation-delay: -0.216s;
          }
          .lds-roller div:nth-child(6):after {
            top: 68px;
            left: 24px;
          }
          .lds-roller div:nth-child(7) {
            animation-delay: -0.252s;
          }
          .lds-roller div:nth-child(7):after {
            top: 63px;
            left: 17px;
          }
          .lds-roller div:nth-child(8) {
            animation-delay: -0.288s;
          }
          .lds-roller div:nth-child(8):after {
            top: 56px;
            left: 12px;
          }
          @keyframes lds-roller {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }
  return (
    <>
    <div className="h-full w-full flex flex-col justify-center items-center mb-6 mt-16">
    <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text p-1 my-5 text-center gheading">IMAGE GALLERY</h1>
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-container">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden max-h-[300px] rounded-md grid-item"> 
            {isAuth && image.author.id === auth.currentUser.uid ? <div className='min-h-[10%] h-auto'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded translate-x-24 translate-y-4'
                    onClick={() => {deletePost(image.id)}}>Delete</button>
            </div> : <></>} 
            <img
              src={image.imageUrl.downloadURL}
              loading="lazy"
              alt={`Image`}
              className="card-image object-cover h-full w-full shadow-xl rounded-sm sm:hover:scale-105 sm:hover:opacity-80 cursor-pointer transition-transform duration-300"
              onClick={() => handleImageClick(image.imageUrl.downloadURL)}
            />
          </div>
          
        ))}
        </div>
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
    </>
  )
}

export default MyGallery