import { Contact } from "containers/Contact";
import React from "react";
import { Header } from "semantic-ui-react";

import 'assets/css/pages/ContactPage.scss'

export const ContactPage = () => {
  return (
    <div>
      <Header as="h2" className="contact_header">
        Contact<span className="dot">.</span>
        <div className="line" />
      </Header>
      <div className="h_contact_clone">Contact</div>
      <Contact />
    </div>
  );
};
