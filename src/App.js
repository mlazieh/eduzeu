import React, { useRef } from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';
import Background from './Background';
import pylogo from './images/py.jpeg';
import javaLogo from './images/java.png';
import html from './images/htm.png';
import cs from './images/csss.png';
import java from './images/vs.png';
import self from "./images/self.jpeg";
import cplus from "./images/c++.png";
import c from "./images/C_Logo.png";
import ocam from "./images/ocaml.png";
import { FaArrowDown } from 'react-icons/fa';

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
        <Tools>
          Frameworks: React, Node.js, Flask, Django <br />
          Tools: Git, GitHub, VS Code, PostgreSQL, MongoDB, AWS
        </Tools>
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
        <Image src={ocam} alt="Ocaml" />
        <ImageName>Ocaml</ImageName>
      </ImageWrapper>
    </ImagesContainer>
  </LanguagesContainer>
));

const LanguagesContainer = styled.div`
  text-align: center;
  margin: 40px 0; /* Adjust spacing to ensure visibility */
  font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  font-family: 'Open Sans', sans-serif;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 55px;
  height: 45px;
  transition: transform 0.3s;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.2);
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

const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
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
