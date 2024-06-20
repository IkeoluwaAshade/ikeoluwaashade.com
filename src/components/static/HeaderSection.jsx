import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../block/Themes/GlobalStyles'

// Navigation
import { FaBookOpen } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { FaBlogger } from 'react-icons/fa';
import { MdNoPhotography } from 'react-icons/md';

// Socials
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { SiFrontendmentor } from 'react-icons/si';

// Dark Mode ==and== Hamburger
import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';
import { lightTheme, darkTheme } from '../block/Themes/themes';

import { FiMenu, FiX } from 'react-icons/fi';
import SideBar from './SideBar';



const Header = () => {
    const [theme, setTheme] = useState('light');
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const [toggle, setToggle] = useState(false);
    const toggleChange = () => {
        setToggle(!toggle);
    };

    

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Container>
                
                <Wrapper>
                    <Logo>Ikeoluwa Ashade</Logo>

                    {/* <MenuIcon onClick={toggleMenu}>
                        {isMenuOpen ? <FiX size={25} /> : <FiMenu size = {25} />}
                    </MenuIcon> */}

                    <NavDiv /* isOpen={isMenuOpen} */ >
                        <Nav>
                            <VscProject />
                            <a href="#" target='_blank' rel="noopener noreferrer">Projects</a>
                        </Nav>

                        <Nav>
                            <FaBlogger />
                            <a href="https://ikeoluwaashade.blogspot.com/" target='_blank' rel="noopener noreferrer">Blog</a>
                        </Nav>

                        <Nav>
                            <MdNoPhotography />
                            <a href="#" target='_blank' rel="noopener noreferrer">Photography</a>
                        </Nav>
                    </NavDiv>

                    <Socials /* isOpen={isMenuOpen} */>
                        <IconContainer>
                            <Github>
                                <FaGithub />
                                <a href='https://github.com/IkeoluwaAshade' target='_blank' rel="noopener noreferrer"></a>
                                <Tooltip>Github</Tooltip>
                            </Github>
                        </IconContainer>

                        <IconContainer>
                            <Frontend>
                                <SiFrontendmentor />
                                <a href='https://www.frontendmentor.io/profile/IkeoluwaAshade' target='_blank' rel="noopener noreferrer">
                                </a>
                                
                                <Tooltip>Frontend Mentor</Tooltip>
                            </Frontend>
                        </IconContainer>

                        <IconContainer>
                            <LinkedIn>
                                <GrLinkedin />
                                <a href='https://www.linkedin.com/in/ikeoluwaashade' target='_blank' rel="noopener noreferrer">
                                </a>
                                <Tooltip>LinkedIn</Tooltip>
                            </LinkedIn>
                        </IconContainer>

                        <IconContainer>
                            <DarkMode onClick={toggleTheme}>
                                {theme === 'light' ? <BsToggle2Off size={25} /> : <BsToggle2On size={25} />}
                                <Tooltip>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to light Mode'}</Tooltip>
                            </DarkMode>
                        </IconContainer>
                    </Socials>

                    <Side>
                        {toggle ? (
                            <FiX  onClick={toggleChange} size='25px' />
                        ) : (
                            <FiMenu onClick={toggleChange} size='25px' />
                        )}
                    </Side>
                </Wrapper>
            
            </Container>
            {toggle ? <SideBar setToggle={setToggle} toggle={toggle} /> : null}
        </ThemeProvider>
    );
};

export default Header;

const Container = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    color: ${({ theme }) => theme.text};
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    color: ${({ theme }) => theme.text};
    font-size: 27px;
    font-weight: 700;
`;

const NavDiv = styled.div`
    color: ${({ theme }) => theme.text};
    min-width: 350px;
    height: 40px;
    font-weight: 500;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        background-color: gray;
        height: 500px;
        flex-direction: column;
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        background-color: ${(props) => props.theme.backgroundColor};
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    }
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;

    a {
        color: ${({ theme }) => theme.text};
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
`;

const Socials = styled.div`
    color: ${({ theme }) => theme.text};
    min-width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 550ms;

    @media (max-width: 768px) {
        
        flex-direction: column;
        position: absolute;
        top: 250px;
        left: 0;
        right: 0;
        background-color: ${(props) => props.theme.backgroundColor};
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    }
`;

const IconContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover div {
        visibility: visible;
        opacity: 1;
}
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

const Github = styled.div`
    transition: all 550ms;

    a {
        color: ${({ theme }) => theme.text};
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
`;

const Frontend = styled.div`
    transition: all 550ms;

    a {
        color: ${({ theme }) => theme.text};
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
`;

const LinkedIn = styled.div`
    transition: all 550ms;

    a {
        color: ${({ theme }) => theme.text};
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
`;

const DarkMode = styled.div`
    margin-left: 30px;
    cursor: pointer;
`;

// const MenuIcon = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;

const Side = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`