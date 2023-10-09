import React, { useState } from 'react'
import './Header.css'
import { FaBookOpen } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'
import { FaBlogger } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { SiFrontendmentor } from 'react-icons/si'

import { BsToggle2On } from 'react-icons/bs'
import { BsToggle2Off } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

import BurgerClick from '../BurgerClick/BurgerClick'
import { GiCancel } from 'react-icons/gi'



const Header = () => {

  const [toggle, setToggle] = useState(false)

  const toggleChange = () => {
    setToggle(!toggle)

    // console.log(toggle)

  }


  return (

    <div className={`${toggle ? 'dark-mode' :'main-header' }`}>

    <div className='main-header'>

      <div className='header-hold'>
        
        <div className='logo-div'>
          <h1>Ikeoluwa Ashade</h1>
        </div>

        <ul className='nav-links'>

          <li className='navigation'>
            <FaBookOpen />
            <a  href='#'>About</a>
          </li>

          <li className='navigation'>
            <VscProject />
            <a>Projects</a>
          </li>

          <li className='navigation'>
            <FaBlogger />

            <a href='https://ikeoluwaashade.blogspot.com/'>Blog</a>

            
          </li>

        </ul>

        <div className='social-divs'>

          <div className='socials hover-text'>
            <a  href='https://github.com/IkeoluwaAshade'><FaGithub /></a>
            <span className='tooltip tooltip-text id="top"'>Github</span>
          </div>

          <div className='socials hover-text'>
            <a href='https://www.linkedin.com/in/ikeoluwaashade'><GrLinkedin /></a>
            <span className='tooltip-text id="top"'>LinkedIn</span>
          </div>

          <div className='socials hover-text'>
            <a href='https://www.frontendmentor.io/profile/IkeoluwaAshade'><SiFrontendmentor /></a>
            <span className='tooltip-text id="top"'>Frontend Mentor</span>
          </div>


          {/* =========================================================== */}
          {/* =============== Light and Dark Mode ======================= */}
          {/* =========================================================== */}


          <div className='light-n-dark-toggle-switch'> 
            
            <div className='light-n-dark-toggle-switch' onClick={toggleChange}>
              {toggle ? (
              < BsToggle2On size={25} /> /* Light Mode */
              ) : (
              < BsToggle2Off size={25} />  /* Dark Mode */
              )}        
            </div>

          </div>

        </div>

        
        {/* =========================================================== */}
        {/* ================== Hamburger toggle ======================= */}
        {/* =========================================================== */}


        <div className='burger-icon-hold' onClick={toggleChange}>
          {toggle ? (
            < GiCancel />
          ) : (
          < GiHamburgerMenu />
          )}        
        </div>

      </div>

      <div className='burger-content-hold'>
        {toggle ? <BurgerClick /> : null}
      </div>

    </div>
    </div>
  )
}

export default Header