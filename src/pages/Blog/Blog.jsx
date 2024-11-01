import React from 'react'
import styled from 'styled-components'
import SingleBlog from '../../components/reusables/SingleBlog'
import AI from '../../assets/AI.jpeg'
import openSource from '../../assets/openSource.jpg'
import get from '../../assets/get.jpg'
import hookForm from '../../assets/hookForm.png'
import toggle from '../../assets/toggle.jpg'
import railway from '../../assets/rail.jpg'
import git from '../../assets/git.jpg'


const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <BlogContainer>
          <Title><h3>BugRescue</h3></Title>

          <BlogBox>

            <SingleBlog 

              blogImage = {AI}

              blogTitle = "Embracing the power of Artificial Intelligent"

              blogDescription = "It is no doubt that we are all beneficiaries of Artificial Intelligence (AI). As a sofware..."

              readMore = "https://medium.com/@IkeoluwaAshade/clicking-button-to-toggle-a-boolean-state-8257b70fb293"
  
            />

            <SingleBlog 

              blogImage = {toggle}

              blogTitle = "Clicking button to toggle a Boolean state"

              blogDescription = "Very quickly we are going to be looking at a code snippet from a React component that toggles a Bool..."

              readMore = "https://medium.com/@IkeoluwaAshade/clicking-button-to-toggle-a-boolean-state-8257b70fb293"
  
            />

            <SingleBlog 

              blogImage = {get}

              blogTitle = "Making http GET request with React using Axios"

              blogDescription = "Fetching an API from an external source is an integral part of web development. That is why a good u..."

              readMore = "https://medium.com/@IkeoluwaAshade/making-http-get-request-with-react-using-axios-a3a04dff564a"
  
            />

            <SingleBlog 

              blogImage = {hookForm}

              blogTitle = "React Hook Form"

              blogDescription = "I'd an issue implementing email input valiation while on a project. After a thorough search on how to go about it, I came up with a solution by Yogesh..."

              readMore = "https://ikeoluwaashade.blogspot.com/2023/03/react-hook-form.html"
  
            />

            <SingleBlog 

              blogImage = {git}

              blogTitle = "Git Vs Github"

              blogDescription = "You do not need Github to use git, but you cannot use GitHub without git. It sounds confusing right?? Let's..."

              readMore = "https://ikeoluwaashade.blogspot.com/2022/09/git-vs-github.html"
  
            />

            <SingleBlog 

              blogImage = {railway}

              blogTitle = "Frontend Web Developer roadmap"

              blogDescription = "Have you been stuck or confused about the orderly pattern of how yo..."

              readMore = "https://ikeoluwaashade.blogspot.com/2022/09/frontend-web-developer-roadmap.html"
  
            />

            <SingleBlog 

              blogImage = {openSource}

              blogTitle = "Open Source"

              blogDescription = "Everyone using the internet today is a beneficiary of an open source. What exactly is an open source? An open source..."

              readMore = "https://ikeoluwaashade.blogspot.com/2022/09/open-source.html?m=1"
  
            />
          </BlogBox>
        </BlogContainer>
      </Wrapper>
    </Container>
  )
}

export default Blog

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-top: 5em;
  margin-bottom: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
`

const BlogContainer = styled.div`

`

const BlogBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 70px;
    justify-content: center;
    align-items: centers;
  }
`

const Title = styled.div`
  color: ${(props) => props.theme.color};
  text-align: center;
  font-size: 32px;

`