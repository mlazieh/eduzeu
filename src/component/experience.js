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
                <Content>
                    <Exp>Experience</Exp>
                    <ExperienceDetails>
                        <DateRange>May 2024 - August 2024</DateRange>
                        <JobDescription>
                            <Position>Software Engineer</Position>
                            <DescriptionText>
                                At Cyasoon, I have worked as a Full-Stack Software Engineer. My work here includes writing unit 
                                tests for all the REST-API routes. I have created routes, written documentations, updated the database, 
                                implemented UI features on the front-end and connected as well as implemented APIS in the back-end.
                            </DescriptionText>
                            <ButtonContainer>
                                <ScrollButton>JavaScript</ScrollButton>
                                <ScrollButton>HTML</ScrollButton>
                                <ScrollButton>CSS</ScrollButton>
                                <ScrollButton>React</ScrollButton>
                                <ScrollButton>Node.js</ScrollButton>
                            </ButtonContainer>
                        </JobDescription>
                        <DateRange>May 2023 - Jun 2023</DateRange>
                        <JobDescription>
                            <Position>Teaching Assistant</Position>
                            <DescriptionText>
                                I worked at Stevens Institute of Technology as a TA for a Python Pogramming course. The course entailed introduction
                                to Python programming. I taught +50 students the basics of Python as well as the use of Juypiter Notebooks and introductory Data Science concepts, including linear regression and data engineering. 
                            </DescriptionText>
                            <ButtonContainer>
                                <ScrollButton>Python</ScrollButton>
                                <ScrollButton>Jupyter Notebooks</ScrollButton>
                            </ButtonContainer>
                        </JobDescription>
                        <DateRange>Jun 2023 - August 2023</DateRange>
                        <JobDescription>
                            <Position>Research Assistant</Position>
                            <DescriptionText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis nunc. 
                                Donec vehicula lorem eu libero pretium, a malesuada urna scelerisque. Duis et 
                                venenatis velit. Proin sed diam nec arcu consectetur tincidunt.
                            </DescriptionText>
                            <ButtonContainer>
                                <ScrollButton>Python</ScrollButton>
                                <ScrollButton>Jupyter Notebooks</ScrollButton>
                            </ButtonContainer>
                        </JobDescription>
                        <DateRange>Jan 2021 - May 2022</DateRange>
                        <JobDescription>
                            <Position>Software Engineer</Position>
                            <DescriptionText>
                                I worked as Software Engineer Intern for a cybersecurity project called "Ethical Hacking Using C++"
                                at Bergen Community College. Here, I wrote malware using C/C++. I used system calls to access low level
                                computer features, used sockets, pipes, and implemented keyloggers, trojan, and user-friendly mini-games 
                                in C++ to showcase cybersecurity practices. 
                            </DescriptionText>
                            <ButtonContainer>
                                <ScrollButton>C++</ScrollButton>
                                <ScrollButton>C</ScrollButton>
                            </ButtonContainer>
                        </JobDescription>
                    </ExperienceDetails>
                </Content>
            </Background>
        </AppContainer>
    );
}

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: auto; /* Make the entire container scrollable */
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

const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const Exp = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: white; /* Ensure text is visible against background */
`;

const ExperienceDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Adjust the ratio as needed */
  gap: 40px; /* Space between columns */
  margin: 100px auto;
  width: 80%; /* Adjust the width as needed */
  max-width: 800px; /* Optional: To limit the maximum width */
  margin-top: -5px;
`;

const DateRange = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ddd; /* Light color for contrast */
  text-align: left;
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start; /* Align items to the start */
  gap: 10px; /* Space between text and button */
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #fff; /* Ensure text is visible */
  text-align: left;
`;

const DescriptionText = styled.div`
  margin-bottom: 10px;  
  margin-top: -20px;
`;

const Position = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  margin-top: -1px;
  font-weight: bold;

`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px; /* Space between buttons */
`;

const ScrollButton = styled.button`
  padding: 2px 20px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background: transparent; /* Make the button background transparent */
  color: #00ffff; /* Font color aqua */
  border: 2px solid #00ffff; /* Optional: Border to make the button visible */
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin: 0 5px; /* Space between buttons */
  margin-top: -10px;
  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    transform: scale(1.05);
  }
`;

export default Experience;
