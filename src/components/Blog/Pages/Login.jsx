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
  const [loading, setLoading] = useState(true);
  setTimeout(() =>{
    setLoading(false);
  }, 1500)

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