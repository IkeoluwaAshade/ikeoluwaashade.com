// import React from 'react';
// import styled from 'styled-components'
// import Dp from '../../assets/Dp.jpg'

// const HeroSection = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <DpBox>
//                 <img src={Dp} alt="" />
//             </DpBox>

            
//             <AboutMeDiv>
//                 <Title>About Me</Title>
//                 <AboutMeText>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ipsa asperiores repellat voluptatum. Et, ipsa vel itaque officia provident ad aspernatur magni nam quas eveniet magnam deleniti impedit ullam.
//                 </AboutMeText>
//             </AboutMeDiv>

            
//         </Wrapper>
//     </Container>
//   )
// }

// export default HeroSection

// const Container = styled.div`
//     background-color: brown;
//     width: 100%;
//     height: 300px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const Wrapper = styled.div`
//     width: 85%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

// const DpBox = styled.div`
//     background-color: gray;
//     border: 1px solid #ccc;
//     border-radius: 10px;
//     border: 20px;
//     width: 300px;
//     height: 200px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//     img {
//         height: 200px;
//         width: 200px;
//         object-fit: cover;
//         border-radius: 10px;
//     }
// `

// const AboutMeDiv = styled.div`
//     margin-left: 90px;
    
// `

// const Title = styled.h2`
    
// `

// const AboutMeText = styled.div`
//     columns: 200px 2;
//     column-gap: 30px;
// `


import React from 'react';
import styled from 'styled-components';
import Dp from '../../assets/Dp.jpg';

const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
            <DpBox>
                <img src={Dp} alt="Profile" />
            </DpBox>

            <AboutMeDiv>
                <Title>About Me</Title>
                <AboutMeText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ipsa asperiores repellat voluptatum. Et, ipsa vel itaque officia provident ad aspernatur magni nam quas eveniet magnam deleniti impedit ullam.
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
`;

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DpBox = styled.div`
    background-color: gray;
    border: 3px solid #ccc;
    border-radius: 10px;
    width: 300px;
    height: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const AboutMeDiv = styled.div`
    /* background-color: ${({ theme }) => theme.aboutMeBackground}; */
    margin-left: 90px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.titleColor};
`;

const AboutMeText = styled.div`
    columns: 200px 2;
    column-gap: 30px;
    color: ${({ theme }) => theme.aboutMeTextColor};
`;
