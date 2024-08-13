import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {auth, db, imageDB} from '../../../firebase-config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

const CreateBlog = () => {
  const isAuth = useSelector((state) => state.auth.value)

  const[title, setTitle] = useState('');
  const[post, setPost] = useState('');
  const[link, setLink] = useState('');
  //const[date, setDate] = useState('');

  const currDate = new Date().toISOString().split('T')[0];
  const time = new Date().getHours() + '-' + new Date().getMinutes() + '-' + new Date().getSeconds()
  const date = currDate + '-' + time
  
  const [imgUrl, setImgUrl] = useState('')
  const [img, setImg] = useState('')

  const handleImageSubmit = async () => {
      console.log(img);
      const imgRef = ref(imageDB, "files/" + img.name)
      await uploadBytes(imgRef, img).
      then(() => {
        alert(`images have been Uploaded`);
      })
      const downloadURL = await getDownloadURL(imgRef)
      console.log(downloadURL)
      setImgUrl(downloadURL)
  } 


  let navigate = useNavigate();

  const postCollectionRef = collection(db, 'posts');
  const createPost = async() => {
    if(title === '' || post === ''){
      alert('Fill the fields')
      return false
    } else {
      try {
        await addDoc(postCollectionRef, {
          title,
          post,
          link,
          date,
          imgUrl,
          author: {
            name : auth.currentUser.email,
            id: auth.currentUser.uid
          }
        })
        navigate('/blog');
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
       <h1 className='font-bold text-2xl text-blue-600 my-4'>CREATE A POST</h1>
       <div className='border-2 border-black p-5 bg-teal-200 md:w-2/4 w-[90%] rounded-md'>
       <div className='sm:h-10 h-20 flex md:flex-row flex-col justify-between'>
          <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick = {handleImageSubmit}>Upload</button>
        </div>
        <div className='w-full'>
          <label htmlFor="title">Title</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='Title'  
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='w-full'>
          <label htmlFor="Link">Link</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='Link'  
          onChange={(e) => setLink(e.target.value)}/>
        </div>
        {/* <div className='w-full'>
          <label htmlFor="Date">Date & Time</label>
          <input className='w-full border-2 border-black rounded-sm px-2' type="text" placeholder='yyyy-mm-dd _ time'  
          onChange={(e) => setDate(e.target.value)}/>
        </div> */}
        <div className='h-64 w-full'>
          <label htmlFor="posts">Post</label>
          <textarea className='w-full h-[80%] border-2 border-black rounded-sm px-2' placeholder='Post...' 
          name="" id="" 
          onChange={(e) => setPost(e.target.value)}/>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={createPost}>Publish</button>
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

export default CreateBlog