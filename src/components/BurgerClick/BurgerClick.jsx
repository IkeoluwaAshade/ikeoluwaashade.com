import React from 'react'
import './BurgerClick.css'

const BurgerClick = () => {
  return (
    <div className='main-burger'>
        <main>
          <ul>

            <li className='burger-nav-link'>
              <a href='#'>About</a>
            </li>

            <li className='burger-nav-link'>
              <a href='#'>Projects</a>
            </li>

            <li className='burger-nav-link'>
              <a href='#'>Blog</a>
            </li>

          </ul>
        </main>
    </div>
  )
}

export default BurgerClick