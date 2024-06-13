import {React, Suspense, lazy} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Header'
const Footer = lazy(() => import('./components/Footer/Footer' ));
const Root = () => {
  return (
    <>
    <Navbar />
    <Suspense fallback={<p>This is Loading...</p>}>
    <Outlet />
    </Suspense>
    <Suspense fallback={<p>This is Loading...</p>}>
      <Footer />
    </Suspense>
    </>
  )
}

export default Root