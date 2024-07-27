import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deAuthorise } from '../auth/authSlice';
import {signOut} from 'firebase/auth';
import { auth } from '../../firebase-config'
import { useEffect } from 'react';

const Admin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector((state) => state.auth.value);

    useEffect(() => {
        if(!isAuth) {
          navigate('/login')
        }
      })

    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          dispatch(deAuthorise);
          window.location.pathname = "/";
      })
    }
  return (
    <div className='my-[100px] flex flex-col items-center justify-center'>
        <h1 className='my-[20px] text-2xl text-center'>
            WELCOME ADMIN!
            What Are you up to Today?
        </h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/createblog')}}>Create a Post</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/uploadImage')}}>Upload an Image</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/uploadEvents')}}>Upload an Event</button>
    <button className='bg-teal-500 hover:bg-teal-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64'
    onClick = {signUserOut}>Log-Out</button>
    </div>
  )
}

export default Admin