import { ContactForm } from "components/contact/ContactForm";
import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "assets/css/containers/Contact.scss";
import { ContactInfo } from "components/contact/ContactInfo";
import { ContactAvailability } from "components/contact/ContactAvailability";
import { Map } from "components/contact/Map";

export const Contact = () => {
  return (
    <Container columns={3} className="contact_wrapper">
      
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                
                <Grid.Row className="contact_form">
                  <Header as="h3">Message me</Header>

                  <ContactForm />
                </Grid.Row>
                <Grid.Row className="contact_info">
                  <Header as="h3"> Contact Info</Header>

                  <ContactInfo />
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row className="contact_availability">
                  <Header as="h3" >Let's get in touch!</Header>
                  <ContactAvailability />
                </Grid.Row>
                <Grid.Row>
                  <Map />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        
    </Container>
  );
};
