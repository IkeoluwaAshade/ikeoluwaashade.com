import React, { useState } from 'react';
import { useTheme } from '../../globalTheme/ThemeContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Navigation and socials icons
import { FaBookOpen, FaBlogger, FaGithub } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { MdNoPhotography } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { SiFrontendmentor } from 'react-icons/si';
import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import SideBar from './SideBar';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => setToggle(!toggle);

  return (
    <>
      <Container>
        <Wrapper>
          <MyName>Ikeoluwa Ashade</MyName>
          <NavDiv>
            <Nav>
              <FaBookOpen />
              <StyledLink to='/'><span>Home</span></StyledLink>
            </Nav>
            <Nav>
              <VscProject />
              <StyledLink to='/project'><span>Projects</span></StyledLink>
            </Nav>
            <Nav>
              <FaBlogger />
              <StyledLink to='/blog'><span>Blog</span></StyledLink>
            </Nav>
            <Nav>
              <MdNoPhotography />
              <StyledLink to='/photography'><span>Photography</span></StyledLink>
            </Nav>
          </NavDiv>
          <Socials>
            <IconContainer>
              <Github>
                <a href="https://github.com/IkeoluwaAshade" target='_blank' rel="noopener noreferrer"><StyledGithubIcon /></a>
                <Tooltip>Github</Tooltip>
              </Github>
            </IconContainer>
            <IconContainer>
              <Frontend>
                <a href="https://www.frontendmentor.io/profile/IkeoluwaAshade" target='_blank' rel="noopener noreferrer"><StyledFrontendIcon /></a>
                <Tooltip>Frontend Mentor</Tooltip>
              </Frontend>
            </IconContainer>
            <IconContainer>
              <LinkedIn>
                <a href="https://www.linkedin.com/in/ikeoluwaashade" target='_blank' rel="noopener noreferrer"><StyledLinkedinIcon /></a>
                <Tooltip>LinkedIn</Tooltip>
              </LinkedIn>
            </IconContainer>
            <IconContainer>
              <DarkMode onClick={toggleTheme}>
                {theme === 'light' ? <BsToggle2Off size={25} /> : <BsToggle2On size={25} />}
                <Tooltip>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to light mode'}</Tooltip>
              </DarkMode>
            </IconContainer>
          </Socials>
          <Side>
            {toggle ? (
              <FiX onClick={toggleChange} size='25px' />
            ) : (
              <FiMenu onClick={toggleChange} size='25px' />
            )}
          </Side>
        </Wrapper>
      </Container>
      {toggle ? <SideBar setToggle={setToggle} toggle={toggle} /> : null}
    </>
  );
};

export default Header

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.54) 0px 25px 20px -15px;
  border-bottom:5px solid ${(props) => props.theme.color};

  margin-top: 0;
  top: 0;
  position: fixed;
`

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`

const NavDiv = styled.div`
  min-width: 520px;
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
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  span {
    text-decoration: none;
    margin-left: 1em;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`

const Socials = styled.div`
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
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`
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
    text-decoration: none;
    margin-left: 10px;
    transition: 0.5s ease;
  }
`

const StyledGithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.color};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const Frontend = styled.div`
  transition: all 550ms;

  a {
    margin-left: 10px;
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

  a {
    color: #123;
    text-decoration: none;
    margin-left: 10px;
    transition: 0.5s ease;
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

const Side = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`

