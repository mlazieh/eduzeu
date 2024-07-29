import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
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
          <Title>
            <Typewriter
              text="Eduardo Hernandez"
              typeSpeed={50}
              startDelay={500}
            />
          </Title>
          <Portrait src={self} />
          <Degree>
            <Typewriter
              text="Software Engineer"
              typeSpeed={100}
              startDelay={1500}
            />
          </Degree>
        </Header>
        <Description>
          Hello! I am a Senior at Stevens Institute of Technology with a robust foundation in mathematical
          and programming concepts. My passion for problem-solving drives me to excel in various aspects
          of software development. I have extensive experience in testing software, back-end and front-end development, and debugging.
        </Description>
        <ScrollButton onClick={scrollToSection}>
          My Skillset <Arrow />
        </ScrollButton>
        <ProgrammingLanguages ref={programmingLanguagesRef} />
        <Frameworks ref={programmingLanguagesRef} />
      </Background>
    </div>
  );
}

const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
`;

const Degree = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: 'Poppins', sans-serif;
`;

const Portrait = styled.img`
  width: 180px;
  height: 150px;
  margin: 0px 0;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`;

const Description = styled.p`
  text-align: center;
  padding: 0 90px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem; /* Adjust font size for better readability */
  line-height: 1.5; /* Increased line height for readability */
  margin-bottom: 25px; /* Ensure space below the description */
`;

const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4px auto;
  padding: 10px 55px;
  font-size: 19px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom right, #30cfd0, #330867); /* Gradient background */
  color: #fff;
  border: none;
  border-radius: 50px; /* Changed to make the button oval */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(5px);
  }
`;

const Arrow = styled(FaArrowDown)`
  margin-left: 10px;
  font-size: 20px;
  animation: ${fadeInOut} 1.5s infinite;
`;

export default App;
