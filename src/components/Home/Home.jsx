import React from 'react'
import Video from './Bg_video/Bg_video.jsx'
import IntroDiv from './Intro/Intro.jsx'
import Event from './Event/Event.jsx'
import TeamDiv from './TeamDiv/TeamDiv.jsx'
import Blog from './Blog/Blog.jsx'
import President from './President/President.jsx'
import Contact from './ContactUs/Contact.jsx'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    let t1_1=gsap.timeline({
      scrollTrigger:{
        trigger:".gintro",
        start:"top center",
      },
    });

    t1_1.from(".glogo-image",{xPercent:-180,duration:1});
    t1_1.from(".gmotto",{y:20,duration:1});
    t1_1.from(".gmotto",{opacity:0,duration:1.5},1);  

    t1_1.from(".ginfo-head",{xPercent:200,duration:1},0);
    t1_1.from(".ginfo-content",{scale:0,duration:1.5},1);

    t1_1.from(".gknow-more",{y:-100,duration:1,ease:"bounce.out"},2);
    t1_1.from(".gknow-more",{opacity:0,duration:1},2.5);


  })
  return (
    <>
    <Video />
    <IntroDiv />
    <Event />
    <TeamDiv />
    {/* <Blog /> */}
    <President />
    <Contact />
    </>
  )
}

export default Home