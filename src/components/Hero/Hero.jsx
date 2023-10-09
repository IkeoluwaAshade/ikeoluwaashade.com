import React from 'react'
import './Hero.css'
import profilePicture from '../Images/Dp.jfif' 

/*import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css'; */



const Hero = () => {
    // const [open, setOpen] = useState(false);

  return (
    <div className='hero-section'>
        <div className='hero-hold'>

            <figure>
                <img src={ profilePicture } alt="Head Shot of Ikeoluwa" width={'270px'} height={'200px'} />
            </figure>

            <div className='about-me'>
                <h1>
                    Software Engineer || Photographer ||Visual designer
                </h1>

                <p>
                    Hello there! I'm a multi-faceted individual with a strong passion for technology and creativity.  
                    {/* <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    >
                        Here's a bit about me:
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                        <ol>
                    <li>
                        Software Engineer
                    </li>
                    <p>
                        I'm a dedicated software engineer with a penchant for crafting exceptional web applications that makes a difference. My commitment to staying at the forefront of web technologies ensures I deliver solutions that are not just functional but also cutting-edge.
                    </p>

                    <li>
                        Photographer
                    </li>
                    <p>
                        When I'm not immersed in code I'm behind the lens capturing moments that tell stories. Photography is my way of freezing time and sharing the beauty I see in the world. Whether it's landscapes, portraits, or street photography. I find inspiration in every shutter-button.
                    </p>

                    <li>
                        Design Enthusiast
                    </li>
                    <p>
                        My journey as a designer has given me a keen eye for aesthetics and user-centric design. I believe that great design goes hand in hand with exceptional development and i'm always looking to marry the two seamlessly.
                    </p>

                    
                </ol>
                        </div>
                    </Collapse> */}
                </p>

                

                <div>
                    <button>Hire me</button>
                    <button>View my works</button>
                </div>
            </div>
        </div>

    </div>

        
    )
}

export default Hero