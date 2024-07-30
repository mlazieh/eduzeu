import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
