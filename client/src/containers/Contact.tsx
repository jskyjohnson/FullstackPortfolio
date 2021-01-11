import { ContactForm } from "components/contact/ContactForm";
import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "assets/css/containers/Contact.scss";
import { ContactInfo } from "components/contact/ContactInfo";
import { ContactAvailability } from "components/contact/ContactAvailability";
import { Map } from "components/contact/Map";
import { useQuery, gql } from "@apollo/client";

const CONTACT_DATA = gql`
  query {
    GetUser(id: 1) {
      contact {
        email
        location
        lat
        long
        contactMessage
        services
      }
    }
  }
`;

export const Contact = () => {
  //let userinfo = getUserData();
  const { loading, error, data: userData } = useQuery(CONTACT_DATA);

  return (
    <Container columns={3} className="contact_wrapper">
      {userData ? (
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Grid.Row className="contact_form">
                <Header as="h3">Message me</Header>
                <ContactForm />
              </Grid.Row>
              <Grid.Row className="contact_info">
                <Header as="h3"> Contact Info</Header>
                <ContactInfo
                  email={userData.GetUser.contact.email}
                  services={  JSON.parse(userData.GetUser.contact.services)  }
                  location={userData.GetUser.contact.location}
                />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row className="contact_availability">
                <Header as="h3">Let's get in touch!</Header>
                <ContactAvailability
                  contact={userData.GetUser.contact.contactMessage}
                />
              </Grid.Row>
              <Grid.Row>
                <Map
                  lat={userData.GetUser.contact.lat}
                  long={userData.GetUser.contact.long}
                />
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : null}
    </Container>
  );
};
