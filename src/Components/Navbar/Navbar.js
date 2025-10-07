import React, { useState } from 'react'
import './Navbar.css'
import logo from './../../assets/logo_size.jpg'
import contactImg from './../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from './../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt={logo} className='logo' />
        <div className='discktopMenu'>
            <Link activeClass='active' to='intro' spy ={true} smooth = {true} offset={-100} duration={500} className='descktopMenuListitem'>Home</Link>
            <Link activeClass='active' to='skills' spy ={true} smooth = {true} offset={-80} duration={500} className='descktopMenuListitem'>About</Link>
            <Link activeClass='active' to='works' spy ={true} smooth = {true} offset={-80} duration={500} className='descktopMenuListitem'>Projects</Link>
            <Link activeClass='active' to='client' spy ={true} smooth = {true} offset={-80} duration={500} className='descktopMenuListitem'>Experience</Link>
        </div>
        <button className='discktopMenuBtn' onClick={()=> {
          document.getElementById("contact").scrollIntoView({behavior: "smooth"})
        }}>
            <img src={contactImg} alt='' className='discktopMenuImg' />Contact Me</button>

            <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy ={true} smooth = {true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy ={true} smooth = {true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy ={true} smooth = {true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='client' spy ={true} smooth = {true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='contacts' spy ={true} smooth = {true} offset={-125} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Contact</Link>

        </div>

    </nav>
  )
}

export default Navbar
