import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Ike>
                &copy; {new Date().getFullYear()} Ikeoluwa Ashade <br /> 
            </Ike>

            <BuiltWith>
                Built with <a href='https://legacy.reactjs.org/' target='_blank' rel="noopener noreferrer">React</a>, <a href="https://styled-components.com/" target='_blank' rel="noopener noreferrer">Styled-Component</a>. 
                    Hosted on <a href="http://vercel.com/" target='_blank' rel="noopener noreferrer">Vercel</a>
            </BuiltWith>
 
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
    background-color: #123456;
    color: #fff;
    width: 100vw;
    height: 70px;

    display: flex;
    justify-content: center;
    
    margin-bottom: 0;
    position: absolute;
    
`

const Wrapper = styled.div`
    /* background-color: red; */
    width: 85vw;
    font-weight: 500;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media ( max-width: 500px) {
        /* background-color: red; */
        font-size: 12px;
    }

`

const Ike = styled.div`
/* color: red; */
    
`

const BuiltWith = styled.div`

    a {
        color:  skyblue;
        text-decoration: none;
    }
`