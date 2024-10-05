import React, { useEffect, useState } from 'react';
import Video from './Bg_video/Bg_video.jsx';
import IntroDiv from './Intro/Intro.jsx';
import Event from './Event/Event.jsx';
import TeamDiv from './TeamDiv/TeamDiv.jsx';
import Blog from './Blog/Blog.jsx';
import Contact from './ContactUs/Contact.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [eventloaded,setEventloaded]=useState(false);
  useEffect(() => {
    const introElements = [
      { trigger: '.glogo-image', animation: { xPercent: -180, duration: 1 } },
      { trigger: '.gmotto', animation: { y: 20, opacity: 0, duration: 1.5 } },
      { trigger: '.ginfo-head', animation: { xPercent: 200, duration: 1 } },
      { trigger: '.ginfo-content', animation: { y: 150, opacity: 0, duration: 0.5 } }, 
      { trigger: '.gknow-more', animation: { y: -50, opacity: 0, duration: 1, ease: 'bounce.out' } },
    ];

    const createAnimations = (elements, start) => {
      elements.forEach((el) => {
        gsap.from(el.trigger, {
          ...el.animation,
          scrollTrigger: {
            trigger: el.trigger,
            start:el.trigger === ".gmotto" || el.trigger === ".gmore-event" || el.trigger === ".gknow-more"? "top 90%" : start,
            toggleActions:"play none none none"
          },
        });
      });
    };

    // Media queries for responsive animations
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      createAnimations(introElements, "top 60%");
      // createAnimations(eventElements, "top 60%");
      // createAnimations(profelement,"top 60%");
    });

    mm.add("(max-width: 767px)", () => {
      createAnimations(introElements, "top 80%");
      // createAnimations(eventElements, "top 80%");
      // createAnimations(profelement,"top 80%");
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mm.kill();
    };
  }, []);

  return (
    <>
      <Video />
      <IntroDiv />
      <Event setEventloaded={setEventloaded} />
      <TeamDiv eventloaded={eventloaded} />
      <Blog />
      {/* <President /> */}
      <Contact />
    </>
  );
}

export default Home;
