import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  GridColumn,
  Header,
  Icon,
  Menu,
} from "semantic-ui-react";
import { HeaderMenu } from "components/header/headermenu/HeaderMenu";
import { Logo } from "components/header/logo/Logo";
import { Socials } from "components/header/socials/Socials";
//import { Logo } from "components/header/logo/Logo";
import "assets/css/components/PageHeader.scss";

export const PageHeader = () => {
  const handleToggle = () => {
    console.log("Hello test");
  };

  return (
    <>
      <Container>
        <Grid
          className="page_header_main"
          centered
          verticalAlign="middle"
        >
          <Grid.Row>
            <GridColumn computer={4} tablet={7} mobile={8} textAlign="left">
              <Logo />
            </GridColumn>

            <GridColumn width={8} textAlign="center" only="computer">
              <HeaderMenu />
            </GridColumn>

            <GridColumn
              floated="right"
              width={3}
              textAlign="right"
              only="computer"
            >
              <Socials />
            </GridColumn>

            <GridColumn floated="right" only="tablet mobile" mobile={8}>
              <Socials size="large">
                <Button
                  icon="bars"
                  className="mobile_menu"
                  size="big"
                  as="a"
                  onClick={handleToggle}
                >
                  {/* <Icon size="big" name="bars" className="mobile_menu" /> */}
                </Button>
              </Socials>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
