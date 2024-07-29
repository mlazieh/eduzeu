import React from 'react';
import styled from 'styled-components';
import pylogo from './images/pyy.png';
import javaLogo from './images/java.png';
import html from './images/htm.png';
import cs from './images/css.png';
import cplus from "./images/c++.png";
import c from "./images/C_Logo.png";
import mon from "./images/mongo.png";
import sql from "./images/sq.png";
import r from "./images/r.png";
import java from "./images/vs.png"

const ProgrammingLanguages = React.forwardRef((props, ref) => (
  <LanguagesContainer ref={ref}>
    <Title>Programming Languages</Title>
    <ImagesContainer>
      <ImageWrapper>
        <Image src={pylogo} alt="Python" />
        <ImageName>Python</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={javaLogo} alt="JavaScript" />
        <ImageName>JavaScript</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={html} alt="HTML" />
        <ImageName>HTML</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={cs} alt="CSS" />
        <ImageName>CSS</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={java} alt="Java" />
        <ImageName>Java</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={cplus} alt="C++" />
        <ImageName>C++</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={c} alt="C" />
        <ImageName>C</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={mon} alt="MongoDB" />
        <ImageName>MongoDB</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={sql} alt="SQL" />
        <ImageName>SQL</ImageName>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={r} alt="R" />
        <ImageName>R</ImageName>
      </ImageWrapper>
    </ImagesContainer>
  </LanguagesContainer>
  
));

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-top: 40px;

`;

const Title = styled.h3`
  margin-bottom: 38px;
  font-size: 24px;
  color: white;
  font-family: 'Poppins', sans-serif;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 60%;
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
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for 3D effect */
  background: linear-gradient(to bottom right, #30cfd0, #330867); /* Gradient background */
  padding: 10px; /* Space between image and border */
  transform: scale(1); /* Initial scale */

  
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

export default ProgrammingLanguages;
