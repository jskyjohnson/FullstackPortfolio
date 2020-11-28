import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import resume from "assets/docs/resume.pdf";
import "assets/css/pages/ResumePage.scss";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = () => {
  return (
    <Container>
      <Document file={resume}>
        <Page pageNumber={1} renderTextLayer={false}  width={1000}/>
      </Document>
      <Button className="resume_download_button">
        <a href="resume.pdf" download="Johnson_Sky_Resume.pdf">
          Download Resume
        </a>
      </Button>
    </Container>
  );
};
