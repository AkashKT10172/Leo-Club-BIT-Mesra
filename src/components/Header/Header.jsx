import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import leoLogo from './leoLogo.png'
import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  const [navState, setNavState] = useState(false);
  const [navVis, setNavVis] = useState(false);
  const handleNavClick = () => {
        setNavState(!navState);
        if(window.scrollY <=60) setNavVis(!navVis);
  }
  let toggleHamClass = navState ? 'active':null;

  const [modeState, setModeState] = useState(false);
  const handleModeClick = () => {
        setModeState(!modeState);
  }
  let toggleModeClass = modeState ? '-anim':null;

  
  const changeBg = () => {
    if(window.scrollY >=100){
      setNavVis(true);
    } else {
      setNavVis(false);
    }
  };
  window.addEventListener('scroll', changeBg);

  return (
    <div className={(!navVis && (usePathname()==="/")) ? 'app' : 'app activeapp'}>
      <div className="nav"> 
        <div className = "logo-container">
        <NavLink to="/" className="logo-cont-a"><img src={leoLogo}></img></NavLink>
      </div>
      <div className={`navigation-items ${toggleHamClass}`}>
      <NavLink to="/" className={({isActive}) => `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={usePathname !== "/" ? handleNavClick: null}>
          Home
      </NavLink>
      <NavLink to="/events" className={({isActive}) => `block py-2 pr-2 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={handleNavClick}>
          Events
      </NavLink>
      <NavLink to="/blog" className={({isActive}) => `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={handleNavClick}>
          Blog
      </NavLink>
      <NavLink to="/team" className={({isActive}) => `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={handleNavClick}>
          Team
      </NavLink>
      <NavLink to="/gallery" className={({isActive}) => `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={handleNavClick}>
          Gallery
      </NavLink>
      <NavLink to="/about" className={({isActive}) => `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-orange-700" : "text-white"} 
      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} onClick={handleNavClick}>
          About Us
      </NavLink>
      </div>
      <div className={`hamburger ${toggleHamClass}`} onClick = {handleNavClick}>
              <span className="ham-bar"></span>
              <span className="ham-bar"></span>
              <span className="ham-bar"></span>
      </div>
      </div>
      <div className="mode-change" onClick = {handleModeClick}>
          <div className={`sun sun-logo sun${toggleModeClass}`}><FontAwesomeIcon icon={faSun} size="xl" /></div>
          <div className={`moon moon-logo moon${toggleModeClass}`}><FontAwesomeIcon icon={faMoon} size ="xl"/></div>
      </div>
    </div>
  );
}

export default Navbar;
