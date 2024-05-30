import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBookOpen } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'
import { FaBlogger } from 'react-icons/fa'
import { MdNoPhotography } from "react-icons/md";
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { SiFrontendmentor } from 'react-icons/si'

import { BsToggle2On } from 'react-icons/bs'
import { BsToggle2Off } from 'react-icons/bs'

import { GiHamburgerMenu } from 'react-icons/gi'
import { GiCancel } from 'react-icons/gi'
// import BurgerClick from '../BurgerClick/BurgerClick'


const header = () => {

    // const [toggle, setToggle] = useState(false)

    // const toggleChange = () => {
    //     setToggle(!toggle)
    // }

  return (
    <Container>
        <Wrapper>
            <Logo>Ikeoluwa Ashade</Logo>

            <NavDiv>
            
 
                <Nav>
                    <VscProject />
                    <a href="#">Projects</a>
                </Nav>

                <Nav>
                    <FaBlogger />
                    <a href="https://ikeoluwaashade.blogspot.com/">Blog</a>
                </Nav>

                <Nav>
                    <MdNoPhotography /> 
                    <a href="#">Photography</a>
                </Nav>
            </NavDiv>

            <Socials>
                <Github>
                    <a  href='https://github.com/IkeoluwaAshade'><FaGithub /></a>
                </Github>

                <Frontend>
                    <a href='https://www.frontendmentor.io/profile/IkeoluwaAshade'>
                        <SiFrontendmentor />
                    </a>
                </Frontend>
                
                <LinkedIn>
                    <a href='https://www.linkedin.com/in/ikeoluwaashade'>
                        <GrLinkedin />
                    </a>
                </LinkedIn>

                <DarkMode>
                    <BsToggle2Off size={25} />
                </DarkMode>
            </Socials>

        </Wrapper>
    </Container>
  )
}

export default header

const Container = styled.div`
    background-color: #01204e;
    color: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const  Wrapper = styled.div`
    /* background-color: aqua; */
    color: #fff;
    width: 85%;
    /* height: 100%; */

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const  Logo = styled.h1`
    /* background-color: green; */
    color: aliceblue;

    font-size: 27px;
    font-weight: 700;
    /* animation: movedown 1s linear 1; */
`

const  NavDiv = styled.div`
    /* background-color: brown; */
    color: aliceblue;
    min-width: 350px;
    height: 40px;
    font-weight: 500;

    display: flex;
    justify-content: space-even;
    align-items: center;
    /* animation: moveleft 1s liner 1; */

    /* @keyframes moveleft {
    0% {
        transform: translateX(100px);
    }

    100% {
        transform: translateX(0);
    }
    } */

    
`

const  Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 350ms;

    

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 10px;
        transition: 0.5s ease;


        &:hover {
        color: aqua;
        cursor: pointer;
        transform: scale(1.1);
    }
    }

    &:hover {
        color: aqua;
        cursor: pointer;
        transform: scale(1.1);
    }
    
`

const  Socials = styled.div`
    /* background-color: purple; */
    color: #fff;

    min-width: 200px;
    height: 30px;
    /* margin-left: 18px; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all 550ms;

    /* &:hover{
        color: var(--skyblue);
        transform: scale(1.1);
        cursor: pointer;
    } */
`

const  Github = styled.div`
    transition: all 550ms;

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 10px;
        transition: 0.5s ease;


        &:hover {
        color: aqua;
        cursor: pointer;
        transform: scale(1.1);
    }
    }

    &:hover {
        color: aqua;
        cursor: pointer;
        transform: scale(1.1);
    }
`

const  Frontend = styled.div`
    transition: all 550ms;

a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    transition: 0.5s ease;


    &:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
}
}

&:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
}
`

const  LinkedIn = styled.div`
transition: all 550ms;

a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    transition: 0.5s ease;


    &:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
}
}

&:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
}
`

const  DarkMode = styled.div`
    margin-left: 30px;
`