import React from 'react'
import Video from './Bg_video/Bg_video.jsx'
import IntroDiv from './Intro/Intro.jsx'
import Event from './Event/Event.jsx'
import TeamDiv from './TeamDiv/TeamDiv.jsx'
import Blog from './Blog/Blog.jsx'

function Home() {
  return (
    <>
    <Video />
    <IntroDiv />
    <Event />
    <TeamDiv />
    {/* <Blog /> */}
    </>
  )
}

export default Home