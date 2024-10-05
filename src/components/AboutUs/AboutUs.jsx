import {React, useState}from 'react'
import {Typewriter} from 'react-simple-typewriter'
import grpImg from '/src/components/AboutUs/batchphotok20.jpg'
import './AboutUs.css'

const AboutUs = () => {
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
      <div className='w-full place-content-center'>
           WORKING FOR A CAUSE ALWAYS
      </div>
    </div>
    <div className='Acontent m-auto'>
    <span className='font-nova text-[20px] text-blue-900 font-bold flex justify-center underline'>WHAT WE DO</span>
      <p className='font-nova text-[18px] text-blue-900  text-justify' >At Leo Club, we are dedicated to serving our communities and fostering positive change through a variety of impactful initiatives. Our activities span across multiple areas to address diverse community needs. Here's a glimpse of what we do:<br/>
<span className='text-[#f4ca99]'>* Community Service:</span> We organise and participate in numerous service projects that uplift those in need and provide essential resources to improve their quality of life. This includes donation drives for orphanages, where we collect and distribute clothes, toys, and essential supplies, as well as stationary drives to provide school supplies to underprivileged students.<br/>
<span className='text-[#f4ca99]'>* Youth Empowerment:</span> We believe in the power of young people to lead and inspire. Our Mending Minds initiative underscores the profound significance of emotional well-being, promoting mental health awareness and support among youth to ensure their holistic development. <br/>
<span className='text-[#f4ca99]'>* Cultural Activities:</span> Leos embrace the richness of cultural diversity through fun and engaging activities. We host events like Murder Mystery, which brings people together through shared problem-solving experiences. Our event Deepotsav, celebrates the festival of lights, is enhanced with dance, music, and camaraderie. Through many such diverse projects , we strive to make a meaningful and lasting impact and  celebrate various traditions, foster mutual understanding, and strengthen community bonds. Our commitment to service, leadership, and innovation drives us to c
ontinually seek new ways to improve our world and the lives of those around us.<br/>
      </p>
    </div>
    </div>
  )
}

export default AboutUs