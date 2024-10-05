import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {auth, db, imageDB} from '../../firebase-config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

const UploadImage = () => {
  const isAuth = useSelector((state) => state.auth.value);

  const[images, setImages] = useState('');
  //const[date, setDate] = useState('');

  const currDate = new Date().toISOString().split('T')[0];
  const time = new Date().getHours() + '-' + new Date().getMinutes() + '-' + new Date().getSeconds()
  const date = currDate + '-' + time

  const [imgUrl, setImgUrl] = useState([])
  let count = 0;
  const handleImageSubmit = async () => {
      for(let i = 0; i < images.length; i++) {
        const imgRef = ref(imageDB, "images/" + images[i].name)
        if(i == images.length - 1) {
            await uploadBytes(imgRef, images[i]).
            then(() => {
                alert(`image has been Uploaded`);
            })
        } else {
            await uploadBytes(imgRef, images[i])
        }
        const downloadURL = await getDownloadURL(imgRef)
        setImgUrl(imgUrl => [...imgUrl, {downloadURL}])
        count ++;
      }
    }

  console.log(imgUrl)

  let navigate = useNavigate();

  const postCollectionRef = collection(db, 'images');
  const createPost = async() => {
      try {
        for(let i = 0; i < imgUrl.length; i++){
        let imageUrl = imgUrl[i]
            await addDoc(postCollectionRef, {
                date,
                imageUrl,
                author: {
                    name : auth.currentUser.email,
                    id: auth.currentUser.uid
                }
            })
          }
        navigate('/myGallery');
      } catch(error){
        console.log('error')
      }
      
    }
  useEffect(() => {
    if(!isAuth) {
      navigate('/login')
    }
  })
  return (
    <div className='h-screen mt-[60px] bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black'>
      <div className='flex flex-col items-center'>
       <h1 className='font-bold text-2xl text-[azure] my-4'>Upload Images</h1>
       <div className='border-2 border-black p-2 bg-teal-200 md:w-2/4 w-[90%]  rounded-md'>
        <div className='sm:h-10 h-20 flex md:flex-row flex-col justify-between'>
          <input type="file" multiple onChange={(e) => setImages(e.target.files)}/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick = {handleImageSubmit}>Upload</button>
        </div>
        {/* <div className='w-full'>
          <label htmlFor="Date">Date & Time</label>
          <input className='w-full border-2 border-black px-2' type="text" placeholder='yyyy-mm-dd _ time'  
          onChange={(e) => setDate(e.target.value)}/>
        </div> */}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={createPost}>Upload</button>
        <button 
            className='mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2'
            onClick={() => navigate('/admin')}>
              Back to Admin Page
            </button>
      </div>
      </div>
    </div>
  )
}

export default UploadImage