import React from "react";
import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";
import Form from "@rjsf/bootstrap-4";
import { Button, Container, Grid, Header, GridColumn } from "semantic-ui-react";

const AUTH_ME = gql`
  query {
    getID
  }
`;

const PROJECTMENU_DATA = gql`
  query($id: Float!) {
    GetProjectMenu(id: $id) {
      id
      json
    }
  }
`;

const UPDATE_PROJECTMENU_DATA = gql`
  mutation($content: ProjectMenuInfoInput!) {
    UpdateProjectMenu(content: $content) {
      success
      message
      projectmenu {
        id
        json
      }
    }
  }
`;

//homeDataSchema
const projectMenuDataSchema: any = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      title: { type: "string" },
      filter: { type: "string" },
    },
  },
};

export const ProjectMenuData = () => {
  //Auth?
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const editData: any = (data: any) => {
    const editedData = {
      projectmenu: JSON.parse(data.GetProjectMenu.json).projectmenu,
    };
    return editedData;
  };

  //Get
  const {
    loading: projectsMenuLoading,
    error: projectsMenuError,
    data: projectsMenuData,
    refetch: projectsMenuRefetch,
    networkStatus: projectsMenuNetworkStatus,
  } = useQuery(PROJECTMENU_DATA, {
    skip: !data,
    variables: { id: +data?.getID },
    //onCompleted: editData,
  });

  //Mutation
  const [updateProjectsMenuInfo] = useMutation(UPDATE_PROJECTMENU_DATA);

  //onShow
  const [showResults, setShowResults] = React.useState(false);
  const onShow = () => setShowResults(!showResults);

  //onSubmit
  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    console.log({
      content: {
        projectmenu: formData,
      },
    });
    updateProjectsMenuInfo({
      variables: {
        content: {
          projectmenu: formData,
        },
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container>
        <Header> Project Menu </Header>

        <Grid fluid columns={2}>
          <Grid.Column>
            {loading ? (
              <p> loading... </p>
            ) : error ? (
              <p> err </p>
            ) : (
              <h2> Data polling on userID: {data.getID} </h2>
            )}{" "}
            <Button onClick={() => refetch()}> Get Auth </Button>
          </Grid.Column>
          <Grid.Column>
            <p> project menu data status : </p>
            {projectsMenuNetworkStatus === NetworkStatus.refetch ? (
              <p>Fetching!</p>
            ) : projectsMenuLoading ? (
              <p> loading Project Menu Data... </p>
            ) : projectsMenuError ? (
              <p> Err On Project Menu Data, waiting for login </p>
            ) : (
              <h2> PROJECT MENU DATA RETRIEVED</h2>
            )}
            <Button onClick={() => projectsMenuRefetch()}>
              {" "}
              Get Project Menu Data{" "}
            </Button>
          </Grid.Column>
        </Grid>

        <Button icon="eye" onClick={() => onShow()} />
        {showResults ? (
          <div>
            {projectsMenuData ? (
              <Form
                schema={projectMenuDataSchema}
                // uiSchema={userDataUiSchema}
                formData={editData(projectsMenuData).projectmenu}
                onSubmit={onSubmit}
              />
            ) : (
              <p>Waiting for Project Menu Data...</p>
            )}
          </div>
        ) : (
          <p> Form Data Hidden </p>
        )}
      </Container>
    </div>
  );
};
