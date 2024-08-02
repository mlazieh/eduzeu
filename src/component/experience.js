import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function Experience() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        setMousePos({ x, y });
    };

    return (
        <AppContainer onMouseMove={handleMouseMove}>
            <Background>
                <GradientOverlay x={mousePos.x} y={mousePos.y} />
                <Exp>Experience</Exp>
                <ExperienceDetails>
                    <DateRange>May 2023 - August 2024</DateRange>
                    <JobDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis nunc. 
                        Donec vehicula lorem eu libero pretium, a malesuada urna scelerisque. Duis et 
                        venenatis velit. Proin sed diam nec arcu consectetur tincidunt.
                    </JobDescription>
                </ExperienceDetails>
            </Background>
        </AppContainer>
    );
}

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
  overflow: hidden; /* Ensure content doesn't overflow */
`;

const Exp = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: white; /* Ensure text is visible against background */
`;

const Background = styled.div`
  background: #002244;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  position: relative; /* Ensure gradient overlay is positioned correctly */
`;

const ExperienceDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Adjust the ratio as needed */
  gap: 20px; /* Space between columns */
  margin: 20px auto;
  width: 80%; /* Adjust the width as needed */
  max-width: 800px; /* Optional: To limit the maximum width */
`;

const DateRange = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ddd; /* Light color for contrast */
  text-align: left;
`;

const JobDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #fff; /* Ensure text is visible */
  text-align: left;
`;

export default Experience;
