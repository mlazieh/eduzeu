import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.nav`
background: #191714;
padding: 1rem;
display: flex;
align-items: center;

`
const NavLinks = styled.div`
  display: flex;
  gap: 10rem;
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
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }


`;

const Navbar = () => {
    return (
        <NavigationBar>

            <NavLinks>
                    <NavLink href="#home"> Home</NavLink>
                    <NavLink href="#Projects"> Projects</NavLink>
                    <NavLink href="#About"> About</NavLink>
            </NavLinks>
        </NavigationBar>
    )
}

export default Navbar;