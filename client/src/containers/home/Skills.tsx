import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Item,
  Segment,
} from "semantic-ui-react";
import "assets/css/containers/Skills.scss";

export const Skills = () => {
  return (
    <Container>
      <Header as="h3" className="skills_header">
        Skills and Background<span className="dot">.</span>
        <div className="line" />
      </Header>

      <Grid columns={2} stackable>
        {/* Not quite sure how to do this yet automatically yet... */}
        <Grid.Row>
          <Header as="h4">
            I have a wide academic background in many subjects. And interests in
            a lot more!
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Grid.Row>
              <Header as="h5">Web Development and Fullstack</Header>
              <p>
                I enjoy making websites and web apps for fun! I'm most
                comfortable with ReactJS and a full MERN (Mongo Express React
                and Node) app. However I love to learn new technologies and
                libraries all the time!
              </p>
            </Grid.Row>
            <Grid.Row>
              <Header as="h5">Game Development </Header>
              <p>
                I have been making small apps and games within the Unity Game
                Engine since I was 16. I feel the most at home opening up a new
                Unity project and creating something from scratch.
              </p>
            </Grid.Row>
            <Grid.Row>
              <Header as="h5">Machine Learning</Header>
              <p>
                I have experience using Machine Learning techniques and Data
                science to create interesting and novel projects. As well as
                implementing real world applications and agents into various
                programs.
              </p>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              <Header as="h5">Graphic Design</Header>
              <p>
                I love graphic design, and creating new and expressive content.
                Currently I mostly do graphic design as a hobby. You can check
                out my instagram at i.skyz.design for my daily posters.
              </p>
            </Grid.Row>
            <Grid.Row>
              <Header as="h5">Photography</Header>
              <p>
                I love photography and will spend most of my free time looking
                for exciting new subjects to shoot with my D800. Look at my
                projects tab to see some of my photography work!
              </p>
            </Grid.Row>
            <Grid.Row>
              <Header as="h5">Physical Computing and Robotics</Header>
              <p>
                I think my favorite form of art has been the rise of interactive
                art and arduino based physical computing projects! I love
                combining self expression with computer science and math. Check
                out my projects to see some of my work!
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header as="h5" className="skills_hireme" textAlign="center">
        I'm avaible for hire!
        <p>
          For Web Development, Software Development, and Graphic Design.
        </p>
      </Header>

      {/* <div className="skill_contactbtnspacer">
        <a href="/contact" className="skill_contactbutton">
          Contact Me
        </a>
      </div> */}
    </Container>
  );
};

{
  /* <Grid as={Container}>
        <Grid.Row>
          <Header as="h2">Skills and Background</Header>
          <p>
            I have a lot of interests that vary. Here is just a background on my
            exposure to a few fields.
          </p>
        </Grid.Row>

        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                some stufff
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                some more stuff
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid> */
}
