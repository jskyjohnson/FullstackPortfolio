import "assets/css/components/ProjectItems.scss";
import { ProjectItem } from "components/projectitem/ProjectItem";

import React from "react";
import { Container, Grid } from "semantic-ui-react";

export const ProjectItemPage = () => {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <ProjectItem />
        </Grid.Row>
      </Grid>
    </Container>
  );
};
