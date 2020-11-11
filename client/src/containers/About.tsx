import { userinfo } from "data/userinfo";
import React from "react";
import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";

import "assets/css/pages/AboutPage.scss";

export const About = () => {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Header as="h2" className="about_subtitle">
            {userinfo.about.about_header_message}
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image src={userinfo.about.about_pic} fluid />
                {/* <Image src="./placeholder/527x500.jpg" /> */}
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" className="about_name">
                  I'm {userinfo.title_name}
                </Header>

                {/* Bios section... */}
                {userinfo.about.bios.map((e: string[], key) => (
                  <div key={key}>
                    <Header as="h3" className="about_description_header">
                      {e[0]}
                    </Header>
                    {e.slice(1, e.length).map((v, key) => (
                      <p key={key} className="about_description_p">
                        {v}
                      </p>
                    ))}
                  </div>
                ))}
                <Divider />
                {/* info section... */}
                {userinfo.about.info.map((e: string[], key) => (
                  <div key={key}>
                    <p className="about_info_p">
                      <span className="about_span">{e[0]}: </span>
                      {e
                        .slice(1, e.length)
                        .map(
                          (v, key) => v + (key === e.length - 2 ? "" : ", ")
                        )}
                    </p>
                  </div>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width="5">
                <Header as="h3" className="about_subsection_title">
                  Experience
                </Header>

                {userinfo.about.experience.map((e, key) => (
                  <div key={key}>
                    <Divider />
                    <p>
                      <span className="about_span">Job: </span>
                      {e.job}
                    </p>
                    <p>
                      <span className="about_span">Organization: </span>
                      {e.organization}
                    </p>
                    <p>
                      <span className="about_span">Date: </span>
                      {e.date}
                    </p>
                    <p>
                      <span className="about_span">Location: </span>
                      {e.location}
                    </p>
                  </div>
                ))}
              </Grid.Column>
              <Grid.Column width="11">
                <Header as="h3" className="about_subsection_title">
                  Familiar Software, Libraries, and Tools
                </Header>
                {userinfo.about.softwares.map((e: any) => (
                  <div>
                    <Header as="h3" className="about_softwares_headers">
                      {e.category}:{" "}
                    </Header>
                    <p>
                      {e.list.map(
                        (v: any, i: number) =>
                          v + (i === e.list.length - 1 ? "" : ", ")
                      )}
                    </p>
                  </div>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
