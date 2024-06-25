import {React,useRef }from 'react'
import {Typewriter} from 'react-simple-typewriter'
import FramerAnimation from './FramerAnimation'
import grpImg from '/src/components/AboutUs/batchphotok20.jpg'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import './AboutUs.css'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const motto=useRef();
  useGSAP(()=>{
    // gsap.from(motto.current,{
    //   transform:'translateX(100%)',
    //   duration:2,
    //   scrollTrigger:{
    //     trigger:motto.current,
    //     scroller:"body",
    //     start:"top 90%",
    //   },
    //   ease:"none"
    // })  
  })
  return (
    <div className='Acontainer overflow-x-hidden'>
     <div className='imgdiv flex h-auto relative max-h-[96vh] justify-center -m-1'>
      <img src={grpImg} className='object-cover bg-fixed z-0'></img>
      <h1 className='text-xl  sm:text-4xl absolute top-1/2 font-nova text-white font-semibold z-10'>
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
      <span className='font-nova text-[20px] text-blue-900 font-bold flex justify-center underline'>WHO WE ARE</span>
      <p className='font-nova text-[18px] text-blue-900  text-justify' >We are the Leos, a formidable group of young leaders bonded by a shared roar of
       determination and action. We do not merely discuss change; we make it happen.
        Aligned with Lions Clubs International, the world's largest service club organization, we receive guidance from experienced mentors to amplify our impact. 
        Together, we transform ideas into reality, making a positive difference in our communities and beyond. 
        From organizing donation drives for underprivileged children to spearheading environmental conservation projects, Leos turn innovative ideas into impactful initiatives, leaving a lasting influence.
      </p>
    </div>
    <div className='w-full h-[150px] sm:h-[120px] bg-[#f9ede0] flex justify-center items-center font-serif text-blue-900 text-[32px] text-center tracking-wider'>
      {/* <FramerAnimation></FramerAnimation> */}
      <div ref={motto}  className='w-full place-content-center'>
           WORKING FOR A CAUSE ALWAYS
      </div>
    </div>
    <div className='Acontent m-auto'>
    <span className='font-nova text-[20px] text-blue-900 font-bold flex justify-center underline'>WHAT WE DO</span>
      <p className='font-nova text-[18px] text-blue-900  text-justify' >At Leo Club, we are dedicated to serving our communities and fostering positive change through a variety of impactful initiatives. Our activities span across multiple areas to address diverse community needs. Here's a glimpse of what we do:<br/>
* Community Service:We organise and participate in numerous service projects that uplift those in need and provide essential resources to improve their quality of life. This includes donation drives for orphanages, where we collect and distribute clothes, toys, and essential supplies, as well as stationary drives to provide school supplies to underprivileged students.<br/>
* Youth Empowerment: We believe in the power of young people to lead and inspire. Our Mending Minds initiative underscores the profound significance of emotional well-being, promoting mental health awareness and support among youth to ensure their holistic development. <br/>
* Cultural Activities: Leos embrace the richness of cultural diversity through fun and engaging activities. We host events like Murder Mystery, which brings people together through shared problem-solving experiences. Our event Deepotsav, celebrates the festival of lights, is enhanced with dance, music, and camaraderie. Through many such diverse projects , we strive to make a meaningful and lasting impact and  celebrate various traditions, foster mutual understanding, and strengthen community bonds. Our commitment to service, leadership, and innovation drives us to c
ontinually seek new ways to improve our world and the lives of those around us.<br/>
      </p>
    </div>
    </div>
  )
}

export default AboutUs