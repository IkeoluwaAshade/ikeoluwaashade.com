import React from 'react';
import './Technology.css';

function Technology() {
  const technologies = [
    
    {
      name: 'HTML5',
      imageUrl: '/Images/Icons/html5-24x24.png',
    },

    {
      name: 'CSS',
      imageUrl: '/Images/Icons/css3-24x24.png',
    },

    {
      name: 'JavaScript',
      imageUrl: '/Images/Icons/java-script-24x24.png',
    },

    {
      name: 'React',
      imageUrl: '/Images/Icons/react-24x24.png',
    },

    {
      name: 'GitHub',
      imageUrl: '/Images/Icons/github-24x24.png',
    },

    {
      name: 'Figma',
      imageUrl: '/Images/Icons/figma-24x24.png',
    },

    {
      name: 'Photoshop',
      imageUrl: '/Images/Icons/photoshop-24x24.png',
    },

    {
      name: 'Premiere pro',
      imageUrl: '/Images/Icons/premiere-24x24.png',
    },

    {
      name: 'wordpress',
      imageUrl: '/Images/Icons/wordpress-24x24.png',
    },

    {
      name: 'visual-studio',
      imageUrl: '/Images/Icons/visual-studio-24x24.png',
    },

    {
      name: 'Blogger',
      imageUrl: '/Images/Icons/blogger-24x24.png',
    },
    // Add more technology and tools objects here
  ];

  return (
    <section id='technology-section'>
      <h2>Technologies and Tools</h2>
      <div className='technology-list'>
        {technologies.map((tech, index) => (
          <div key={index} className='technology-item'>
            <div className='technology-card'>
              <img src={tech.imageUrl} alt={tech.name} />
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technology;
