import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar';

function Projects() {
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
                <Content>
                    <Exp>Projects</Exp>
                    <ExperienceDetails>
                        <ClickableBox>
                            <DateRange>Personal Website</DateRange>
                            <JobDescription>
                                Developed an interactive personal website using React. Utilized CSS and JavaScript
                                animations to create an engaging and user-friendly front-end experience. Designed a responsive 
                                layout to ensure optimal viewing across various devices. Implemented smooth scrolling and dynamic 
                                content updates for a seamless user experience. Focused on clean, maintainable code and modern 
                                web development practices to enhance both performance and scalability.
                                <ButtonContainer>
                                    <ScrollButton>JavaScript</ScrollButton>
                                    <ScrollButton>HTML</ScrollButton>
                                    <ScrollButton>CSS</ScrollButton>
                                    <ScrollButton>React</ScrollButton>
                                </ButtonContainer>
                            </JobDescription>
                        </ClickableBox>
                        <ClickableBox>
                            <DateRange>My Music Website</DateRange>
                            <JobDescription>
                                Developed a website where users can explore the music industry, find out news, see trendings, and discover
                                new music utilizing the Spotify API. Users can create new playlists based on their favorite genres,
                                have access to articles regarding their favorite artists, and access to a database with +1000 song suggestions.
                                <ButtonContainer>
                                    <ScrollButton>HTML</ScrollButton>
                                    <ScrollButton>CSS</ScrollButton>
                                    <ScrollButton>JavaScript</ScrollButton>
                                </ButtonContainer>
                            </JobDescription>
                        </ClickableBox>
                        <ClickableBox>
                            <DateRange>Trivia Game</DateRange>
                            <JobDescription>
                                Implemented a trivia game in C using sockets. The game allows up to 3 users to connect to the network and play.
                                Users will compete by answering trivia questions, with their responses being sent to the server for validation. 
                                The game tracks scores in real-time, providing immediate feedback to players. Designed the system to handle 
                                multiple connections simultaneously, ensuring a smooth and interactive gaming experience for all participants.
                                <ButtonContainer>
                                    <ScrollButton>C</ScrollButton>
                                </ButtonContainer>
                            </JobDescription>
                        </ClickableBox>
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
  margin-left: 100px;
`;

const Exp = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: white; /* Ensure text is visible against background */
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  flex-wrap: wrap; /* Allow items to wrap to the next line if necessary */
  gap: 20px; /* Space between items */
  margin: 100px auto;
  max-width: 1000px; /* Optional: To limit the maximum width */
  padding: 0 20px; /* Optional: Padding to handle content edges */
`;

const ClickableBox = styled.div`
  background: transparent; /* Transparent background */
  border: 2px solid transparent; /* Transparent border */
  border-radius: 10px; /* Rounded corners */
  padding: 20px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    border-color: #00ffff; /* Aqua border on hover */
  }
`;

const DateRange = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #ddd; /* Light color for contrast */
  text-align: left;
`;

const JobDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #fff; /* Ensure text is visible */
  text-align: left;
  margin-top: 15px;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between buttons */
  margin-top: 10px; /* Space above the buttons */
`;

const ScrollButton = styled.button`
  padding: 5px 20px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background: transparent; /* Make the button background transparent */
  color: #00ffff; /* Font color aqua */
  border: 2px solid #00ffff; /* Border to make the button visible */
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    transform: scale(1.05);
  }
`;

export default Projects;
