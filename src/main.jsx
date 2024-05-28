import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Team from './components/Team/Team.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Events from './components/Events/Events.jsx'
import Blog from './components/Blog/Blog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root/>} >
        <Route path="" element={<Home/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="events" element={<Events/>} />
        <Route path="team" element={<Team/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="blog" element={<Blog />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
