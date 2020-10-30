import React from "react";
import {
  Container,
  Dropdown,
  Grid,
  GridColumn,
  Header,
  Menu,
} from "semantic-ui-react";
import { HeaderMenu } from "components/header/headermenu/HeaderMenu";
import { Logo } from "components/header/logo/Logo";
import { Socials } from "components/header/socials/Socials";
//import { Logo } from "components/header/logo/Logo";

export const PageHeader = () => {
  return (
    <Container>
      <Grid centered divided verticalAlign="middle" fluid stretched>
        <Grid.Row>
          <GridColumn width={3} textAlign="left">
            <Logo />
          </GridColumn>

          <GridColumn width={6}>
            <HeaderMenu />
          </GridColumn>

          <GridColumn width={3} textAlign="right">
            <Socials/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
