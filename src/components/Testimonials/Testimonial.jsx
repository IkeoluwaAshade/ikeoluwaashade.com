

import React from 'react';
import TestimonialSection from './TestimonialSection'; 
import './Testimonial.css'; 



const testimonial = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    author: 'John Doe',
    jobTitle: 'Web Developer',
    company: 'ABC Company',
  },
  // Add more testimonial objects as needed
];

function Testimonial() {


  return (

    <div className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
            {testimonial.map((testimonial, index) => (
                <TestimonialSection key={index} {...testimonial} />
            ))}
        </div>
    </div> 
  );
}

export default Testimonial
