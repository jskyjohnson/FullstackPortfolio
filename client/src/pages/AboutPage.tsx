import React from "react";
import { Header } from "semantic-ui-react";
import 'assets/css/pages/AboutPage.scss'
import { About } from "containers/About";

export const AboutPage = () => {
  return (
    <div>
      <Header as="h2" className="about_header">
        About Me<span className="dot">.</span>
        <div className="line" />
      </Header>
      <div className="h_about_clone">About Me</div>

			<About />
    </div>
  );
};
