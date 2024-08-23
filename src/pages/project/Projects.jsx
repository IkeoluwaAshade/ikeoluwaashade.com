import React from 'react'
import styled from 'styled-components'
import SingleProject from '../../components/reusables/SingleProject'
import remoteWork from '../../assets/remoteWork.jpg'
import sunnySide from '../../assets/sunnySide.jpg'
import signup from '../../assets/signup.jpg'
import nft from '../../assets/nft.jpg'

const Project = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Projects</Title>

            <ProjectContainer>
                <ProjectBox>
                    <SingleProject
                        projectImage = {signup}

                        projectTitle = "Sign Up Form"

                        description = "This Project tested my ability to create dropdown navigation menus,  common pattern on larger sites. It also provided some nice basic layout challenges."

                        language1 = "html"

                        language2 = "css"

                        language3 = ""

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/sign-up-form"

                        source = "https://iridescent-palmier-589d58.netlify.app/"

                    />

                    <SingleProject
                        projectImage = {remoteWork}

                        projectTitle = "Remote Work"

                        description = "lorem ipsum ade ght skgdfalk hfsmc Noting serious. Ikeoluwa you are going places. The sky is just the starting point. The will break records, you will do everything with ease. Success is yours."

                        language1 = "html"

                        language2 = "css"

                        language3 = ""

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/remote-work"

                        source = "https://famous-cendol-b805b9.netlify.app/"

                    />

                    <SingleProject
                        projectImage = {nft}

                        projectTitle = "Kuda"

                        description = "This Project tested my ability to create dropdown navigation menus,  common pattern on larger sites. It also provided some nice basic layout challenges."

                        language1 = "html"

                        language2 = "css"

                        language3 = "react"

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/Kuda-App"

                        source = "https://kuda-app-beta.vercel.app/"

                    />

                    <SingleProject
                        projectImage = {remoteWork}

                        projectTitle = "Huddle landing page"

                        description = "This Project tested my ability to create dropdown navigation menus,  common pattern on larger sites. It also provided some nice basic layout challenges."

                        language1 = "html"

                        language2 = "css"

                        language3 = "react"

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/Huddle-Landing-Page"

                        source = "https://huddle-landing-page-lemon.vercel.app/"

                    />
                </ProjectBox>
            </ProjectContainer>
        </Wrapper>
    </Container>
  )
}

export default Project

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5em;

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
  gap: 80px;
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