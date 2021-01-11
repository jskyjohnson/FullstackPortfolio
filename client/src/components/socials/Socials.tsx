import React from "react";
import { Grid, GridRowProps, Icon } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import { useQuery, gql } from "@apollo/client";

export interface SocialsProps {
  children?: React.ReactElement;
  align?: "right" | "center" | "left" | "justified" | undefined;
  size?: IconSizeProp;
  texted?: boolean;
}

//There's probably a better way to do default propping
const defaultProps = {
  size: undefined,
  align: "right",
};

const SOCIAL_DATA = gql`
  query {
    GetSocials(id: 1) {
      json
    }
  }
`;

export const Socials = (props: SocialsProps) => {
  const d_props = Object.assign(defaultProps, props);

  const { loading, error, data: socialsData } = useQuery(SOCIAL_DATA);

  //let socialsinfo = getSocialMediaInfo()

  const rowStyle = {
    justifyContent: d_props.align,
    textAlign: "center",
    alignItems: "center",
  };

  const linkStyle = {
    margin: "0vh 0vh 0 1vh",
  };

  return (
    <Grid>
      {socialsData ? (
        <Grid.Row textAlign={d_props.align} style={rowStyle}>
          {console.log(JSON.parse(socialsData.GetSocials.json))}
          {JSON.parse(socialsData.GetSocials.json).socials.map((social: any) => (
            <a
              style={linkStyle}
              key={social.id}
              href={`https://${social.media}.com/${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* {social.media} */}
              {d_props.texted ? (
                <p>
                  {social.media}:{social.username}
                </p>
              ) : (
                <Icon name={social.media} size={d_props.size} color="yellow" />
              )}
            </a>
          ))}
          {props.children}
        </Grid.Row>
      ) : null}
    </Grid>
  );
};
