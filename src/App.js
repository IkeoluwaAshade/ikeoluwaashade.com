import React from 'react'
import './App.css'
import { Header, Hero, Projects, Footer, Technologies, Testimonials } from './components'


const App = () => {
  return (
    <div className='app'>
      <div>
        <div className='background-gradient'><Header /></div>
        <Hero />
        <Projects />
        <Technologies />
        <Testimonials />
        <Footer />
      </div>

    </div>
  )
}

export default App