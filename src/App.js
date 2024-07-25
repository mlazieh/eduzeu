import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './NavBar';
import Background from './Background';
import styled from 'styled-components';
import pylogo from './images/py.jpeg';
import javaLogo from './images/java.png';
import html from './images/htm.png';
import cs from './images/csss.png';
import java from './images/vs.png'
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
          Programming languages: Python <Image src={pylogo}/> JavaScript <Image src={javaLogo}/> 
         HTML <Image src={html}/> CSS  <Image src={cs}/> 
          Java <Image src={java}/> C++, C, Bash, Ocaml, R<br />
          Frameworks: React, Node.js, Flask, Django <br />
          Tools: Git, GitHub, VS Code, PostgreSQL, MongoDB, AWS
        </Tools>
      </Background>
    </div>
  );
}
const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 3px;
  vertical-align: middle;
`;

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
