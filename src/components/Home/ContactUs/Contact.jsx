import { useRef, useState } from "react"
import React from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const myForm = useRef();
  const nameRef = useRef();
  const [state, setState] = useState("hidden");
  const [userState, setUserState] = useState("User");
  const sendEmail = (e) => {
    e.preventDefault();    
    setUserState(e.target[0].value);
    emailjs
      .sendForm('service_q93y8hw', 'template_3t3bm2c', myForm.current, {
        publicKey: 'zrZUrtGicYNbKUnUn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
      setState("visible");
      setTimeout(() => {setState("hidden");}, 3000);
      
  };
  return (
    <div className='h-96 w-full flex flex-col items-center bg-white'>
      <h1 className='text-center font-bold bg-blue-500 text-2xl sm:text-3xl text-wrap p-5 rounded-md text-white'>CONNECT WITH US!</h1>
      <div className="flex justify-center mt-4">
      <form ref={myForm} onSubmit={sendEmail} className='md:w-[60%] sm:w-[80%] w-full sm:mx-0 mx-2 pt-4 flex flex-col justify-center
      items-center bg-gray-600 p-4 rounded-md'>
      <div className='flex sm:flex-row flex-col w-full h-auto'>
        <div className='md:w-2/4 w-full px-1 sm:h-96 h-auto'>
            <label htmlFor="user_name" className='text-xl'>First Name</label>
            <input type="text" ref={nameRef} placeholder='First Name' name='user_Fname' required className='border-slate-800 bg-gray-400 placeholder-gray-100 border-2 p-2 w-full rounded-sm sm:h-[59px] h-[45px]'/>
            <label htmlFor="user_name" className='text-xl'>Last Name</label>
            <input type="text" placeholder='Last Name' name='user_Lname' className='border-slate-800 bg-gray-400 placeholder-gray-100 border-2 p-2 w-full rounded-sm sm:h-[59px] h-[45px]'/>
            <label htmlFor="user_name" className='text-xl'>E-Mail</label>
            <input type="email" placeholder='Your e-Mail' name='user_mail' required className='border-slate-800 placeholder-gray-100 bg-gray-400 border-2 p-2 w-full rounded-sm sm:h-[59px] h-[45px]'/>
            <label htmlFor="user_name" className='text-xl'>Subject</label>
            <input type="text" placeholder='Subject' name='user_sub' required className='border-slate-800 placeholder-gray-100 bg-gray-400 border-2 p-2 w-full rounded-sm sm:h-[59px] h-[45px]'/>
        </div>
        <div className='md:w-2/4 w-full px-1 h-auto'>
            <label htmlFor="message" className='text-xl'>Leave Us a Message...</label>
            <textarea name="message" placeholder='Your Message Goes Here...' className='border-slate-800 placeholder-gray-100 bg-gray-400 border-2 p-2 w-full sm:h-80 h-[55px] rounded-sm'></textarea>
        </div>
        </div>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">SUBMIT</button>
        {/* <div className={`${state} text-center bg-green-400 rounded-md p-2`}><p className="text-purple-800">Dear {userState},</p>Thankyou for your time!<br/>Your message is recieved and we'll get back to you soon.</div> */}
      </form>
      </div>
    </div>
    )
}

export default Contact