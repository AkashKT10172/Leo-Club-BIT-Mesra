import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {auth, db, imageDB} from '../../firebase-config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

const UploadEvents = () => {
  const isAuth = useSelector((state) => state.auth.value)

  const[name, setName] = useState('');
  const[date, setDate] = useState('');
  const[type, setType] = useState('');
  const[description, setDescription] = useState('');

  const [imgUrl, setImgUrl] = useState('')
  const [img, setImg] = useState('')

  const handleImageSubmit = async () => {
      console.log(img);
      const imgRef = ref(imageDB, "eventimg/" + img.name)
      await uploadBytes(imgRef, img).
      then(() => {
        alert(`images have been Uploaded`);
      })
      const downloadURL = await getDownloadURL(imgRef)
      console.log(downloadURL)
      setImgUrl(downloadURL)
  } 


  let navigate = useNavigate();

  const eventCollectionRef = collection(db, 'events');
  const createEvent = async() => {
    if(name === ''){
      alert('Fill the fields')
      return false
    } else {
      try {
        await addDoc(eventCollectionRef, {
          name,
          description,
          type,
          date,
          imgUrl,
          author: {
            name : auth.currentUser.email,
            id: auth.currentUser.uid
          }
        })
        navigate('/myEvents');
      } catch(error){
        console.log('error')
      }
      
    }
  }
  console.log(isAuth)
  useEffect(() => {
    if(!isAuth) {
      navigate('/login')
    }
  })
  return (
    <div className='bg-[azure] h-screen mt-[60px]'>
      <div className='flex flex-col items-center'>
       <h1 className='font-bold text-2xl text-blue-600 my-4'>ADD AN EVENT</h1>
       <div className='border-2 border-black rounded-md p-2 bg-teal-200 md:w-2/4 w-[90%]'>
       <div className='sm:h-10 h-20 flex md:flex-row flex-col justify-between'>
          <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick = {handleImageSubmit}>Upload</button>
        </div>
        <div className='w-full'>
          <label htmlFor="Name">Name</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='Name'  
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='w-full'>
          <label htmlFor="type">Type</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='type'  
          onChange={(e) => setType(e.target.value)}/>
        </div>
        <div className='w-full'>
          <label htmlFor="Date">Date</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='yyyy-mm-dd'  
          onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='h-64 w-full'>
          <label htmlFor="descrription">Description</label>
          <textarea className='w-full h-[80%] border-2 border-black rounded-sm px-2' placeholder='Description...' 
          name="" id="" 
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={createEvent}>Publish</button>
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

export default UploadEvents