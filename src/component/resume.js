import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '../NavBar';

// Set the workerSrc to the location of pdf.worker.min.js
 
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
            <Navbar />
            <Description>
           Hey :) I moved to the United States in 2017, and since then, I have been working 
           on my professional career. I started my academic journey in Bergen Community College, 
           where I attained an Associates in Information Technology. At BCC, I participated in STEM 
           research, led a Computer Science Project, led the Latin American Association, and volunteered 
           as an English for a Second Language instructor. 
          </Description>
          <Description>
            At Stevens, I have participated in several activies that have enhanced my CS skills. I have 
            worked as a Teaching Assistant for Python and Algorithms courses. Moreover, I stucied abroad
            in Italy, where I participated in a Data Science and Machine Learning research project. 
          </Description>
            </Background>
        </AppContainer>
    );
}

const Description = styled.p`
  text-align: center;
  padding: 400px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 2.0;
`;

const Background = styled.div`
  background: #002244;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  position: relative;
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
  width: 1z0vw;
  height: 150vh;
  overflow: auto;
`;

export default Resume;
