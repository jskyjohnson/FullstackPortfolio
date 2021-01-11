import "assets/css/components/ProjectsGallery.scss";
import { projectsTypes } from "data/temp/temp_projects";
import React, { useState } from "react";
import { Button, Container, Loader, Menu } from "semantic-ui-react";
import { GallaryElement } from "./GallaryElement";

import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
  resize: true,
};

const menuStyle = {
  whiteSpace: "nowrap",
};

const PROJECT_DATA = gql`
  query {
    GetProjects {
      id
      title
      subtitle
      category
      filter
      thumbnail
      date
      meta
      description
      images
    }
  }
`;

const PROJECT_MENU_DATA = gql`
  query {
    GetProjectMenu(id: 1) {
      json
    }
  }
`;

export const ProjectsGallary = ({ limit }: { limit?: number }) => {
  const [filter, setFilter] = useState("*");

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  const editData: any = (data: any) => {
    // console.log(JSON.parse(data.meta));
    const editedData = {
      id: +data.id,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      filter: data.filter,
      thumbnail: data.thumbnail,
      date: data.date,
      meta: JSON.parse(data.meta),
      description: data.description,
      images: data.images,
    };
    // console.log(editedData);
    return editedData;
  };

  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(PROJECT_DATA);

  const {
    loading: menuLoading,
    error: menuError,
    data: projectMenuData,
  } = useQuery(PROJECT_MENU_DATA);

  return (
    <div>
      <Container className="gallery_menu" fluid>
        {projectMenuData ? (
          <Menu text compact size="huge" stackable>
            {/* {console.log(JSON.parse(projectMenuData.GetProjectMenu.json))} */}
            {JSON.parse(projectMenuData.GetProjectMenu.json).projectmenu.map(
              (item: any) => (
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
              )
            )}
          </Menu>
        ) : null}
      </Container>

      {/* Masonry Gallary */}
      {projectsData ? (
        <div className="gallery">
          <div className="gallery_elements">
            {projectsData.GetProjects.map((project: any, key: number) => (
              <GallaryElement
                key={key}
                element={editData(project)}
                filter={filter}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader size="small">Loading</Loader>
        // <div className="gallery">

        //   <div className="gallery_elements">
        //     {/* {projectData.map((project: projectsTypes, key: number) => (
        //       <GallaryElement key={key} element={project} filter={filter} />
        //     ))} */}

        //   </div>
        // </div>
      )}
    </div>
  );
};
