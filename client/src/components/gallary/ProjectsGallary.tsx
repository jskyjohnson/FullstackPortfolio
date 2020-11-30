import "assets/css/components/ProjectsGallery.scss";
import { projectsTypes } from "data/temp/temp_projects";
import React, { useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { getProjectInfo, getProjectMenuInfo } from "utils/dataClient";
import { GallaryElement } from "./GallaryElement";

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
  resize: true,
};

const menuStyle = {
  whiteSpace: "nowrap",
};

export const ProjectsGallary = ({ limit }: { limit?: number }) => {
  const projectData = getProjectInfo();
  const projectMenuData = getProjectMenuInfo();

  const [filter, setFilter] = useState("*");

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div>
      <Container className="gallery_menu" fluid>
        <Menu text compact size="huge" stackable>
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
      </Container>

      {/* Masonry Gallary */}
      <div className="gallery">
        <div className="gallery_elements">
          {projectData.map((project: projectsTypes, key: number) => (
            <GallaryElement key={key} element={project} filter={filter} />
          ))}
        </div>
      </div>
    </div>
  );
};
