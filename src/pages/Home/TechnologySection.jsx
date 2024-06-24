import React from 'react'
import styled from 'styled-components'
import Card from '../../components/block/Card'

const TechnologySection = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Technologies and Tools</Title>

           <Cards>
                <CardBox>
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
                        CardTitle="Git"
                    />

                    <Card 
                        CardTitle="Photoshop"
                    />

                    <Card 
                        CardTitle="Lightroom"
                    />

                </CardBox>
            </Cards>
        </Wrapper>
        
    </Container>
  )
}

export default TechnologySection

const Container = styled.div`
    /* margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 250px;
    } */


    /* background-color: red; */
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
`

const Title = styled.h2`
    text-align: center;
    color: #070f2b;
    
`

const Cards = styled.div`
    /* background-color: red;
    width: 100%;
    margin-top: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center; */
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
        flex-direction: column;
    }
`

