import React from "react";
import { socialsinfo } from "data/socialsinfo";
import { Grid, Icon } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";

const rowStyle = {
  justifyContent: "right",
  textAlign:"center",
  alignItems:"center",
};

const linkStyle = {
  padding: 5,
};

export interface SocialsProps {
  children?: React.ReactElement;
  size?: IconSizeProp
}

//There's probably a better way to do default propping
const defaultProps = {
  size: undefined
}

export const Socials = (props:SocialsProps) => {
  const d_props = Object.assign(defaultProps, props)
  return (
    <Grid>
      <Grid.Row textAlign="right" style={rowStyle}>
        {socialsinfo.map((social) => (
          <a
            style={linkStyle}
            key={social.id}
            href={`https://${social.media}.com/${social.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {social.media} */}
            <Icon name={social.media}  size={d_props.size} />
          </a>
        ))}
        {props.children}
      </Grid.Row>
    </Grid>
  );
};
