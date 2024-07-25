import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.nav`
background: #191714;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;

`
const NavLinks = styled.div`
  display: flex;
  gap: 15rem;
    @media (max-width: 768px) {
    gap: 2rem; /* Reduced gap for tablets */
  }
  
  @media (max-width: 480px) {
    gap: 1rem; /* Reduced gap for mobile devices */
    flex-direction: column; /* Stack links vertically on small screens */
    align-items: center; /* Center align the links */
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem; /* Add some padding to the links for better visual effect */
  transition: color 0.3s ease, text-shadow 0.3s ease;
  
  &:hover {
    color: #gray; /* Change text color on hover */
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7); /* Add a glow effect to the text */

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
                    <NavLink href="#home"> Home</NavLink>
                    <NavLink href="#Projects"> Projects</NavLink>
                    <NavLink href="Experience">Experience </NavLink>
                    <NavLink href="#About"> About</NavLink>
            </NavLinks>
        </NavigationBar>
    )
}

export default Navbar;