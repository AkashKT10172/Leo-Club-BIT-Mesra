import React from 'react'
import {auth} from '../../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authorise } from '../../auth/authSlice'
import { useState } from 'react';


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, Pass)
    .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('isAuth', true);
    dispatch(authorise());
    navigate('/admin');
    })
  }
  return (
     <div className='bg-azure h-screen flex justify-center mt-[60px]'>
      <div className='flex flex-col items-center sm:w-[400px] w-[300px]  mx-2 h-80 my-4 p-4 rounded-md bg-teal-200 border-2 border-gray-500'>
        <h1 className='text-blue-500 underline'>Please Enter e-Mail & Password</h1>
        <div className='w-full p-4'>
          <form className='flex flex-col items-start w-full' onSubmit={handleSubmit}>
            <label className='h-[25px]' htmlFor="email">Email</label>
            <input type="email"
            name='email'
            required 
            className='h-[40px] w-full border-2 border-black px-2'
            onChange={(e) => setEmail(e.target.value)}/>
            <label className='h-[25px]' htmlFor="pass">Password</label>
            <input type="password"
            name='pass'
            required 
            className='h-[40px] w-full border-2 border-black px-2'
            onChange={(e) => setPass(e.target.value)}/>
            <button 
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'>
              SignIn
            </button>
            <button 
            className='mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => navigate('/')}>
              Back to Home Page
            </button>
          </form>
        </div>
      </div>
     </div>
  )
}

export default Login