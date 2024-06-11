import React from 'react'
import styled from 'styled-components'
import Card from '../block/Card'

const TechnologySection = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Technologies and Tools</Title>

           <Cards>
                <Card
                    CardTitle="CSS"
                />

                <Card 
                    CardTitle="Javascript"
                />

                <Card 
                    CardTitle="React"
                />

                <Card 
                    CardTitle="Photoshop"
                />

                <Card 
                    CardTitle="Lightroom"
                />

                <Card 
                    CardTitle="CSS"
                />
            </Cards>
        </Wrapper>
        
    </Container>
  )
}

export default TechnologySection

const Container = styled.div`
    margin-top: 20px;
    text-align: center;

    
    /* display: flex; */
    /* width: 100px; */
    /* justify-content: center;
    align-items: center; */
    
    
    /* @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    } */
`

const Wrapper = styled.div`
    /* background-color: red; */
    color: #070F2B;
/* 
    display: flex;
    justify-content: center;
    align-items: center; */
`

const Title = styled.h2`
    
`

const Cards = styled.div`
    background-color: red;
    width: 100%;
    /* text-align: 20px; */
    margin: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;


    @media (max-width: 768px) {
        flex-direction: column;
    }
`



