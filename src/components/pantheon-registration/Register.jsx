import React, {useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../../firebase-config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Register = () => {
  const isAuth = useSelector((state) => state.auth.value)

  const[teamName, setTeamName] = useState('');
  const[teamID, setTeamID] = useState('');
  const[leaderName, setLeaderName] = useState('');
  const[leaderMail, setLeaderMail] = useState('');
  const[leaderPhone, setLeaderPhone] = useState('');
  const[leaderBranch, setLeaderBranch] = useState('');
  const[memtwo, setMemTwo] = useState('');
  const[memTwoMail, setMemTwoMail] = useState('');
  const[memTwoPhone, setMemTwoPhone] = useState('');
  const[memThree, setMemThree] = useState('');
  const[memFour, setMemFour] = useState('');



  let navigate = useNavigate();

  const eventCollectionRef = collection(db, 'registrations');
  const createEvent = async() => {
    if(teamID === ''){
      alert('Fill the fields')
      return false
    } else {
      try {
        await addDoc(eventCollectionRef, {
          teamName, teamID, leaderName, leaderMail, leaderPhone, leaderBranch, memtwo, memTwoMail, memTwoPhone, memThree, memFour 
        })
        console.log(teamName, teamID, leaderName);
        navigate('/');
      } catch(error){
        console.log('error')
      }
      
    }
  }
  return (
    <div className='bg-[azure] h-auto mt-[60px] pb-[30px] bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black'>
      <div className='flex flex-col items-center'>
       <h1 className='font-bold text-2xl text-[azure] my-4 underline text-center'>Murder Mystery '24 Registration</h1>
       <div className='border-2 border-black rounded-md p-2 bg-gray-900 md:w-2/4 w-[90%]'>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='Team Name'  
          onChange={(e) => setTeamName(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='Team ID'  
          onChange={(e) => setTeamID(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='Team Leader Name'  
          onChange={(e) => setLeaderName(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="email" placeholder='Team Leader e-mail ID'  
          onChange={(e) => setLeaderMail(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="number" placeholder='Team Leader Phone Number'  
          onChange={(e) => setLeaderPhone(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='Team Leader Branch'  
          onChange={(e) => setLeaderBranch(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='2nd Member Name'  
          onChange={(e) => setMemTwo(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="email" placeholder='2nd Member e-Mail ID'  
          onChange={(e) => setMemTwoMail(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="number" placeholder='2nd Member Phone Number'  
          onChange={(e) => setMemTwoPhone(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='3rd Member'  
          onChange={(e) => setMemThree(e.target.value)}/>
          <input className='border-b-2 border-slate-200 bg-transparent placeholder-gray-200 p-2 w-full focus:outline-none focus:border-blue-500 h-[30px] md:my-5 my-2' type="text" placeholder='4th Member'  
          onChange={(e) => setMemFour(e.target.value)}/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full' onClick={createEvent}>Submit</button>
      </div>
       </div>
    </div>
  )
}

export default Register