import react from "./images/react.png";
import nodej from "./images/node.png";
import yango from "./images/dj.png";
import gh from "./images/git.png";
import React from 'react';
import styled from 'styled-components';
import express from "./images/express.png";
import Typewriter from 'react-typewriter-effect';

const Frameworks = React.forwardRef((props, ref) => (
    <LanguagesContainer ref={ref}>
      <Title>
        <Typewriter
              text= "Frameworks and Technologies"
              typeSpeed={50}
              startDelay={500}
              cursor={false} // Hide cursor after typing is doneFrameworks and Technologies </Title>
              />
        </Title>
      <ImagesContainer>
        <ImageWrapper>
        <StyledLink href="https://github.com/eduzeu/website" target="_blank" rel="noopener noreferrer">
          <Image src={react} alt="React" />
          </StyledLink>
          <ImageName>React</ImageName>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={nodej} alt="node" />
          <ImageName>Node.js</ImageName>
        </ImageWrapper>
        <ImageWrapper>
        <StyledLink href="https://github.com/eduzeu/rest" target="_blank" rel="noopener noreferrer">
          <Image src={yango} alt="dja" />
          </StyledLink>
          <ImageName>Django</ImageName>
        </ImageWrapper>
        <ImageWrapper>
        <StyledLink href="https://github.com/eduzeu" target="_blank" rel="noopener noreferrer">
          <Image src={gh} alt="git" />
          </StyledLink>
          <ImageName>Git</ImageName>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={express} alt="exp" />
          <ImageName>Express.js</ImageName>
        </ImageWrapper>
      </ImagesContainer>
    </LanguagesContainer>
  ));

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 0;
  font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 15px;
  color: white;
  font-family: 'Poppins', sans-serif;
  margin-top: -5px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
  width: 60%;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: calc(100% / 5 - 20px); /* Initially fit 5 items per row */

  @media (max-width: 1200px) {
    width: calc(100% / 4 - 20px); /* Fit 4 items per row on medium screens */
  }

  @media (max-width: 900px) {
    width: calc(100% / 3 - 20px); /* Fit 3 items per row on smaller screens */
  }

  @media (max-width: 600px) {
    width: calc(100% / 2 - 20px); /* Fit 2 items per row on small screens */
  }

  @media (max-width: 400px) {
    width: 100%; /* Fit 1 item per row on very small screens */
  }
`;
const Image = styled.img`
  font-family: 'Poppins', sans-serif;
  width: 70px;
  height: 55px;
  transition: transform 0.3s;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for 3D effect */
  background: linear-gradient(to bottom right, #30cfd0, #330867); /* Gradient background */
  padding: 10px; /* Space between image and border */

  
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    width: 70px; /* Adjust image size for smaller screens */
    height: 50px;
  }
`;
const ImageName = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
    
  &:hover {
    transform: scale(1.1);
  }
`;

export default Frameworks;