import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import galleryImg from './galleryImg'
import leoLogo from './leoLogo.png'
const galleryImgs = galleryImg.images;
import { handleClick } from '../onClick'


function Footer() {
  return (
    <>
      <footer className='min-h-full bg-black'>
      <div className='flex justify-center items-center md:flex-row flex-col-reverse bg-black text-white py-4 px-4 border-t-2 border-teal-300'>
        <div className='sm:w-2/4 w-full flex justify-center items-center sm:flex-row flex-col'>
            <div className='sm:w-2/4 w-full flex flex-col justify-center items-center '>
              <img src={leoLogo} alt="" className='w-60 h-60' />
              <div className='flex flex-wrap justify-center items-center'>
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">LEADERSHIP&nbsp;&nbsp;</span>
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">EXPERIENCE&nbsp;&nbsp;</span>
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">OPPURTUNITY</span>
              </div>
            </div>
            <div className='sm:w-2/4 w-full flex flex-col justify-center items-center '>
              <NavLink to='/' className='py-2 underline hover:text-teal-400' onClick={handleClick}>Home</NavLink>
              <NavLink to='/events' className='py-2 underline hover:text-teal-400' onClick={handleClick}>Events</NavLink>
              <NavLink to='/blog' className='py-2 underline hover:text-teal-400' onClick={handleClick}>Blog</NavLink>
              <NavLink to='/team' className='py-2 underline hover:text-teal-400' onClick={handleClick}>Team</NavLink>
              <NavLink to='/about' className='py-2 underline hover:text-teal-400' onClick={handleClick}>About Us</NavLink>
            </div>
        </div>
        <div className='sm:w-2/4 w-full flex flex-wrap justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center'>
              {galleryImgs.map((img) =>
              <img className = "member-image h-44 w-1/3 px-2 mt-3 hover:scale-110 transition-all" src={img.image}/>
            )}
            </div>
            <NavLink to='/gallery' className='py-2 underline text-teal-400' onClick={handleClick}>See all Images &#8594;</NavLink>
        </div>
      </div>
      <div className='bg-black h-auto text-white flex flex-col sm:flex-row px-6 py-3 border-t-2 border-teal-300'>
        <div className='sm:w-1/3 w-full flex sm:justify-center justify-start items-center'>
            <li className='list-none px-1'><FontAwesomeIcon icon={faLocationDot} size="xl"/></li>
            <div className='sm:mx-1 mx-2'>
              <p className='underline text-teal-400'>Find Us</p>
              <p>Birla Institute of Technology, Mesra, Ranchi, Jharkhand, 835215</p>
            </div>
        </div>
        <div className='sm:w-1/3 w-full flex sm:justify-center justify-start items-center'>
        <li className='list-none px-1'><FontAwesomeIcon icon={faPhone} size="xl"/></li>
        <div className='mx-1'>
              <p className='underline text-teal-400'>Call Us</p>
              <p>+91-6969696969</p>
            </div>
        </div>
        <div className='sm:w-1/3 w-full flex sm:justify-center justify-start items-center'>
        <li className='list-none px-1'><FontAwesomeIcon icon={faEnvelope} size="xl"/></li>
        <div className='mx-1'>
              <p className='underline text-teal-400'>Mail Us</p>
              <p>leobitmesra@gmail.com</p>
            </div>
        </div>
      </div>
      <div className='bg-black h-auto flex flex-col  px-5 py-5 sm:flex-row border-t-2 border-teal-300'>
        <p className='text-white sm:w-2/4 flex justify-center items-center sm:justify-start'>2024 © Leo Club BIT Mesra</p>
        <div className='flex sm:w-2/4 justify-evenly my-1'>
        <li className= 'text-white list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faTwitter} size="xl"/></a></li>
        <li className= 'text-white list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faFacebook} size="xl"/></a></li>
        <li className= 'text-white list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faInstagram} size="xl"/></a></li>
        <li className= 'text-white list-none px-1 hover:scale-125 hover:text-teal-400 transition-all'><a target='_blank' 
        href={`https://www.twitter.com/`}><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></li>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;