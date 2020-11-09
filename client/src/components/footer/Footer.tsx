import { Socials } from "components/navs/socials/Socials";
import React from "react";
import { Grid } from "semantic-ui-react";

import "assets/css/components/Footer.scss";
import { userinfo } from "data/userinfo";

export const Footer = () => {
  return (
    <div>
      <Grid columns={2} className="footer" stackable>
        <Grid.Row>
          <Grid.Column className="copyright">
						{userinfo.footerMessage}
					</Grid.Column>
          <Grid.Column className="footerSocials">
            <Socials size="big" align="center"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
