import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <Container>
        <Wrapper>
          <h4>{props.CardTitle}</h4>
        </Wrapper>
    </Container>
  )
}

export default Card

const Container = styled.div`
    color: ${(props) => props.theme.color};
    width: 120px;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Wrapper = styled.div`
    width: 85%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
`

