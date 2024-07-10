import React from 'react'
import styled from 'styled-components'

const SingleProject = ({projectImage, projectTitle, description, language1, language2, language3, language4, code, source}) => {
  return (
    <ProjectContainer>
      <Wrapper>
        <ProjectImage src={projectImage} alt="Project Image" />

        <ProjectTitle>{projectTitle}</ProjectTitle>

        <ProjectDescription>{description}</ProjectDescription>

        <Stack>
          <h4>Stack</h4>

          <LangDiv>
            <Language>{language1}</Language>

            <Language>{language2}</Language>

            <Language>{language3}</Language>

            <Language>{language4}</Language>
          </LangDiv>
        </Stack>

        <Clicks>
          {code && <a href = {code}><button>Code</button></a> }
          {source && <a href = {source}><button>Live Link</button></a> }
        </Clicks>
      </Wrapper>
    </ProjectContainer>
  )
}

export default SingleProject

const ProjectContainer = styled.div`
  /* background-color: red; */
  color: #070F2B;
  width: 300px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  /* background-color: green; */
  width: 85%;
  /* height: 800px; */
  font-size: 14px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectImage = styled.img``

const ProjectTitle = styled.h4`
  font-size: 21px;
`

const ProjectDescription = styled.p`
  /* background-color: red; */
  margin-top: 5px;
  text-align: justify;
`

const Stack = styled.div`
  text-align: center;
  margin-bottom: 18px;

  h4 {

  }
`

const LangDiv = styled.div`
  /* background-color: yellow; */
  width: 250px;

  display: flex;
  justify-content: space-between;
`

const Language = styled.p``

const Clicks = styled.div`
  /* background-color: blue; */
  width: 200px;
  margin-bottom: 20px;


  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #123456;
    color: #fff;
    width: 71px;
    height: 35px;
    padding: 5px;
    border-radius: 7px;
  }

  button:hover {
    cursor: pointer;
  }
`