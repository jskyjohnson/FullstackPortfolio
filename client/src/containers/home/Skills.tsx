import React from "react";
import { Container, Grid, Header, Item, Segment } from "semantic-ui-react";

export const Skills = () => {
  return (
    <div>
      <Grid as={Container}>
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
      </Grid>
    </div>
  );
};
