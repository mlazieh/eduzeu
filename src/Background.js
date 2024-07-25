import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background: linear-gradient(to bottom, #000000, #130F40);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
