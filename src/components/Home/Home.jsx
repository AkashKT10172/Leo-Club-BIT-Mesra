import React from 'react'
import Video from './Bg_video/Bg_video.jsx'
import IntroDiv from './Intro/Intro.jsx'
import Event from './Event/Event.jsx'
import TeamDiv from './TeamDiv/TeamDiv.jsx'
import Blog from './Blog/Blog.jsx'
import President from './President/President.jsx'
import Contact from './ContactUs/Contact.jsx'
function Home() {
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