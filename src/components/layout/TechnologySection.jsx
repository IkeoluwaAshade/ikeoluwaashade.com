import React from 'react'
import styled from 'styled-components'
import Card from '../block/Card'

const TechnologySection = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Technologies and Tools</Title>

           <Cards>
                <CardBox><Card
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
                /></CardBox>
            </Cards>
        </Wrapper>
        
    </Container>
  )
}

export default TechnologySection

const Container = styled.div`
    margin-top: 20px;
    text-align: center;
`

const Wrapper = styled.div`
    color: #070F2B;
`

const Title = styled.h2`
    
`

const Cards = styled.div`
    /* background-color: red; */
    width: 100%;
    margin-top: 70px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const CardBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 70px;
        justify-content: center;
        align-items: center;
    }
`

