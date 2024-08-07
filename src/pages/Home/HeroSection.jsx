import React from 'react';
import styled from 'styled-components';
import Dp from '../../assets/Dp.jpg';

const HeroSection = () => {  

  return (
    <Container>
        <Wrapper>
            <DpBox>
                <img src={Dp} alt="A Profile head shot of Ikeoluwa" />
            </DpBox>

            <AboutMeDiv>
                <Title>About Me</Title>
                <AboutMeText>
                    
                Ikeoluwa is a promising and business Oriented individual who is very passionate about growth and technology. I am keen to pursue a career in the tech industry. I am more zealous about solving consumer problems by making life easier for them using technology. 

                My part time roles and volunteer work have also provided me with a range of workplace skills such as relationship building communication and team work.

                
                My vision is to make life easy.. 
                </AboutMeText>
            </AboutMeDiv>
        </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
    color: ${({ theme }) => theme.text};
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;


    @media (max-width: 768px) {
        margin-top: 230px;
        margin-bottom: 200px;
    }
`;

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const DpBox = styled.div`
    background-color: gray;
    border: 3px solid #ccc;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: auto;
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const AboutMeDiv = styled.div`
    /* background-color: ${({ theme }) => theme.aboutMeBackground}; */
    margin-left: 90px;
    
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.titleColor};
`;

const AboutMeText = styled.p`
    columns: 200px 2;
    column-gap: 30px;
    color: ${({ theme }) => theme.aboutMeTextColor};
    text-align: justify;
`;
