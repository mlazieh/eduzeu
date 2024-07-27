import react from "./images/react.png";
import nodej from "./images/node.png";
import yango from "./images/dj.png";
import gh from "./images/git.png";
import React from 'react';
import styled from 'styled-components';
import express from "./images/express-js.png";
import flask from "./images/fla.jpg";

const Frameworks = React.forwardRef((props, ref) => (
    <LanguagesContainer ref={ref}>
      <Title>Frameworks and Technologies </Title>
      <ImagesContainer>
        <ImageWrapper>
          <Image src={react} alt="React" />
          <ImageName>React</ImageName>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={nodej} alt="node" />
          <ImageName>Node.js</ImageName>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={yango} alt="dja" />
          <ImageName>Django</ImageName>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={gh} alt="git" />
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
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: 'Open Sans', sans-serif;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -11px;
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
  width: 90px;
  height: 70px;
  transition: transform 0.3s;
  border-radius: 50%;
  
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
  font-family: 'Open Sans', sans-serif;
    
  &:hover {
    transform: scale(1.1);
  }
`;

export default Frameworks;