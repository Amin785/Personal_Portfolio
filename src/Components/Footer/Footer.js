import React from 'react';
import './Footer.css';
import githubIcon from './../../assets/github-icon.png'; // your GitHub icon

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer-text'>
        Copyright &#169; 2024 Amin Geleto. All rights reserved.
      </span>
      <a 
        href="https://github.com/Amin785" 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={githubIcon} alt="GitHub" className="github-icon" />
      </a>
    </footer>
  )
}

export default Footer;
