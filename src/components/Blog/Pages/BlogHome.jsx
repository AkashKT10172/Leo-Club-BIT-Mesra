import { auth, db } from '../../../firebase-config';
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy, limit } from 'firebase/firestore';
import gsap from 'gsap'


const BlogHome = () => {
  const isAuth = useSelector((state) => state.auth.value);
  
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, 'posts');

  const q = query(postCollectionRef, orderBy("date", "desc"));

  const getPosts = async() => {
    setLoading(true);
    const data = await getDocs(q);
    setPostLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setLoading(false)
  }
  useEffect(() => {
      gsap.from(".bheading",{
        y:-100,
        duration:1,
        ease:"power2.out",
        touchAction:"play none none none",
      })
    getPosts();
  },[])

  const deletePost = async(id) => {
      const postdoc = doc(db, 'posts', id);
      await deleteDoc(postdoc);
      getPosts();
  }

  if(loading) {
    return (
      <>
        <h3 className='bg-white h-screen flex items-center justify-center text-white'>Loading....</h3>
      </>
    )
  }
  return (
    <>
    <div className='mt-[80px] '>
    <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text p-1 text-center bheading">LATEST POSTS</h1>
      {postLists.length === 0 ? <h3>No Posts to show</h3> : postLists.map((post) => {
        return (
          <div key={post.id} className='flex flex-col items-center p-4 bg-white h-auto '>
            <div className='border-2 flex lg:flex-row flex-col-reverse justify-center items-center mx-4 my-4 p-2 lg:w-2/4 w-full h-auto bg-[#fff9f2] shadow-md hover:shadow-lg hover:shadow-orange-100 transition-all rounded-md'>
              <div className='lg:w-2/4 w-full h-auto lg:mr-4 p-2 rounded-lg'>
              <h5 className='font-nova text-blue-900 min-h-[15%] h-auto text-3xl font-semibold border-b-2 border-gray-500 flex items-center'>{post.title}</h5>
              <p className="md:min-h-72 text-justify font-nova text-blue-900">
                {post.post}
              </p>
              <h5 className='min-h-[10%] h-auto flex items-end border-t-2 border-gray-500 font-nova text-blue-900'>Author : {post.author.name}</h5>
              <a href={`https://${post.link}`} className='min-h-[10%] h-auto flex items-end border-t-2 border-gray-500 font-nova text-blue-900'>{post.link}</a>
              {isAuth ? <div className='min-h-[10%] h-auto'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {deletePost(post.id)}}>Delete</button>
              </div> : <></>}    
              </div>
              <div className='lg:w-2/4 w-full flex justify-end '>
              <img src={post.imgUrl} className='lg:w-96 w-full h-96 object-cover border-2 border-gray-500' />
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default BlogHome