import React from 'react'
import LandingPage from './pages/LandingPage'
import TechnologySection from './components/layout/TechnologySection'
import EndorsementSection from './components/layout/EndorsementSection'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div>
        <LandingPage />
        <TechnologySection />
        <EndorsementSection />
        
    </div>
  )
}

export default App