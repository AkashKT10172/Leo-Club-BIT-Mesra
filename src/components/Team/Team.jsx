import React from 'react'
import juniors from './juniors'
import seniors from './seniors';
import faculty from './faculty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const myJuniorMem = juniors.juniorMembers;
const mySeniorMem = seniors.seniorMembers;
const myFacultyMem = faculty.facultyMembers;
const Team = () => {
  return (
    <>
    <div className='mt-16 flex flex-col items-center justify-center'>
    <div>
    <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">FACULTY MEMBERS</h1>
    <div className='flex flex-wrap justify-center items-center' >
    {myFacultyMem.map((mem)=> 
    <div className='flex flex-col object-contain justify-evenly items-center h-96 w-72 px-2 m-3 bg-[#fff9f2] rounded-md md:h-96 md:w-96 ease-in-out duration-200 sm:hover:scale-105 hover:shadow-lg hover:shadow-blue-500'>
        <img className = "member-image h-56 w-56 rounded-full mt-3" src={mem.image} loading='lazy'/>
        <p className='text-blue-900 mt-2'>{mem.name}</p>
        <p className='text-black my-1'>{mem.designation}</p>
        <div className="flex flex-col items-center text-slate-500 my-1 list-none cursor-pointer">
              <li className='hover:text-green-500 '>{mem.mobile}</li>
              <li className='hover:text-green-500 '>{mem.mail}</li>
        </div>
    </div>
    )
    }
    </div>
    </div>
    <div>
    <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">SENIOR EXECUTIVE BODY</h1>
    <div className='flex flex-wrap justify-center items-center' >
    {mySeniorMem.map((mem)=> 
    <div className='flex flex-col justify-evenly items-center h-96 w-72 px-2 m-3 bg-[#fff9f2] rounded-md md:h-96 md:w-96 ease-in-out duration-200 sm:hover:scale-105 hover:shadow-lg hover:shadow-blue-500'>
        <img className = "member-image h-56 w-56 rounded-full mt-3" src={mem.image}/>
        <p className='text-blue-900 mt-2'>{mem.name}</p>
        <p className='text-black my-1'>{mem.designation}</p>
        <div className="f-socials text-slate-500 my-1">
              <li className='hover:text-green-500 '><a target='_blank' href={`https://www.twitter.com/${mem.twitter}`}><FontAwesomeIcon icon={faTwitter} size="xl"/></a></li>
              <li className='hover:text-green-500 '><a target='_blank' href={`https://www.linkedin.com/in/${mem.linkedin}`}><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></li>
              <li className='hover:text-green-500 '><a target='_blank' href={`https://www.instagram.com/${mem.instagram}`}><FontAwesomeIcon icon={faInstagram} size="xl"/></a></li>
        </div>
    </div>
    )
    }
    </div>
    </div>
    <div>
    <h1 className="text-4xl font-black bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-transparent bg-clip-text my-4 p-1 text-center">JUNIOR EXECUTIVE BODY</h1>
    <div className='flex flex-wrap justify-center items-center' >
    {myJuniorMem.map((mem)=> 
    <div className='flex flex-col justify-evenly items-center h-96 w-72 px-2 m-3 bg-[#fff9f2] rounded-md md:h-96 md:w-96 ease-in-out duration-200 sm:hover:scale-105 hover:shadow-lg hover:shadow-blue-500'>
        <img className = "member-image h-56 w-56 object-cover rounded-full mt-3" src={mem.image}/>
        <p className='text-blue-900 mt-2'>{mem.name}</p>
        <p className='text-black my-1'>{mem.designation}</p>
        <div className="f-socials text-slate-500 my-1">
              <li className='hover:text-green-500 '><a target='_blank' href={`https://www.twitter.com/${mem.twitter}`}><FontAwesomeIcon icon={faTwitter} size="xl"/></a></li>
              <li className='hover:text-green-500 '><a target='_blank' href={`https://www.linkedin.com/in/${mem.linkedin}`}><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></li>
              <li className='hover:text-green-500'><a target='_blank' href={`https://www.instagram.com/${mem.instagram}`}><FontAwesomeIcon icon={faInstagram} size="xl"/></a></li>
        </div>
    </div>
    )
    }
    </div>
    </div>
    </div>
    </>
  )
}

export default Team