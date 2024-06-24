import React from 'react'
import styled from 'styled-components'
import SingleProject from '../../components/block/SingleProject'
import Dp from '../../assets/Dp.jpg'
// import { Container } from 'react-bootstrap'

const Project = () => {

  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>

        <ProjectContainer>
          <ProjectBox>
            <SingleProject
              projectImage = {Dp}

              projectTitle = "NFT"

              description = "lorem ipsum ade ght skgdfalk hfsmc Noting serious. Ikeoluwa you are going places. The sky is just the starting point. The will break records, you will do everything with ease. Success is yours"

              language1 = "html"

              language2 = "java"

              language3 = "python"

              language4 = "php"

            />

            <SingleProject
              projectImage = {Dp}

              projectTitle = "NFT"

              description = "lorem ipsum ade ght skgdfalk hfsmc Noting serious. Ikeoluwa you are going places. The sky is just the starting point. The will break records, you will do everything with ease. Success is yours"

              language1 = "html"

              language2 = "java"

              language3 = "python"

              language4 = "php"

            />

            <SingleProject
              projectImage = {Dp}

              projectTitle = "NFT"

              description = "lorem ipsum ade ght skgdfalk hfsmc Noting serious. Ikeoluwa you are going places. The sky is just the starting point. The will break records, you will do everything with ease. Success is yours"

              language1 = "html"

              language2 = "java"

              language3 = "python"

              language4 = "php"

            />
            {/* <SingleProject
              projectImage = {Dp}

              projectTitle = "NFT"

              description = "lorem ipsum ade ght skgdfalk hfsmc Noting serious. Ikeoluwa you are going places. The sky is just the starting point. The will break records, you will do everything with ease. Success is yours"

              language1 = "html"

              language2 = "java"

              language3 = "python"

              language4 = "php"

            /> */}
          </ProjectBox>
        </ProjectContainer>

      </Wrapper>
    </Container>
  )
}

export default Project

const Container = styled.div`
  /* background-color: red; */
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div``

const Title = styled.h2`
  text-align: center;
`

const ProjectContainer = styled.div``

const ProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 70px;
    justify-content: center;
    align-items: center;
  }
`

