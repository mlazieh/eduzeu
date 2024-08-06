import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume_pdf from "../images/Resume.docx.pdf";

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

                <Document
                    file={resume_pdf}
                    onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} pages`)}
                >
                    <Page pageNumber={1} />
                </Document>
                <a href={resume_pdf} download="resume.pdf">Download Resume</a>
            </Background>
        </AppContainer>
    );
}

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
  overflow: auto;
`;

export default Resume;
