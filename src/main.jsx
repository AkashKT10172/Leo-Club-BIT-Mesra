import {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Team from './components/Team/Team.jsx'
import Events from './components/Events/Events.jsx'
import Blog from './components/Blog/Blog.jsx'
const Gallery = lazy(() => import('./components/Gallery/Gallery.jsx' ));


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root/>} >
        <Route path="" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Home/>
          </Suspense>} />
        <Route path="about" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <AboutUs/>
          </Suspense>} />
        <Route path="events" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Events/>
          </Suspense>} />
        <Route path="team" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Team/>
          </Suspense>} />
        <Route path="gallery" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Gallery />
          </Suspense>} />
        <Route path="blog" element={<Blog />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
