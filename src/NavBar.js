import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const NavigationBar = styled.nav`
  background: rgba(22, 23, 20, 0); 
  padding: 0.2rem 1rem; /* Adjust padding for a smaller navbar */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease;
  backdrop-filter: blur(10px); /* Apply blur effect */

@media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column; /* Stack items vertically */
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 2rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &.active {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  & span {
    position: relative;
    z-index: 1;
  }
`;
const Download = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 2rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &.active {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  & span {
    position: relative;
    z-index: 1;
  }
`;


const Navbar = () => {
  return (
    <NavigationBar>
      <NavLinks>
        <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
        <StyledLink to="/projects" activeClassName="active">Projects</StyledLink>
        <StyledLink to="/experience" activeClassName="active">Experience</StyledLink>
        <Download href={require("../src/images/resume.pdf")} download="Eduardo_Hernandez_Resume.pdf" activeClassName="active">Resume</Download>
      </NavLinks>
    </NavigationBar>
  );
}

export default Navbar;
