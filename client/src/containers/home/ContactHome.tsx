import { ContactForm } from "components/contact/ContactForm";
import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import "assets/css/containers/Contact.scss";
import { ContactInfo } from "components/contact/ContactInfo";
import { ContactAvailability } from "components/contact/ContactAvailability";
import { Map } from "components/contact/Map";

export const ContactHome = () => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column width={2} only="computer" />
        <Grid.Column width={12}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Grid.Row className="contact_form">
                  <Header as="h3">Contact me</Header>

                  <ContactForm />
                </Grid.Row>
                <Grid.Row className="contact_info">
                  <Header as="h3">Info</Header>

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
        </Grid.Column>
        <Grid.Column width={2} only="computer" />
      </Grid.Row>
    </Grid>
  );
};
