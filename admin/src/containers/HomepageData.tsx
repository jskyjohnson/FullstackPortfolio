import React from "react";
import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";
import Form from "@rjsf/bootstrap-4";
import { Button, Container, Grid, Header, GridColumn } from "semantic-ui-react";

const AUTH_ME = gql`
  query {
    getID
  }
`;

const HOME_DATA = gql`
  query($id: Float!) {
    GetHomepage(id: $id) {
      id
      hero_intro
      hero_portrait
      intro_text
      carousel_text
      carousel_text_values
    }
  }
`;

const UPDATE_HOME_DATA = gql`
  mutation($content: HomepageInput!) {
    UpdateHomepage(content: $content) {
      success
      message
    }
  }
`;

//homeDataSchema
const homeDataSchema: any = {
  title: "Homepage Data",
  type: "object",
  properties: {
    hero_intro: {
      type: "string",
    },
    hero_portrait: {
      type: "string",
    },
    intro_text: {
      type: "string",
    },
    carousel_text: {
      type: "string",
    },
    carousel_text_values: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export const HomepageData = () => {
  //Auth?
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const editData: any = (data: any) => {
    const editedData = {
      hero_intro: data.GetHomepage.hero_intro,
      intro_text: data.GetHomepage.intro_text,
      carousel_text: data.GetHomepage.carousel_text,
      carousel_text_values: data.GetHomepage.carousel_text_values,
      hero_portrait: data.GetHomepage.hero_portrait,
    };

    return editedData;
  };

  //Get
  const {
    loading: homeLoading,
    error: homeError,
    data: homeData,
    refetch: homeRefetch,
    networkStatus: homeNetworkStatus,
  } = useQuery(HOME_DATA, {
    skip: !data,
    variables: { id: +data?.getID },
    //onCompleted: editData,
  });

  //Mutation
  const [updateHomeInfo] = useMutation(UPDATE_HOME_DATA);

  //onShow
  const [showResults, setShowResults] = React.useState(false);
  const onShow = () => setShowResults(!showResults);

  //onSubmit
  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    updateHomeInfo({ variables: { content: formData } })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container>
        <Header> Home Data </Header>

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
            <p> home data status : </p>
            {homeNetworkStatus === NetworkStatus.refetch ? (
              <p>Fetching!</p>
            ) : homeLoading ? (
              <p> loading Home Data... </p>
            ) : homeError ? (
              <p> Err On Home Data, waiting for login </p>
            ) : (
              <h2> HOME DATA RETRIEVED </h2>
            )}
            <Button onClick={() => homeRefetch()}> Get Home Data </Button>
          </Grid.Column>
        </Grid>

        <Button icon="eye" onClick={() => onShow()} />
        {showResults ? (
          <div>
            {homeData ? (
              <Form
                schema={homeDataSchema}
                // uiSchema={userDataUiSchema}
                formData={editData(homeData)}
                onSubmit={onSubmit}
              />
            ) : (
              <p>Waiting for Home Data...</p>
            )}
          </div>
        ) : (
          <p> Form Data Hidden </p>
        )}
      </Container>
    </div>
  );
};
