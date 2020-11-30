import { Socials } from "components/socials/Socials";
import React from "react";
import { Grid } from "semantic-ui-react";

import "assets/css/components/Footer.scss";
import { getUserData } from "utils/dataClient";

export const Footer = () => {

  let userinfo = getUserData();

  return (
    <div>
      <Grid columns={2} className="footer" stackable>
        <Grid.Row>
          <Grid.Column className="copyright">
						{userinfo.footerMessage}
            <p>Like this site? Checkout my <a href="https://github.com/jskyjohnson/public_portfolio">sourcecode!</a></p>
					</Grid.Column>
          <Grid.Column className="footerSocials">
            <Socials size="big" align="center"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
