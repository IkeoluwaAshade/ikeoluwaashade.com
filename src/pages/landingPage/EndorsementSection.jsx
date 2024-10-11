import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Endorsement from '../../components/reusables/Endorsement';
import funmi from '../../assets/Funmi.jpg'
// import myDp from '../../assets/Dp.jpg'
import samuel from '../../assets/samuelOlorunda.jpeg'




const endorsementsData = [
    { 
      image: funmi, 
      text: "A determined and dedicated young professional. Outstanding and exceptional at what he does", 
      name: "Funmilola Ariyibi", 
      qualifications: "AAT, FCA, CFE, MBA" 
    },
    
    { 
      image: samuel, 
      text: "It has been a pleasure to mentor and watch Ikeoluwa grow into a skilled and passionate developer.", 
      name: "Samuel Olorunda", 
      qualifications: "Software Engineer" 
    },
    
    // { 
    //   image: myDp, 
    //   text: "Highly recommended for web development!", 
    //   name: "Sarah Lee", 
    //   qualifications: "BSc, MEng" 
    // }
];

const EndorsementSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEndorsement = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % endorsementsData.length);
    };

    const prevEndorsement = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + endorsementsData.length) % endorsementsData.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % endorsementsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <EndorsementSectionContainer>
          <Title>Endorsement</Title>
            <EndorsementWrapper>
                <Endorsement 
                    image={endorsementsData[currentIndex].image}
                    text={endorsementsData[currentIndex].text} 
                    name={endorsementsData[currentIndex].name} 
                    qualifications={endorsementsData[currentIndex].qualifications} 
                />
            </EndorsementWrapper>
            <PrevButton onClick={prevEndorsement}>Prev</PrevButton>
            <NextButton onClick={nextEndorsement}>Next</NextButton>
        </EndorsementSectionContainer>
    );
};

export default EndorsementSection;

const EndorsementSectionContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    width: 80%;
    /* margin-bottom: 20rem; */
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const Title = styled.h2`
  text-align: center;
`

const EndorsementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 10;
  &:hover {
    background-color: #555;
  }

  @media (min-width: 768px) {
    padding: 15px;
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;
