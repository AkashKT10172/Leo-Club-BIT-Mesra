import {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Team from './components/Team/Team.jsx'
import Events from './components/Events/Events.jsx'
import Login from './components/Blog/Pages/Login.jsx'
import BlogHome from './components/Blog/Pages/BlogHome.jsx'
import CreateBlog from './components/Blog/Pages/CreateBlog.jsx'
import UploadImage from './components/newGallery/uploadImage.jsx'
import MyGallery from './components/newGallery/myGallery.jsx'
import Admin from './components/admin/Admin.jsx'

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
          <Route path="blog" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <BlogHome />
          </Suspense>} />
          <Route path="login" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Login />
          </Suspense>} />
          <Route path="createblog" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <CreateBlog />
          </Suspense>} />
          <Route path="uploadImage" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <UploadImage />
          </Suspense>} />
          <Route path="myGallery" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <MyGallery />
          </Suspense>} />
          <Route path="admin" element={
          <Suspense fallback={<div className='min-h-screen flex justify-center items-center'>Please wait, we are Loading...</div>}>
          <Admin />
          </Suspense>} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
