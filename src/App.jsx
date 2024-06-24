import React from 'react'
import LandingPage from './pages/Home/LandingPage'
import Blog from './pages/Blog/Blog';
import Project from './pages/Projects/Project';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div>
        <LandingPage />
        {/* <Blog /> */}
        {/* <Project /> */}
    </div>
  )
}

export default App