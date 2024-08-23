import React, { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../globalTheme/ThemeContext'
import { Link } from 'react-router-dom'


// Social icon
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr';
import { SiFrontendmentor } from 'react-icons/si';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const SideBar = () => {
    const { theme, toggleTheme } = useTheme();

    const [toggle, setToggle] = useState(false);
    const toggleChange = () => {
      setToggle(!toggle);
    }
  return (
    <Container>
        <Wrapper>
            <NavDiv>
                <Navs onClick={() => {setToggle(false)}}>
                    <span><StyledLink to='/'>Home</StyledLink></span>
                </Navs>

                <Navs onClick={() => {setToggle(false)}}>
                <span><StyledLink to='/project'>Projects</StyledLink></span>
                </Navs>

                <Navs onClick={() => {setToggle(false)}}>
                    <span><StyledLink to='/blog'>Blog</StyledLink></span>
                </Navs>

                <Navs onClick={() => {setToggle(false)}}>
                <span><StyledLink to='/photography'>Photography</StyledLink></span>
                </Navs>
                
            </NavDiv>

            <Socials>
                <Github>
                    <a href="https://github.com/IkeoluwaAshade" target='_blank' rel="noopener noreferrer"><StyledGithubIcon /></a>
                </Github>

                <Frontend>
                    
                    <a href='https://www.frontendmentor.io/profile/IkeoluwaAshade' target='_blank' rel="noopener noreferrer"><StyledFrontendIcon />    
                    </a>
                   
                </Frontend>

                <LinkedIn>
                    
                    <a href='https://www.linkedin.com/in/ikeoluwaashade' target='_blank' rel="noopener noreferrer"><StyledLinkedinIcon  />
                    </a>
                   
                </LinkedIn>
            </Socials>

            <DarkMode onClick={toggleTheme}>
                {theme === 'light' ? <BsToggleOff size={25} /> : <BsToggleOn size={25} />}
                <Tooltip>{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</Tooltip>
            </DarkMode>
        </Wrapper>
    </Container>
  )
}

export default SideBar

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(10, 25, 47, 0.7);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    font-weight: 600;
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const NavDiv = styled.div``

const Navs = styled.div`
    margin: 25px 0;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-content: space-between;

    &:hover {
        color: aqua;
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.color};
`

const Socials = styled.div`
    height: 70px;
    width: 85px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Github = styled.div`
    transition: all 550ms;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        transition: 0.5s ease;
    }
`

const StyledGithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.color};

  &:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
  }
`

const Frontend = styled.div`
    transition: all 550ms;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        transition: 0.5s ease;
    }
`

const StyledFrontendIcon = styled(SiFrontendmentor)`
  color: ${(props) => props.theme.color};

  &:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
  }
`

const LinkedIn = styled.div`
    transition: all 550ms;
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

const StyledLinkedinIcon = styled(GrLinkedin)`
  color: ${(props) => props.theme.color};

  &:hover {
    color: aqua;
    cursor: pointer;
    transform: scale(1.1);
  }
`

const DarkMode = styled.button`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    margin-left: 30px;
    cursor: pointer;
`

const Tooltip = styled.div`
  visibility: hidden;
  background-color: aqua;
  color: #000;
  text-align: center;
  font-size: small;
  font-weight: 500;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  top: 40px;
  width: max-content;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
`

