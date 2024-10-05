import { auth, db } from '../../firebase-config';
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { query, orderBy, limit } from 'firebase/firestore';
import Card from './components/Card';

const MyEvents= () => {
  const isAuth = useSelector((state) => state.auth.value);
  
  const [eventLists, setEventLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, 'events');

  const q = query(postCollectionRef, orderBy("date", "desc"));

  const getEvents = async() => {
    setLoading(true);
    const data = await getDocs(q);
    console.log(data);
    setEventLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setTimeout(() =>{
      setLoading(false);
  }, 1500)
  }
  useEffect(() => {
    getEvents();
  },[])

  const deleteEvent = async(id) => {
      const eventdoc = doc(db, 'events', id);
      await deleteDoc(eventdoc);
      getEvents();
  }

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
    <div className='h-auto flex flex-col overflow-x-hidden justify-center items-center my-16 mb-8 gap-3'>
    <div className='flex h-25 justify-center items-center eheading'> 
         <h1 className="text-4xl font-black bg-blue-700 text-transparent bg-clip-text my-4 p-1 text-center">OUR EVENTS</h1>
    </div>
    <div className='flex flex-wrap justify-evenly w-11/12 gap-4'>
    {eventLists.length === 0 ? <h3>No Events to show</h3> : eventLists.map((edesc,index) => {
        return <Card key={index} {...edesc} deleteEvent={deleteEvent} isAuth={isAuth}></Card>
      })}
    </div>
      
    </div>
    </>
  )
}

export default MyEvents