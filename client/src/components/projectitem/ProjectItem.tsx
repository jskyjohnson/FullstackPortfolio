import { ProjectItemDetails } from "components/projectitem/ProjectItemDetails";
import { ProjectItemImages } from "components/projectitem/ProjectItemImages";
import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Image } from "semantic-ui-react";

import "assets/css/components/ProjectItems.scss";
import { getProjectInfo } from "utils/dataClient";

export const ProjectItem = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  let project: projectsTypes;
  let images: string[];
  let details;

  if (id != null) {
		//TODO make get project info to filter for specific ID and return that too.
    project = getProjectInfo().filter((project) => project.id === +id)[0];

    images = project.images;
  } else {
    return <div>Error project with id {id} not found...</div>;
  }

  return (
    // <div>
    // 	<img src="https://i.imgur.com/PHM1Li1.jpg" />
    // </div>
    <>
      <Grid.Column width="10">
        <ProjectItemImages images={images} />

        {/* <img src={"/placeholder/" + images[0]} /> */}
      </Grid.Column>

      <Grid.Column width="6">
        <ProjectItemDetails project={project} />
      </Grid.Column>
    </>
  );
};
