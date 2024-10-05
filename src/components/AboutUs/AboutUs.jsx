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