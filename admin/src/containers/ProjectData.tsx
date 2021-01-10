import React from "react";
import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";
import Form from "@rjsf/material-ui"; //Have to use material UI because additional properties isn't supported?
import {
  Button,
  Container,
  Grid,
  Header,
  GridColumn,
  Divider,
} from "semantic-ui-react";

//Get Auth

const AUTH_ME = gql`
  query {
    getID
  }
`;

//Get Queries

//Get All
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

//Create Project
const CREATE_PROJECT = gql`
  mutation($content: ProjectInput!) {
    CreateProject(content: $content) {
      success
      message
      project {
        title
      }
    }
  }
`;

//Update Project
const UPDATE_PROJECT = gql`
  mutation($id: Int!, $content: ProjectInput!) {
    UpdateProject(id: $id, content: $content) {
      success
      message
      project {
        title
      }
    }
  }
`;

//Delete Project

const DELETE_PROJECT = gql`
  mutation($id: Int!) {
    DeleteProject(id: $id)
  }
`;

//Project Form Schema

const projectUiSchema: any = {
  description: {
    items: {
      items: [{}, { "ui:widget": "textarea" }],
      "ui:options": { removable: false, addable: false },
    },
  },
};

const projectSchema: any = {
  type: "object",
  properties: {
    title: { type: "string" },
    subtitle: { type: "string" },
    category: { type: "string" },
    filter: { type: "string" },
    thumbnail: { type: "string" },
    date: { type: "string" },
    meta: {
      type: "object",
      additionalProperties: { type: "string" },
    },
    description: {
      type: "array",
      minLength: 2,
      maxLength: 2,
      items: {
        type: "array",
        items: [
          {
            title: "Paragraph Header",
            description:
              "Either fill out a title or leave it blank to continue the paragraph",
            type: ["string", "null"],
          },
          { title: "paragraph", type: "string" },
        ],
      },
    },
    images: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export const ProjectData = () => {
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const editData: any = (data: any) => {
    console.log(JSON.parse(data.meta));
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
    console.log(editedData);
    return editedData;
  };

  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
    refetch: projectsRefetch,
    networkStatus: projectsNetworkStatus,
  } = useQuery(PROJECT_DATA, {
    skip: !data,
    //variables: { id: +data?.getID },
    //onCompleted: editData,
  });

  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [createProject] = useMutation(CREATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  //onCreate
  const onCreate: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    const id_v: number = +formData.id;
    createProject({
      variables: {
        content: formData,
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };
  //onSubmit (for Updates)

  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    const id_v: number = +formData.id;
    updateProject({
      variables: {
        id: id_v,
        content: formData,
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  //onDelete
  const onDelete: any = (id_v: number) => {
    const id_: number = +id_v;
    // console.log(typeof (id_ as number)  );
    deleteProject({ variables: { id: id_ } })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  const [showProjectContainer, setShowProjectContainer] = React.useState(false);
  const onShowProjectContainer = () =>
    setShowProjectContainer(!showProjectContainer);

  const [showProjects, setShowProjects] = React.useState([-2]);

  const onShow = (id: any) => {
    if (showProjects.includes(id)) {
      setShowProjects((showProjects) =>
        showProjects.filter((item) => item !== id)
      );
    } else {
      setShowProjects((showProjects) => [...showProjects, id]);
    }
  };

  return (
    <div>
      <Container>
        <Header> Projects Data </Header>

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
            <p> projects data status : </p>
            {projectsNetworkStatus === NetworkStatus.refetch ? (
              <p>Fetching!</p>
            ) : projectsLoading ? (
              <p> loading Projects Data... </p>
            ) : projectsError ? (
              <p> Err On Projects Data, waiting for login </p>
            ) : (
              <h2> PROJECTS DATA RETRIEVED</h2>
            )}
            <Button onClick={() => projectsRefetch()}>Get Projects Data</Button>
          </Grid.Column>
        </Grid>

        <Button icon="eye" onClick={() => onShowProjectContainer()} />
        {showProjectContainer ? (
          <div>
            {projectsData ? (
              <div>
                {[]
                  .concat(projectsData.GetProjects)
                  .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
                  .map((value: any, key: number) => (
                    <div key={key}>
                      <Divider />
                      <h1> PROJECT ID : {value.id}</h1>
                      <Button icon="eye" onClick={() => onShow(value.id)} />
                      {showProjects.includes(value.id) ? (
                        <Form
                          schema={projectSchema}
                          uiSchema={projectUiSchema}
                          formData={editData(value)}
                          onSubmit={onSubmit}
                        />
                      ) : null}

                      <Button onClick={() => onDelete(value.id as number)}>
                        Delete
                      </Button>
                    </div>
                  ))}
              </div>
            ) : (
              <p>Waiting for Project Data...</p>
            )}

            <Divider />
            <h1> CREATE NEW PROJECT!</h1>
            <Button icon="eye" onClick={() => onShow(-1)} />
            {showProjects.includes(-1) ? (
              <Form
                schema={projectSchema}
                uiSchema={projectUiSchema}
                onSubmit={onCreate}
              />
            ) : null}
          </div>
        ) : (
          <p> Form Data Hidden </p>
        )}
      </Container>
    </div>
  );
};
