import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [teamName, setTeamName] = useState('');
  const [teamID, setTeamID] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderMail, setLeaderMail] = useState('');
  const [leaderPhone, setLeaderPhone] = useState('');
  const [leaderBranch, setLeaderBranch] = useState('');
  const [memtwo, setMemTwo] = useState('');
  const [memTwoMail, setMemTwoMail] = useState('');
  const [memTwoPhone, setMemTwoPhone] = useState('');
  const [memThree, setMemThree] = useState('');
  const [memFour, setMemFour] = useState('');

  let navigate = useNavigate();

  const eventCollectionRef = collection(db, 'registrations');

  const createEvent = async () => {
    if (teamID === '') {
      toast.error('Please fill in all required fields');
      return false;
    } else {
      try {
        await addDoc(eventCollectionRef, {
          teamName,
          teamID,
          leaderName,
          leaderMail,
          leaderPhone,
          leaderBranch,
          memtwo,
          memTwoMail,
          memTwoPhone,
          memThree,
          memFour,
        });
        toast.success('Form submitted successfully');
        setTimeout(() => navigate('/'), 3000); // Navigate after a short delay
      } catch (error) {
        toast.error('An error occurred while submitting the form');
      }
    }
  };
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
    <div className='bg-[azure] h-auto mt-[60px] pb-[30px] bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl text-[azure] my-4 underline text-center'>
          Murder Mystery '24 Registration
        </h1>
        <div className='border-2 border-black rounded-md p-2 bg-gray-900 md:w-2/4 w-[90%]'>
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='Team Name'
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='Team ID'
            onChange={(e) => setTeamID(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='Team Leader Name'
            onChange={(e) => setLeaderName(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='email'
            placeholder='Team Leader e-mail ID'
            onChange={(e) => setLeaderMail(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='number'
            placeholder='Team Leader Phone Number'
            onChange={(e) => setLeaderPhone(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='Team Leader Branch'
            onChange={(e) => setLeaderBranch(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='2nd Member Name'
            onChange={(e) => setMemTwo(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='email'
            placeholder='2nd Member e-Mail ID'
            onChange={(e) => setMemTwoMail(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='number'
            placeholder='2nd Member Phone Number'
            onChange={(e) => setMemTwoPhone(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='3rd Member'
            onChange={(e) => setMemThree(e.target.value)}
          />
          <input
            className='border-b-2 text-[azure] border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2'
            type='text'
            placeholder='4th Member'
            onChange={(e) => setMemFour(e.target.value)}
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full'
            onClick={createEvent}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
