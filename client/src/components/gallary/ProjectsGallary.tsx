import {
  projectsTypes,
  temp_projectsInfo,
  temp_projectsMenuInfo,
} from "data/temp/temp_projects";
import React, { useState } from "react";
import Masonry from "react-masonry-component";
import {
  Button,
  Grid,
  GridColumn,
  Image,
  Menu,
  SemanticWIDTHS,
} from "semantic-ui-react";

import "assets/css/components/ProjectsGallery.scss";
import { GallaryElement } from "./GallaryElement";

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
  resize: true,
};

const menuStyle = {
  whiteSpace: "nowrap",
};

export const ProjectsGallary = () => {
  const projectData = temp_projectsInfo;
  const projectMenuData = temp_projectsMenuInfo;

  const [filter, setFilter] = useState("*");

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div>
      {/* <p>testing...</p>
      <img src={plcimage} /> */}
      {/* Menu Object */}
      <Grid relaxed centered>
        <Grid.Row>
          <Grid.Column width={8} className="gallery_menu">
            <Menu text compact size="huge">
              {projectMenuData.map((item) => (
                <Menu.Item
                  key={item.id}
                  as={Button}
                  name={item.filter}
                  active={item.filter === filter}
                  className="gallery_menu_item"
                  onClick={() => changeFilter(item.filter)}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* Masonry Gallary */}
      <div className="gallery">
        <div className="gallery_elements">
          {projectData.map((project: projectsTypes) => (
            <GallaryElement element={project} filter={filter} />
          ))}
        </div>
      </div>
    </div>
  );
};
