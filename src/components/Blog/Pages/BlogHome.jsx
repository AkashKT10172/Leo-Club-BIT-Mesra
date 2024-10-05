import { auth, db } from '../../../firebase-config';
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy, limit } from 'firebase/firestore';

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
    setTimeout(() =>{
      setLoading(false);
  }, 1500)
  }
  useEffect(() => {
    getPosts();
  },[])

  const deletePost = async(id) => {
      const postdoc = doc(db, 'posts', id);
      await deleteDoc(postdoc);
      getPosts();
  }

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
    <div className='mt-[80px] '>
    <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text p-1 text-center bheading">LATEST POSTS</h1>
      {postLists.length === 0 ? <h3>No Posts to show</h3> : postLists.map((post) => {
        return (
          <div key={post.id} className='flex flex-col items-center p-4 bg-white h-auto '>
            <div className='border-2 flex lg:flex-row flex-col-reverse justify-center items-center mx-4 my-4 p-2 lg:w-2/4 w-full h-auto bg-[#fff9f2] shadow-md hover:shadow-lg hover:shadow-orange-100 transition-all rounded-md'>
              <div className='lg:w-2/4 w-full h-auto lg:mr-4 p-2 rounded-lg whitespace-pre-wrap'>
              <h5 className='font-nova text-blue-900 min-h-[15%] h-auto text-3xl font-semibold border-b-2 border-gray-500 flex items-center'>{post.title}</h5>
              <p className="md:min-h-72 text-justify font-nova text-blue-900 whitespace-pre-wrap">
                {post.post.replaceAll(`\\n`, '\n')}
              </p>
              <h5 className='min-h-[10%] h-auto flex items-end border-t-2 border-gray-500 font-nova text-blue-900'>Author : {post.author.name}</h5>
              <a href={`https://${post.link}`} className='min-h-[10%] h-auto flex items-end border-t-2 border-gray-500 font-nova text-blue-900'>
              <button 
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Link
            </button></a>
              {isAuth ? <div className='min-h-[10%] h-auto'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {deletePost(post.id)}}>Delete</button>
              </div> : <></>}    
              </div>
              <div className='lg:w-2/4 w-full flex justify-end '>
              <img src={post.imgUrl} className='lg:w-96 w-full h-auto object-cover border-2 border-gray-500' />
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