import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume_pdf from "../images/Resume.docx.pdf";
import Navbar from '../NavBar';

// Set the workerSrc to the location of pdf.worker.min.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
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
                <Container>
                    <Document
                        file={resume_pdf}
                        onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} pages`)}
                    >
                        <Page pageNumber={1} />
                    </Document>
                </Container>
            </Background>
        </AppContainer>
    );
}

const Fonts = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0; /* Remove top margin and add space below */
`;

const Background = styled.div`
  background: #002244;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
    margin-top: 80px;
    padding: 20px; /* Add padding to avoid clipping */
    overflow: hidden; /* Prevent scrollbars */
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

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevent overall scrollbars */
`;

export default Resume;
