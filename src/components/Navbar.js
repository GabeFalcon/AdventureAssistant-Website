import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import useLogout from '../hooks/useLogout';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeNavbarBackground = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeNavbarBackground);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    closeMobileMenu();

    // Check login status from localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false); // Update login status
    
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className={scrolled ? 'navbar navbar-scrolled' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Adventure
            <img src="/images/mascot_icon.png" alt="Adventure Assistant Logo" className="navbar-logo-image" />
            Assistant
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* Render login or logout button based on isLoggedIn state */}
          {button && (
            isLoggedIn ? (
              <Button buttonStyle='btn--outline' link='login' onClick={handleLogout}>LOG OUT</Button>
            ) : (
              <Button buttonStyle='btn--outline' link='login'>LOG IN</Button>
            )
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/guides'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Guides
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/commands'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Commands
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sources
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/support'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </li>
              <li>
                <Link
                  to='/character-sheet'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Character Sheet
                </Link>
              </li>
              {( isLoggedIn ? (
               <></>
             ) 
            : ( <li>
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
              )
            )}
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
