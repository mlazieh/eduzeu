import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Experience() {
    return (
    
        <AppContainer>
            <Background>
            <Exp>
            Experience
            </Exp>

            
            </Background> 
        </AppContainer>

     )
    
}
const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: #002D62;

  overflow: "hidden"

`;
const Exp = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400px;
`
const Background = styled.div`
  background: #002D62;
  height: 100vh
    display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
 `;
export default Experience;