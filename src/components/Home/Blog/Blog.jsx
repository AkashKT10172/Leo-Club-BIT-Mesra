import {Link} from 'react-router-dom'
import { signOut} from 'firebase/auth';
import { auth, db } from '../../../firebase-config';
import { useSelector, useDispatch } from 'react-redux'
import { deAuthorise } from '../../auth/authSlice';
import React, { useState, useEffect } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy, limit } from 'firebase/firestore';
import './blog.css'

const BlogHome = () => {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(deAuthorise);
      window.location.pathname = "/blog";
  })
  }
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, 'posts');

  const q = query(postCollectionRef, orderBy("date", "desc"), limit(1));

  const getPosts = async() => {
    setLoading(true);
    const data = await getDocs(q);
    setPostLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setLoading(false)
  }
  useEffect(() => {
    getPosts();
  },[])

  const deletePost = async(id) => {
      const postdoc = doc(db, 'posts', id);
      await deleteDoc(postdoc);
      getPosts();
  }

  if(loading) {
    return (
    <h3 className='bg-white h-screen flex items-center justify-center text-white'>Loading....</h3>
    )
  }
  return (
    <>
    <div>
      {postLists.length === 0 ? <h3>No Posts to show</h3> : postLists.map((post) => {
        return (
        <>
          <div className='blog-main-div sm:px-4 sm:py-8 py-2 px-2'>
          <div className='border-2 border-gray-600 rounded-md pb-5 boxDivblog'>
          <div className='headingblogdent flex justify-center items-center rounded-t-2xl'>
            <h1 className="text-4xl text-center font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text flex flex-wrap">LATEST POST</h1>
          </div>
        <div className ="blog-main rounded-b-2xl">
        <div className="blog-info">
        <h5 className='text-black min-h-[15%] h-auto text-3xl font-semibold border-b-2 border-gray-500 flex items-center'>{post.title}</h5>
        <p className="px-10 py-10 text-justify">
          {post.post}
        </p>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gmore-event">
            <a href={`https://${post.link}`} className='font-semibold text-white'>Link</a>
        </button>
        
        <h2 className='font-medium'>Author : {post.author.name}</h2>
        <div className='flex sm:w-2/4 justify-evenly my-4 text-black'>
        </div>
        </div>   
        <div className="blog-image">
          <img src={post.imgUrl} alt="ok"/>
        </div> 
        </div>
        </div>
        </div>
        </>
        )
      })}
    </div>
    </>
  )
}

export default BlogHome