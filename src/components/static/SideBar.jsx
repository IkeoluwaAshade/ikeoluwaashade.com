import React from 'react'
import styled from 'styled-components'
// Navigation
import { FaBookOpen } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { FaBlogger } from 'react-icons/fa';
import { MdNoPhotography } from 'react-icons/md';

// Socials
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { SiFrontendmentor } from 'react-icons/si';

import { Link } from 'react-router-dom';

// Dark Mode ==and== Hamburger
// import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';
// import { lightTheme, darkTheme } from '../block/Themes/themes';

const SideBar = ({toggle, setToggle}) => {
  return (
    <Container>
        <Wrapper>
            <NavDiv>
                <StyledLink to='/'>
                    <Navs  onClick={() => {setToggle(false);}}>
                    <span>Home</span>
                    </Navs>
                </StyledLink>

                <StyledLink to='/Project'>
                    <Navs onClick={() => {setToggle(false);}}>
                    <span>Projects</span>
                    </Navs>
                </StyledLink>

                <StyledLink to='/Blog'>
                    <Navs onClick={() => {setToggle(false);}}>
                    <span>Blog</span>
                    </Navs>
                </StyledLink>

                <StyledLink to='/Photography'>
                    <Navs onClick={() => {setToggle(false);}}>
                    <span>Photography</span>
                    </Navs>
                </StyledLink>
            </NavDiv>

            <Socials>
                <Github>
                    
                    <a href='https://github.com/IkeoluwaAshade' target='_blank' rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    
                </Github>
                
                <Frontend>
                    
                    <a href='https://www.frontendmentor.io/profile/IkeoluwaAshade' target='_blank' rel="noopener noreferrer"><SiFrontendmentor />    
                    </a>
                   
                </Frontend>

                <LinkedIn>
                    
                    <a href='https://www.linkedin.com/in/ikeoluwaashade' target='_blank' rel="noopener noreferrer"><GrLinkedin  />
                    </a>
                   
                </LinkedIn>

                {/* <DarkMode onClick={toggleTheme}>
                    {theme === 'light' ? <BsToggle2Off size={25} /> : <BsToggle2On size={25} />}
                    <Tooltip>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to light Mode'}</Tooltip>
                </DarkMode> */}
            </Socials>


        </Wrapper>
    </Container>
  )
}

export default SideBar

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(7, 15, 43, 0.7);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    font-weight: 600;
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    /* background-color: red; */
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const NavDiv = styled.div`
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const Navs = styled.div`
    margin: 25px 0;
    color: #fff;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-content: space-between;
`

const Socials = styled.div`
    /* background-color: red; */
    height: 70px;
    width: 85px;
    /* margin: 0 25px; */
    margin-bottom: 20px;

    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;

`
const Tooltip = styled.div``
const Github = styled.div`
    transition: all 550ms;
    /* background-color: red; */
    /* width: 75px; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
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
const Frontend = styled.div`
    transition: all 550ms;
    /* background-color: red; */
    /* width: 150px; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
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
const LinkedIn = styled.div`
    transition: all 550ms;
    /* background-color: red; */
    /* width: 85px; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
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
