import React from 'react'
import Header from '../../components/static/Header'
import HeroSection from './HeroSection'
import TechnologySection from './TechnologySection'
import EndorsementSection from './EndorsementSection'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <TechnologySection />
      <EndorsementSection />
    </div>
  )
}

export default Home