import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();


  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript('/assets/js/mobilenav.js');
  }, [location.pathname]);

  return (
    <ul className="nav navbar-nav">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About us</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
      <li><NavLink to="/services">All Services</NavLink></li>
      <li><NavLink to="/team-1">Team</NavLink></li>
      {/* <li><NavLink to="/our-history">Our History</NavLink></li> */}
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/blogs">Blog</NavLink></li>
      <li><NavLink to="/faq">FAQ</NavLink></li>
      <li><NavLink to="/contact-us">Contact Us</NavLink></li>
    </ul>
  );
};

export default Navigation;
