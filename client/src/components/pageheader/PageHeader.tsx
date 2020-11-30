//import { Logo } from "components/header/logo/Logo";
import "assets/css/components/PageHeader.scss";
import { HeaderMenu } from "components/navs/headermenu/HeaderMenu";
import { Logo } from "components/navs/logo/Logo";
import { SideMenu } from "components/navs/sidemenu/SideMenu";
import { Socials } from "components/socials/Socials";
import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  GridColumn,
  GridRow,
  Sidebar,
  SidebarPushable,
  SidebarPusher,
} from "semantic-ui-react";

type PageProp = {
  children?: React.ReactNode;
};

export const PageHeader = ({ children }: PageProp) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <SidebarPushable>
        <Sidebar
          as={Grid}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          visible={visible}
          width="wide"
          direction="right"
          className="sidebar_back"
        >
          <GridRow>
            <GridColumn className="sidebar_column">
              <GridRow>
                <Logo />
              </GridRow>
              <GridRow>
                <SideMenu />
              </GridRow>
              <GridRow>
                <div> jsky.johnson@gmail.com </div>
                <div>
                  <Socials align="left" />
                </div>
                <div> ©2020 SKY JOHNSON. ALL RIGHT RESERVED</div>
              </GridRow>
            </GridColumn>
          </GridRow>
        </Sidebar>

        <SidebarPusher dimmed={visible}>
          <Container>
            <Grid className="page_header_main" verticalAlign="middle">
              <Grid.Row>
                <GridColumn
                  computer={4}
                  tablet={7}
                  mobile={8}
                  textAlign="left"
                  floated="left"
                >
                  <Logo />
                </GridColumn>

                <GridColumn width={8} textAlign="center" only="computer">
                  <HeaderMenu />
                </GridColumn>

                <GridColumn
                  floated="right"
                  width={4}
                  textAlign="right"
                  only="computer"
                >
                  <Socials align="right" />
                </GridColumn>

                <GridColumn floated="right" only="tablet mobile" mobile={8}>
                  <Socials size="large">
                    <Button
                      icon="bars"
                      className="mobile_menu"
                      size="big"
                      as="a"
                      onClick={handleToggle}
                    />
                  </Socials>
                </GridColumn>
              </Grid.Row>
            </Grid>
          </Container>
          {children}
        </SidebarPusher>
      </SidebarPushable>
    </>
  );
};
