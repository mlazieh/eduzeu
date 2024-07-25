import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './NavBar';
import Background from './Background';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Background>
        <Navbar />
        <h1>Eduardo Hernandez</h1>
        <h2>Software Engineer</h2>
        <Description>
          Hello! I am a Senior at Stevens Institute of Technology with a robust foundation in mathematical 
          and programming concepts. My passion for problem-solving drives me to excel in various aspects
          of software development. I have extensive experience in testing software, back-end and front-end development, and debugging.
        </Description>
        <Tools>
          Programming languages: Python, JavaScript, HTML, CSS, Java, C++, C, Bash, Ocaml, R<br />
          Frameworks: React, Node.js, Flask, Django <br />
          Tools: Git, GitHub, VS Code, PostgreSQL, MongoDB, AWS
        </Tools>
      </Background>
    </div>
  );
}

const Tools = styled.p`
  text-align: left;
  color: white;
  margin: 0 auto;
  padding: 20px;
  max-width: 90%;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const Description = styled.p`
  max-width: 60vw;
  margin: 0 auto;
  text-align: justify;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 80vw;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 90vw;
  }
`;

export default App;
