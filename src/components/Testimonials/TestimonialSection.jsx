import React from 'react'
import './Testimonial.css'





  const Testimonial =  ({ text, author, jobTitle, company, })    => { 

  return (
    <div className='testimonial-card'>
      <div className='testimonial-text'>
        <q>{text}</q>
      </div>

      <div className='author-info'>
        <img src="/Images/Dp.jfif" alt={author} className='author-image' />
        <div className='author-details'>
          <p className='author-name'>{author}</p>
          <p className='job-title'>{jobTitle}</p>
          <p className='company'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial 
















/* import React from 'react'
import './Testimonial.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';



const Testimonial = () => {

  return (
    <div>
      
      <Carousel>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="First slide"
          />

          <Carousel.Caption>

            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>

            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>

            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          </Carousel.Caption>

        </Carousel.Item>
      
      </Carousel>
    </div> 
  ) 
  }


export default Testimonial
*/

