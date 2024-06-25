import React from 'react'
import styled from 'styled-components'

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <h6>Coming soon!!!</h6>
      </Wrapper>
    </Container>
  )
}

export default Blog

const Container = styled.div`
  background-color: gray;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  /* background-color: red; */
  width: 85%;

  display: flex;
  justify-content: center;
  align-items: center;

  h6 {
    font-size: 70px;
  }
`

// const Container = styled.div`

// `