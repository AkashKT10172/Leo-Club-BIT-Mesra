import { db } from '../../firebase-config';
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Mismatched = () => {
  const isAuth = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const [mismatchedData, setMismatchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const mismatchedCollectionRef = collection(db, 'mismatched'); // Updated to 'mismatched' collection

  const getData = async () => {
    setLoading(true);
    const data = await getDocs(mismatchedCollectionRef);
    setMismatchedData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTimeout(() => {
        setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    } else {
      getData();
    }
  }, [isAuth, navigate]);

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
      <div className="min-h-screen mt-[60px] p-8 bg-gradient-to-b from-[#4889f2] via-[#4889f2]-500 to-black">
        <h1 className="text-center text-4xl underline mb-6">
          Mismatched Registrations
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-6">
          <div className="border-2">
            <p className="h-16 sm:h-14 md:h-12 text-sm sm:text-base md:text-xl border-b-2 p-1 text-[purple]">Team Name</p>
            {mismatchedData.map((data) => (
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
            {mismatchedData.map((data) => (
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
            {mismatchedData.map((data) => (
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
            {mismatchedData.map((data) => (
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
            {mismatchedData.map((data) => (
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
            {mismatchedData.map((data) => (
              <p
                key={data.id}
                className=" h-14 border-b-2 overflow-x-auto text-sm sm:text-base md:text-xl whitespace-nowrap p-2 text-white"
              >
                {data.leaderEmail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mismatched;
