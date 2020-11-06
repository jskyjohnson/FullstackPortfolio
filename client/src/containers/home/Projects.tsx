import React from "react";
import { Divider, Header } from "semantic-ui-react";

import 'assets/css/containers/Projects.scss'
import { ProjectsGallary } from "components/gallary/ProjectsGallary";

export const Projects = () => {
  return (
    <div>
			{/* <Divider /> */}
      <Header as="h2" className="works_header">
        My Projects<span className="dot">.</span>
				<div className="offline"/>
      </Header>

			<ProjectsGallary />
    </div>
  );
};
