import { Socials } from "components/socials/Socials";
import React from "react";
import { Grid } from "semantic-ui-react";

import "assets/css/components/Footer.scss";

export const Footer = ({footerMessage}: {footerMessage: string}) => {

  return (
    <div>
      <Grid columns={2} className="footer" stackable>
        <Grid.Row>
          <Grid.Column className="copyright">
						{footerMessage}
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
