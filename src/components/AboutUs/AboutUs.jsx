import {React,useRef }from 'react'
import {Typewriter} from 'react-simple-typewriter'
import FramerAnimation from './FramerAnimation'
import grpImg from '/src/components/AboutUs/img3.png'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import './AboutUs.css'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const motto=useRef();
  useGSAP(()=>{
    gsap.from(motto.current,{
      transform:'translateX(100%)',
      duration:3,
      scrollTrigger:{
        trigger:motto.current,
        scroller:"body",
        start:"top 70%",
      },
      ease:"none"
    })  
  })
  return (
    <div className='Acontainer overflow-x-hidden'>
     <div className='imgdiv flex h-auto relative max-h-[96vh] justify-center -m-1'>
      <img src={grpImg} className='object-cover bg-fixed z-0'></img>
      <h1 className='text-xl sm:text-4xl absolute top-1/2  text-white font-nova font-semibold z-10'>
         About{' '}
        <span className='font-bold font-serif ' > <Typewriter
            words={['Us',"LEO"]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1000}/>
          </span> 

      </h1>
      </div>
     
      
       <div className="Acontent m-auto z-10">
      <span className='font-nova text-[20px] text-blue-900 font-bold flex justify-center'>WHO WE ARE</span>
      <p className='font-nova text-[18px] text-blue-900 ml-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      </p>
    </div>
    <div className='w-full h-[150px] sm:h-[120px] bg-[#f9ede0] flex justify-center items-center font-serif text-blue-900 text-[32px] text-center tracking-wider'>
      {/* <FramerAnimation></FramerAnimation> */}
      <div ref={motto}  className='w-full place-content-center'>
           WORKING FOR A CAUSE ALWAYS
      </div>
    </div>
    <div className='Acontent m-auto'>
    <span className='font-nova text-[20px] text-blue-900 font-bold flex justify-center'>WHAT WE DO</span>
      <p className='font-nova text-[18px] text-blue-900 ml-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at laoreet rutrum. Donec sed odio dui. Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      Fusce dapibus, tellus quis lacinia congue, erat lorem pulvinar nunc, condimentum feugiat nisl purus pretium nulla.
      </p>
    </div>
    </div>
  )
}

export default AboutUs