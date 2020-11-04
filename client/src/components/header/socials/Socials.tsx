import React from "react";
import { socialsinfo, } from "data/socialsinfo";
import { Grid, Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

const linkStyle = {
  padding: 5,
};

export const Socials = () => {
  return (
    <>
      <Grid>
        <Grid.Column>
          {socialsinfo.map((social) => (
            <a
              style={linkStyle}
              key={social.id}
              href={`https://${social.media}.com/${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* {social.media} */}
              <Icon name={ social.media }/>
            </a>
          ))}
        </Grid.Column>
      </Grid>
    </>
  );
};
