import { db } from '../../firebase-config';
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Registrations = () => {
  const isAuth = useSelector((state) => state.auth.value);
  const navigate = useNavigate()
  const [registrationsData, setRegistrationsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dataCollectionRef = collection(db, 'registrations');

  const getData = async () => {
    setLoading(true);
    const data = await getDocs(dataCollectionRef);
    setRegistrationsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTimeout(() =>{
        setLoading(false);
    }, 1500) 
    };

  useEffect(() => {
    if(!isAuth) {
        navigate('/login')
    } else {
        getData();
    }    
}, []);


if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="loader"></div>
        <style jsx>{`
          .loader {
            border: 16px solid #f3f3f3;
            border-top: 16px solid #3498db;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }


  return (
    <>
      <div className="min-h-screen mt-[60px] p-8 bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black">
        <h1 className="text-center text-4xl underline mb-6">
          Murder Mystery Registrations
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-6">
          <div className="border-2">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Team Name</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className="h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.teamName}
              </p>
            ))}
          </div>
          <div className="border-2">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Team ID</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className="h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.teamID}
              </p>
            ))}
          </div>
          <div className="border-2">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Leader's Name</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className="h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.leaderName}
              </p>
            ))}
          </div>
          <div className="border-2">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Leader's Phone</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className="h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.leaderPhone}
              </p>
            ))}
          </div>
          <div className="border-2 hidden sm:block">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Leader's Branch</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className=" h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.leaderBranch}
              </p>
            ))}
          </div>
          <div className="border-2 hidden sm:block">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Leader's Mail</p>
            {registrationsData.map((data) => (
              <p
                key={data.id}
                className=" h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.leaderMail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrations;
