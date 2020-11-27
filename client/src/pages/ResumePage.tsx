import React from "react";
import { Header } from "semantic-ui-react";
import "assets/css/pages/ResumePage.scss";
import { Resume } from "containers/Resume";



export const ResumePage = () => {
  return (
    <div>
      <Header as="h2" className="resume_header">
        Resume<span className="dot">.</span>
        <div className="line" />
      </Header>
      <div className="h_resume_clone">Resume</div>
      <Resume />
    </div>
  );
};
