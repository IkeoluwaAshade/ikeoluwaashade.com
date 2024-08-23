import React from 'react'
import styled from 'styled-components'
import SingleBlog from '../../components/reusables/SingleBlog'
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

              blogImage = {toggle}

              blogTitle = "Clicking button to toggle a Boolean state"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

              readMore = "https://medium.com/@IkeoluwaAshade/clicking-button-to-toggle-a-boolean-state-8257b70fb293"
  
            />

            <SingleBlog 

              blogImage = {get}

              blogTitle = "Making http GET request with React using Axios"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

              readMore = "https://medium.com/@IkeoluwaAshade/making-http-get-request-with-react-using-axios-a3a04dff564a"
  
            />

            <SingleBlog 

              blogImage = {hookForm}

              blogTitle = "React Hook Form"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

              readMore = "https://ikeoluwaashade.blogspot.com/2023/03/react-hook-form.html"
  
            />

            <SingleBlog 

              blogImage = {git}

              blogTitle = "Git Vs Github"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

              readMore = "https://ikeoluwaashade.blogspot.com/2022/09/git-vs-github.html"
  
            />

            <SingleBlog 

              blogImage = {railway}

              blogTitle = "Frontend Web Developer roadmap"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

              readMore = "https://ikeoluwaashade.blogspot.com/2022/09/frontend-web-developer-roadmap.html"
  
            />

            <SingleBlog 

              blogImage = {openSource}

              blogTitle = "Open Source"

              blogDescription = "Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utj aliquip ex ea commodo consequat."

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