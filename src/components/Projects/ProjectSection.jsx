// ProjectSection.js

import React from 'react';
import './Project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard';



const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/nft-design.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  {
    title: 'Project 2',
    description: 'Description of project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/stats-preview.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  {
    title: 'Project 3',
    description: 'Description of project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/3-column-preview1440x900.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  {
    title: 'Project 4',
    description: 'Description of project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/qr-code.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  {
    title: 'Project 5',
    description: 'Description of project 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/single-price.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  {
    title: 'Project 6',
    description: 'Description of project 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
    imageUrl: '/Images/profile-card.jpg',
    liveLink: 'https://example.com/project1',
    sourceCode: 'https://example.com/project1',
  },

  // {
  //   title: 'Project 7',
  //   description: 'Description of project 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus vel justo facilisis aliquet.',
  //   imageUrl: 'project2.jpg',
  //   liveLink: 'https://example.com/project1',
  //   sourceCode: 'https://example.com/project1',
  // },
  // Add more project objects as needed
];

function ProjectSection() {
  return (
    <Container className='project-section'>
      <h2>Projects</h2>
      <Row className='project-content'>
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectSection;
