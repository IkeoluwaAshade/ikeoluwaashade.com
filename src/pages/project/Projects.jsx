import React from 'react'
import styled from 'styled-components'
import SingleProject from '../../components/reusables/SingleProject'
import carRental from '../../assets/car-rental.png'
import remoteWork from '../../assets/remoteWork.jpg'
import sunnySide from '../../assets/sunnySide.jpg'
import signup from '../../assets/signup.jpg'
import huddle from '../../assets/huddle.jpg'
import kuda from '../../assets/kuda.png'

const Project = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Projects</Title>

            <ProjectContainer>
                <ProjectBox>
                    <SingleProject
                        projectImage = {carRental}

                        projectTitle = "Car Rental"

                        description = "I collaborated on Car Rental project which exposed me to a lot of experience I worked on the Contact and FAQ pages and also assisted in some other smaller components."

                        language1 = "html"

                        language2 = "tailwind"

                        language3 = "react"

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/car-rental"

                        source = "https://car-rental-lmd.vercel.app/"

                    />
                    <SingleProject
                        projectImage = {signup}

                        projectTitle = "Sign Up Form"

                        description = "I practiced building a sign-up form with client-side validation using JavaScript, a common feature on many websites that ensures accurate and reliable user input."

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

                        description = "This Project tested my ability to create dropdown navigation menus,  common pattern on larger sites. It also provided some nice basic layout challenges."

                        language1 = "html"

                        language2 = "css"

                        language3 = ""

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/car-rental"

                        source = "https://car-rental-lmd.vercel.app/"

                    />

                    {/* <SingleProject
                        projectImage = {kuda}

                        projectTitle = "Kuda"

                        description = "This Project tested my ability to create dropdown navigation menus,  common pattern on larger sites. It also provided some nice basic layout challenges."

                        language1 = "html"

                        language2 = "css"

                        language3 = "react"

                        language4 = ""

                        code = "https://github.com/IkeoluwaAshade/Kuda-App"

                        source = "https://kuda-app-beta.vercel.app/"

                    /> */}

                    <SingleProject
                        projectImage = {huddle}

                        projectTitle = "Huddle landing page"

                        description = "Tackling this challenge was exactly what I needed to sharpen my layout skills. Building out the structure from scratch gave me a boost of confidence and a clearer perspective on how to approach web page layouts. Excited for the next one!."

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