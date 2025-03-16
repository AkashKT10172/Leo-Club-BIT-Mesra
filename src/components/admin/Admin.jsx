import React, {useState}from 'react'
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
    <div className='mt-[60px] flex flex-col items-center justify-center bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black'>
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
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/mm-registrations-list')}}>MM - Registrations</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/mismatched-registrations-list')}}>Mismatched - Registrations</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64' 
    onClick = {() => {window.scrollTo(0,0); navigate('/takeshi-registrations-list')}}>Takeshi's Castle - Registrations</button>
    <button className='bg-teal-500 hover:bg-teal-700 text-black-400 font-bold sm:py-2 px-4 rounded-sm my-2 w-64'
    onClick = {signUserOut}>Log-Out</button>
    </div>
  )
}

export default Admin
