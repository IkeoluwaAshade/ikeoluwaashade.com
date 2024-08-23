import React from 'react'
import styled from 'styled-components'
import Dp from '../../assets/Dp.jpg'

const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
                <DpBox>
                    <img src={Dp} alt='A Profile head shot of Ikeoluwa' />
                </DpBox>

                <AboutMeDiv>
                    <Title>About Me</Title>

                    <AboutMeText>
                        Ikeoluwa is a promising and business oriented individual who is very passionate about growth and technology.

                        He is a front-end developer with a strong foundation in web development. My journey in tech began with a deep curiosity for creating interactive and visually appealing websites. 

                        He takes pride in crafting responsive and accessible web applications, ensuring that they look great on all devices. From designing elegant user interfaces to implementing dynamic features with dark mode toggle and seamless page routing, He strive to deliver a polished user experience.

                        He is particularly drawn to solving real-world problems through code, whether it's building a personal projet or collaborating on a larger team. His goal is to continually expand his expertise, with an eye towards full-stack development, where He can bring even more ideas to life.

                        He is also a visual communicator who likes to tells stories by capturing moment.

                    </AboutMeText>
                </AboutMeDiv>
        </Wrapper>
    </Container>
  )
}

export default HeroSection

const Container = styled.div`
    width: 100%;
    height: 370px;
    margin-top: 6em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 18em;
    }

    @media (max-width: 500px) {
        margin-top: 26em;
    }
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const DpBox = styled.div`
    background-color: grey;
    border: 3px solid #ccc;
    border-radius: 10px;
    width: 100%;
    min-width: 300px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 300px;
    }

    img {
        height: auto;
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 10px;
    }
`

const AboutMeDiv = styled.div`
    margin-left: 90px;

    @media (max-width: 500px) {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }
`

const Title = styled.h2`
    @media (max-width: 768px) {
        text-align: center;
    }
`

const AboutMeText = styled.div`
    columns: 200px 2;
    column-gap: 30px;
    text-align: justify;
`