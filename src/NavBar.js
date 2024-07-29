import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.nav`
  
  background: rgba(25, 23, 20, 0); /* Fully transparent background */
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

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem; /* Adjust font size */
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem; /* Adjust padding for the links */
  transition: color 0.3s ease, text-shadow 0.3s ease;
  
  &:hover {
    color: gray;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }
  
  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
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
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Experience">Experience</NavLink>
        <NavLink href="#About">About</NavLink>
      </NavLinks>
    </NavigationBar>
  );
}

export default Navbar;
