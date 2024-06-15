// import React from 'react'
// import styled from 'styled-components'


// const EndorsementSection = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <Title>Endorsements</Title>

//             <EndorsementContainer>
//                 <EndorsementBox>
//                     <EndorsementParagraph>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam recusandae quas quis. Perferendis eaque vitae qui, voluptates hic aperiam eligendi nam necessitatibus aut quod. Consequuntur consequatur numquam quae nemo?
//                     </EndorsementParagraph>
//                 </EndorsementBox>
//             </EndorsementContainer>
//         </Wrapper>

//     </Container>
//   )
// }

// export default EndorsementSection

// const Container = styled.div`
//     margin-top: 20px;
//     text-align: center;
// `

// const Wrapper = styled.div`
//     color: #070F2B;
// `
// const Title = styled.h2`
    
// `

// const EndorsementContainer = styled.div`
//     /* background-color: red; */
//     width: 100%;

//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const EndorsementBox = styled.div`
//     background-color: #fff;
//     color: #070F2B;
//     width: 500px;
//     height: 500px;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// `

// const EndorsementParagraph = styled.p`
    
// `




// import React, { useState } from 'react'
// import styled from 'styled-components'
// import Endorsement from '../block/Endorsement'
// import Dp from '../../assets/Dp.jpg'

// const EndorsementSection = () => {
//     const [activeIndex, setActivIndex] = useState(0);

//     const endorsements = [
//         {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni alias impedit recusandae eius qui voluptatem vitae ut asperiores ad, possimus sit consequatur quos facilis dicta. Ducimus quos eos dolore.',

//             endorserImage: Dp,

//             endorserInfo: 'sdhvJVH',
//         },

//         {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni alias impedit recusandae eius qui voluptatem vitae ut asperiores ad, possimus sit consequatur quos facilis dicta. Ducimus quos eos dolore.',

//             endorserImage: Dp,

//             endorserInfo: 'sdhvJVH',
//         },

        
//     ]
//   return (
//     <Container>
//         <Wrapper>
//             <Title>Endorsement</Title>

//             <div>
//                 {endorsements.map((endorsement, index) => (
//                     <Endorsement    key={index}
//                     text={endorsement.text}
//                     endorserImage = {endorsement.endorserImage}
//                     endorserInfo={endorsement.endorserInfo}
//                     activeIndex={activeIndex} 
//                     />
//                 ))}
                
//             </div>
//         </Wrapper>
//     </Container>
//   )
// }

// export default EndorsementSection

// const Container = styled.div`
//     margin-top: 20px;
//     text-align: center;
// `

// const Wrapper = styled.div`
//     color: #070F2B;
// `
// const Title = styled.h2`
    
// `






import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Endorsement from '../block/Endorsement';
import Dp from '../../assets/Dp.jpg'
import Funmi from '../../assets/Funmi.jpg'



const EndorsementSection = () => {
  const endorsements = [
    {
      text: 'A determined and dedicated young professional. Outstanding and exceptional at what he does',
      endorserImage: Funmi,
      endorserInfo: 'Funmilola Ariyibi (AAT, FCA, CFE, MBA)',
    },

    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni alias impedit recusandae eius qui voluptatem vitae',
      endorserImage: Dp,
      endorserInfo: 'Mrs. Jane Doe PhD, MBA',
    },

    // {
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni alias impedit recusandae eius qui voluptatem vitae ut asperiores ad, possimus sit consequatur quos facilis dicta. Ducimus quos eos dolore.',
    //   endorserImage: Dp,
    //   endorserInfo: 'Mrs. Jane Doe PhD, MBA',
    // },

    // {
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni alias impedit recusandae eius qui voluptatem vitae ut asperiores ad, possimus sit consequatur quos facilis dicta. Ducimus quos eos dolore.',
    //   endorserImage: Dp,
    //   endorserInfo: 'Mrs. Jane Doe PhD, MBA',
    // },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Wrapper>
        <Title>Endorsements</Title>
        <SliderContainer>
          <Slider {...settings}>
            {endorsements.map((endorsement, index) => (
              <Endorsement
                key={index}
                text={endorsement.text}
                endorserImage={endorsement.endorserImage}
                endorserInfo={endorsement.endorserInfo}
                activeIndex={index}
              />
            ))}
          </Slider>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

export default EndorsementSection;

const Container = styled.div`
  margin-bottom: 70px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 500px) {
    /* background-color: red; */
    /* width: 100vw; */
  }
  
`;

const Wrapper = styled.div`
  color: #070f2b;
  max-width: 800px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 500px) {
    padding: 0 15px;
    
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;

const StyledSlider = styled(Slider)`
   .slick-list {
     padding: 0 20px;

     @media (max-width: 500px) {
       padding: 0 10px;
     }
   }

   .slider-slide {
     display: flex;
     justify-content: center;
   }

   .slick-dots {
     bottom: -30px;

     @media (max-width: 500px) {
       bottom: -20px;
     }
   }

   .slick-prev,
   .slick-next {
     z-index: 1;
     color: #070f2b;
   } 

  .slick-prev:before,
  .slick-next:before {
    color: #070f2b; 
  }


  @media (max-width: 500px) {
    .slick-list {
      padding: 0 10px;
    }

    .slick-dots {
      bottom: -20px;
    }
  } 
`