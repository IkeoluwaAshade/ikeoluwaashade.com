// import React, {useState} from 'react'
// import styled from 'styled-components'

// const SingleProject = ({projectImage, projectTitle, description, language1, language2, language3, language4, code, source}) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleDescription = () => setIsExpanded(!isExpanded);
//     const shortDescription = () => description.slice(0, 80);

//   return (
//     <ProjectContainer>
//         <Wrapper>
//             <ProjectImage src={projectImage} alt='Project Image' />

//             <ProjectTitle>{projectTitle}</ProjectTitle>

//             <ProjectDescription>
//                 {isExpanded ? description : `${shortDescription}...`}
//                 {description.length > 80 && (
//                     <MoreLink onClick={toggleDescription}>
//                         {isExpanded ? 'show less' : 'more'}
//                     </MoreLink>
//                 )}
//                 {/* {description} */}
//             </ProjectDescription>

//             <Stack>
//                 <h4>Stack</h4>

//                 <LangDiv>
//                     <Language>{language1}</Language>

//                     <Language>{language2}</Language>

//                     <Language>{language3}</Language>

//                     <Language>{language4}</Language>
//                 </LangDiv>
//             </Stack>

//             <Clicks>
//                 {code && <a href = {code} target='_blank' rel='noopener noreferrer'><button>Code</button></a>}
//                 {code && <a href = {source} target='_blank' rel='noopener noreferrer'><button>Live Link</button></a>}
//             </Clicks>
//         </Wrapper>
//     </ProjectContainer>
//   )
// }

// export default SingleProject

// const ProjectContainer = styled.div`
//     color: ${(props) => props.theme.color};
//     width: 300px;
//     margin-bottom: 20px;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const Wrapper = styled.div`
//     width: 85%;
//     font-size: 14px;
//     font-weight: 500;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `

// const ProjectImage = styled.img`
//     width: 300px;
//     height: 200px;
// `

// const ProjectTitle = styled.h4`
//     font-size: 21px;
// `

// const ProjectDescription = styled.p`
//     margin-top: 5px;
//     text-align: justify;
// `

// const MoreLink = styled.span`
//     color: blue;
//     cursor: pointer;
//     font-weight: bold;
// `

// const Stack = styled.div`
//     text-align: center;
//     margin-bottom: 18px;
// `

// const LangDiv = styled.div`
//     width: 250px;
//     display: flex;
//     justify-content: space-between;
// `

// const Language = styled.p``

// const Clicks = styled.div`
//     width: 200px;
//     margin-bottom: 20px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
    
//     button {
//         background-color: ${(props) => props.theme.background};
//         color: ${(props) => props.theme.color};
//         width: 71px;
//         height: 35px;
//         padding: 5px;
//         border-radius: 7px;
//     }

//     button:hover {
//         cursor: pointer;
//     }
// `



import React, { useState } from 'react'; 
import styled from 'styled-components';

const SingleProject = ({ projectImage, projectTitle, description, language1, language2, language3, language4, code, source }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle full or truncated description
  const toggleDescription = () => setIsExpanded(!isExpanded);

  // Shortened description
  const shortDescription = description.slice(0, 80);

  return (
    <ProjectContainer>
      <Wrapper>
        <ProjectImage src={projectImage} alt='Project Image' />
        <ProjectTitle>{projectTitle}</ProjectTitle>

        <ProjectDescription>
          {isExpanded ? description : `${shortDescription}...`}
          {description.length > 80 && (
            <MoreLink onClick={toggleDescription}>
              {isExpanded ? ' show less' : ' more'}
            </MoreLink>
          )}
        </ProjectDescription>

        <Stack>
          <h4>Stack</h4>
          <LangDiv>
            {language1 && <Language>{language1}</Language>}
            {language2 && <Language>{language2}</Language>}
            {language3 && <Language>{language3}</Language>}
            {language4 && <Language>{language4}</Language>}
          </LangDiv>
        </Stack>

        <Clicks>
          {code && (
            <a href={code} target='_blank' rel='noopener noreferrer'>
              <button>Code</button>
            </a>
          )}
          {source && (
            <a href={source} target='_blank' rel='noopener noreferrer'>
              <button>Live Link</button>
            </a>
          )}
        </Clicks>
      </Wrapper>
    </ProjectContainer>
  );
};

export default SingleProject;

// Styled-components for consistent display
const ProjectContainer = styled.div`
  color: ${(props) => props.theme.color};
  width: 300px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 85%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 300px;
  height: 200px;
`;

const ProjectTitle = styled.h4`
  font-size: 21px;
`;

const ProjectDescription = styled.p`
  margin-top: 5px;
  text-align: justify;
`;

const MoreLink = styled.span`
  color: blue;
  cursor: pointer;
  font-weight: bold;
`;

const Stack = styled.div`
  text-align: center;
  margin-bottom: 18px;
`;

const LangDiv = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Language = styled.p``;

const Clicks = styled.div`
  width: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    width: 71px;
    height: 35px;
    padding: 5px;
    border-radius: 7px;
  }

  button:hover {
    cursor: pointer;
  }
`;
