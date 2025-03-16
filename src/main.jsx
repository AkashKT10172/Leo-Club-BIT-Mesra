import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Root from './Root.jsx';
import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Team from './components/Team/Team.jsx';
import Events from './components/Events/Events.jsx';
import Login from './components/Blog/Pages/Login.jsx';
import BlogHome from './components/Blog/Pages/BlogHome.jsx';
import CreateBlog from './components/Blog/Pages/CreateBlog.jsx';
import UploadImage from './components/newGallery/uploadImage.jsx';
import MyGallery from './components/newGallery/myGallery.jsx';
import Admin from './components/admin/Admin.jsx';
import UploadEvents from './components/newEvent/UploadEvents.jsx';
import MyEvents from './components/newEvent/MyEvents.jsx';
import Register from './components/pantheon-registration/Register.jsx';
import Registrations from './components/pantheon-registration/Registrations.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx';
import Mismatched from './components/BITOTSAV/Mismatched.jsx';
import Takeshi from './components/BITOTSAV/Takeshi.jsx';

const Gallery = lazy(() => import('./components/Gallery/Gallery.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Home /></Suspense>} />
      <Route path="about" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><AboutUs /></Suspense>} />
      <Route path="events" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Events /></Suspense>} />
      <Route path="team" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Team /></Suspense>} />
      <Route path="gallery" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Gallery /></Suspense>} />
      <Route path="blog" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><BlogHome /></Suspense>} />
      <Route path="login" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Login /></Suspense>} />
      <Route path="createblog" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><CreateBlog /></Suspense>} />
      <Route path="uploadImage" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><UploadImage /></Suspense>} />
      <Route path="myGallery" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><MyGallery /></Suspense>} />
      <Route path="uploadEvents" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><UploadEvents /></Suspense>} />
      <Route path="myEvents" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><MyEvents /></Suspense>} />
      <Route path="admin" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Admin /></Suspense>} />
      <Route path="mm-registration" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Register /></Suspense>} />
      <Route path="mm-registrations-list" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Registrations /></Suspense>} />
      <Route path="mismatched-registrations-list" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Mismatched /></Suspense>} />
      <Route path="takeshi-registrations-list" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><Takeshi /></Suspense>} />
      <Route path="register" element={<Suspense fallback={<div className="min-h-screen flex justify-center items-center">Please wait, we are Loading...</div>}><RegistrationForm /></Suspense>} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
