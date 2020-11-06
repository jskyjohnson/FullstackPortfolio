import React from "react";
import { Divider, Header } from "semantic-ui-react";

import 'assets/css/containers/Projects.scss'

export const Projects = () => {
  return (
    <div>
			{/* <Divider /> */}
      <Header as="h2" className="works_header">
        My Projects<span className="dot">.</span>
				<div className="offline"/>
      </Header>
      Yaayyy a whole bunch of stuff
    </div>
  );
};
