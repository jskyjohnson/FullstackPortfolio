import { ProjectItemDetails } from "components/projectitem/ProjectItemDetails";
import { ProjectItemImages } from "components/projectitem/ProjectItemImages";
import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Image, Loader } from "semantic-ui-react";

import "assets/css/components/ProjectItems.scss";
import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";

const PROJECT_DATA = gql`
  query($id: Float!) {
    GetProject(id: $id) {
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

export const ProjectItem = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  let project: projectsTypes;
  let images: string[];

  if (id != null) {
    //TODO make get project info to filter for specific ID and return that too.
    //project = getProjectInfo().filter((project) => project.id === +id)[0];
    //images = project.images;
  } else {
    return <div>Error project with id {id} not found...</div>;
  }

  const {
    loading: projectLoading,
    error: projectError,
    data: projectData,
    refetch: projectRefetch,
    networkStatus: projectNetworkStatus,
  } = useQuery(PROJECT_DATA, {
    //skip: !data,
    variables: { id: +id },
    //onCompleted: editData,
  });

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

  return (
    <>
      {projectData ? (
        <>
          <Grid.Column width="10">
            <ProjectItemImages
              images={editData(projectData.GetProject).images}
            />
          </Grid.Column>
          <Grid.Column width="6">
            <ProjectItemDetails project={editData(projectData.GetProject)} />
          </Grid.Column>{" "}
        </>
      ) : (
        <>
          <Loader size="big">Loading</Loader>
          {/* <Grid.Column width="10">
            <ProjectItemImages images={images} />
          </Grid.Column>
          <Grid.Column width="6">
            <ProjectItemDetails project={project} />
          </Grid.Column>{" "} */}
        </>
      )}
    </>
  );
};
