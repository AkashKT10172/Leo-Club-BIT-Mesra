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
      <h1 className='text-center font-bold bg-gray-700 text-2xl sm:text-3xl text-wrap p-5 rounded-md text-white'>CONNECT WITH US!</h1>
      <div className="flex justify-center w-9/12 mt-4">
      <form ref={myForm} onSubmit={sendEmail} className='md:w-[60%] sm:w-[80%] w-full sm:mx-0 mx-2 pt-4 flex flex-col justify-center
      items-center bg-custom-gradient p-4 rounded-md'>
      <div className='flex sm:flex-row flex-col w-full h-auto'>
        <div className='md:w-2/4 w-full px-1 sm:h-96 h-auto flex flex-col justify-evenly gap-3'>
            {/* <label htmlFor="user_name" className='text-xl'>First Name</label> */}
            <input type="text" ref={nameRef} placeholder='First Name' name='user_Fname' required className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500'/>
            {/* <label htmlFor="user_name" className='text-xl'>Last Name</label> */}
            <input type="text" placeholder='Last Name' name='user_Lname' className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500'/>
            {/* <label htmlFor="user_name" className='text-xl'>E-Mail</label> */}
            <input type="email" placeholder='Your e-Mail' name='user_mail' required className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500'/>
            {/* <label htmlFor="user_name" className='text-xl'>Subject</label> */}
            <input type="text" placeholder='Subject' name='user_sub' required className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500'/>
        </div>
        <div className='md:w-2/4 w-full px-1 h-auto'>
            <textarea name="message" placeholder='Your Message Goes Here...' className='border-b-2 sm:mt-11 sm:border-transparent bg-transparent placeholder-gray-200 p-2 w-full sm:h-5/6 focus:outline-none'></textarea>
        </div>
        </div>
        <button className="my-5 border-gray-200 border-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">SUBMIT</button>
        {/* <div className={`${state} text-center bg-green-400 rounded-md p-2`}><p className="text-purple-800">Dear {userState},</p>Thankyou for your time!<br/>Your message is recieved and we'll get back to you soon.</div> */}
      </form>
      </div>
    </div>  
    )
}

export default Contact