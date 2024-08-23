import React from 'react'
import styled from 'styled-components'

const Photography = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Coming Soon</h1>
      </Wrapper>
    </Container>
  )
}

export default Photography

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
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

  h1 {
    font-size: 70px;
  }
`