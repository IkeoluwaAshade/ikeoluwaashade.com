import React from 'react'
import Card from '../../components/reusables/Card'
import styled from 'styled-components'

const TechnologySection = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Technologies and Tools</Title>

            <Cards>
                <CardBox>
                    <Card 
                        CardTitle='html' 
                    />

                    <Card 
                        CardTitle='CSS' 
                    />

                    <Card 
                        CardTitle='Javascript' 
                    />

                    <Card 
                        CardTitle='React' 
                    />

                    <Card 
                        CardTitle='Git' 
                    />

                    {/* <Card 
                        CardTitle='Styled components' 
                    /> */}

                    <Card 
                        CardTitle='Axios' 
                    />

                    {/* <Card 
                        CardTitle='tailwind' 
                    /> */}
                </CardBox>
            </Cards>
        </Wrapper>
    </Container>
  )
}

export default TechnologySection

const Container = styled.div`
    width: 100%;
    margin-top: 6em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 16em;
    }

    @media (max-width: 500px) {
        margin-top: 20em;
    }
`

const Wrapper = styled.div``

const Title = styled.h2`
    text-align: center;
`

const Cards = styled.div``

const CardBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 70px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 70px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`