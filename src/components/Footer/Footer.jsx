import React from 'react'
import './Footer.css'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-div'>
      <footer>
        <p><FaCopyright />2023 Ikeoluwa Ashade <br /> Built with <a href='https://reactjs.org/'>React</a></p>
      </footer>
    </div>
  )
}

export default Footer