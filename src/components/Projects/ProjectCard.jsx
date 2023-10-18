import React from 'react'
import './ProjectSection.jsx'
import './Project.css'


import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';

function Project ({ title, description, imageUrl, liveLink, sourceCode }) {
  return (
    <Card className='project-card' style={{ width: '18rem'}}>
      <Card.Img variant='top' src={imageUrl} alt='Project Image' />
      <Card.Body>

        <Card.Title>{title}</Card.Title>

        <Card.Text>{description}</Card.Text>

        <Button variant="primary" href={liveLink} target="_blank">
          Live Link
        </Button>

        {sourceCode && (
          <Button variant="secondary" href={sourceCode} target="_blank">
            Source Code
          </Button>
        )}

      </Card.Body>

    </Card>
    
  );
}

export default Project