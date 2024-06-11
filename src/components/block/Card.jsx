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
    background-color: #fff;
    color: #070F2B;
    width: 120px;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Wrapper = styled.div`
    /* background-color: green; */
    width: 85%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    
    
`