import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        setMousePos({ x, y });
    };

    return (
        <AppContainer onMouseMove={handleMouseMove}>
            <Background>
                <GradientOverlay x={mousePos.x} y={mousePos.y} />
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <Content>
                    <Title>A bit about my journey</Title>
                    <Description>
                        Hey :) I moved to the United States in 2017, and since then, I have been working 
                        on my professional career. I started my academic journey in Bergen Community College, 
                        where I attained an Associates in Information Technology. At BCC, I participated in STEM 
                        research, led a Computer Science Project, led the Latin American Association, and volunteered 
                        as an English for a Second Language instructor. 
                    </Description>
                    <Description>
                        At Stevens, I have participated in several activities that have enhanced my CS skills. I have 
                        worked as a Teaching Assistant for Python and Algorithms courses. Moreover, I studied abroad
                        in Italy, where I participated in a Data Science and Machine Learning research project. Currently, 
                        I am improving my software engineering skills and focusing on full-stack development. 
                    </Description>
                    <Description>
                        Here's a list of scholarships/recognitions I have been awarded throughout the years:
                    </Description>
                    <ImagesRow>
                        <Image src={require("../images/JKC.png")} alt="jkc" />
                        <Image src={require("../images/google.png")} alt="google" />
                        <Image src={require("../images/cafe.png")} alt="caf" />
                        <Image src={require("../images/elsal.png")} alt="sv" />
                    </ImagesRow>
                </Content>
            </Background>
        </AppContainer>
    );
};

const NavbarContainer = styled.div`
  position: relative;
  z-index: 2; /* Ensure the Navbar is above the gradient overlay */
  width: 100%;
`;

const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: bold;
  margin-top: -40px;
`;

const Image = styled.img`
  width: 310px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 25px; /* Space between images */
  margin-top: 20px;
`;

const Description = styled.p`
  text-align: center;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 2.0;
`;

const Background = styled.div`
  background: #002244;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  position: relative;
  padding: 0 20px; /* Adjust as needed to control side padding */
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at ${props => props.x}px ${props => props.y}px, rgba(0, 34, 68, 0.5) 0%, rgba(0, 34, 68, 0) 30%);
  transition: background 0.1s;
  mix-blend-mode: screen; /* Optional: To blend with background */
`;

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  padding: 170px;
  position: relative;
  z-index: 1; /* Ensure content is above gradient overlay */
  margin-top: 10px; /* Adjust as needed to control top margin */
  overflow: hidden; /* Prevent overall scrollbars */
`;

export default Resume;
