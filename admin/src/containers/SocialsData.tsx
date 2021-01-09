import React from "react";
import { useQuery, gql, useMutation, NetworkStatus } from "@apollo/client";
import Form from "@rjsf/bootstrap-4";
import { Button, Container, Grid, Header, GridColumn } from "semantic-ui-react";

const AUTH_ME = gql`
  query {
    getID
  }
`;

const SOCIALS_DATA = gql`
  query($id: Float!) {
    GetSocials(id: $id) {
      id
      json
    }
  }
`;

const UPDATE_SOCIALS_DATA = gql`
  mutation($content: SocialsInfoInput!) {
    UpdateSocials(content: $content) {
      success
      message
      socials {
        id
        json
      }
    }
  }
`;

//homeDataSchema
const socialsDataSchema: any = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      media: { type: "string" },
      username: { type: "string" },
    },
  },
};

export const SocialsData = () => {
  //Auth?
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const editData: any = (data: any) => {
    const editedData = {
      socials: JSON.parse(data.GetSocials.json).socials,
    };
    return editedData;
  };

  //Get
  const {
    loading: socialsLoading,
    error: socialsError,
    data: socialsData,
    refetch: socialsRefetch,
    networkStatus: socialsNetworkStatus,
  } = useQuery(SOCIALS_DATA, {
    skip: !data,
    variables: { id: +data?.getID },
    //onCompleted: editData,
  });

  //Mutation
  const [updateSocialsInfo] = useMutation(UPDATE_SOCIALS_DATA);

  //onShow
  const [showResults, setShowResults] = React.useState(false);
  const onShow = () => setShowResults(!showResults);

  //onSubmit
  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    console.log({
      content: {
        socials: formData,
      },
    });
    updateSocialsInfo({
      variables: {
        content: {
          socials: formData,
        },
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container>
        <Header> Socials Data </Header>

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
            <p> socials data status : </p>
            {socialsNetworkStatus === NetworkStatus.refetch ? (
              <p>Fetching!</p>
            ) : socialsLoading ? (
              <p> loading Socials Data... </p>
            ) : socialsError ? (
              <p> Err On Socials Data, waiting for login </p>
            ) : (
              <h2> SOCIALS DATA RETRIEVED</h2>
            )}
            <Button onClick={() => socialsRefetch()}> Get Socials Data </Button>
          </Grid.Column>
        </Grid>

        <Button icon="eye" onClick={() => onShow()} />
        {showResults ? (
          <div>
            {socialsData ? (
              <Form
                schema={socialsDataSchema}
                // uiSchema={userDataUiSchema}
                formData={editData(socialsData).socials}
                onSubmit={onSubmit}
              />
            ) : (
              <p>Waiting for Socials Data...</p>
            )}
          </div>
        ) : (
          <p> Form Data Hidden </p>
        )}
      </Container>
    </div>
  );
};
