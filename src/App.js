import React, { useRef } from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';
import Background from './Background';
import self from "./images/self.jpeg";
import { FaArrowDown } from 'react-icons/fa';
import ProgrammingLanguages from './skills';
import Frameworks from './frames';
import Typewriter from 'react-typewriter-effect';

function App() {
  const programmingLanguagesRef = useRef(null);


  const scrollToSection = () => {
    programmingLanguagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <Background>
        <Navbar />
        <Header>
          <h1>Eduardo Hernandez</h1>
          <Portrait src={self} />
          <h2>Software Engineer</h2>
        </Header>
        <Description>
          Hello! I am a Senior at Stevens Institute of Technology with a robust foundation in mathematical 
          and programming concepts. My passion for problem-solving drives me to excel in various aspects
          of software development. I have extensive experience in testing software, back-end and front-end development, and debugging.
        </Description>
        <ScrollButton onClick={scrollToSection}>
          My Skillset <FaArrowDown />
        </ScrollButton>
        <ProgrammingLanguages ref={programmingLanguagesRef} />
        <Frameworks ref={programmingLanguagesRef} />
      </Background>
    </div>
  );
}


const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: 'Open Sans', sans-serif;
`;

const Portrait = styled.img`
  width: 180px;
  height: 150px;
  margin: 5px 0;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`;

const Description = styled.p`
  text-align: center;
  padding: 0 90px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem; /* Adjust font size for better readability */
  line-height: 1.6; /* Increased line height for readability */
  margin-bottom: 20px; /* Ensure space below the description */
`;

const Tools = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 20px; /* Ensure space above the tools section */
`;

const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 15px 30px;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px; /* Changed to make the button oval */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  svg {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export default App;
