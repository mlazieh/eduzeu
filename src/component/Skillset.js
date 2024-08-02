import React, { useState } from 'react';
import ProgrammingLanguages from '../skillset/skills';
import Frameworks from '../skillset/frames';
import styled, { keyframes } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';

const SkillsetSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowSkillset = () => {
    setIsVisible(true);
  };

  return (
    <SkillsetContainer>
      <ShowButton onClick={handleShowSkillset}>
        My Skillset <Arrow />
      </ShowButton>
      {isVisible && (
        <>
          <ProgrammingLanguages />
          <Frameworks />
        </>
      )}
    </SkillsetContainer>
  );
};

const SkillsetContainer = styled.div`
  margin-top: 20px; /* Adjust as needed */
  text-align: center;
`;

const ShowButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px auto;
  padding: 10px 55px;
  font-size: 19px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom right, #30cfd0, #330867);
  color: #fff;
  border: none;
  border-radius: 50px;
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

export default SkillsetSection;
