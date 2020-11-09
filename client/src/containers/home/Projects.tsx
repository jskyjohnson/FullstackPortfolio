import React from "react";
import { Divider, Grid, Header, Icon } from "semantic-ui-react";

import "assets/css/containers/Projects.scss";
import { ProjectsGallary } from "components/gallary/ProjectsGallary";

export const Projects = () => {
  return (
    <div>
      {/* <Divider /> */}
      <Header as="h2" className="works_header">
        My Projects<span className="dot">.</span>
        <div className="line" />
      </Header>

      <ProjectsGallary />

      <div className="seemore_header">
        <a  href={"/projects"}>
          <h3>
            See More <Icon name="chevron right" />{" "}
          </h3>
          <div className="line" />
        </a>
      </div>
    </div>
  );
};
