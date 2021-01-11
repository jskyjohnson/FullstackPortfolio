// import Form from "@rjsf/core";
import { gql, useMutation, useQuery } from "@apollo/client";
import Form from "@rjsf/bootstrap-4";
import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";

const GET_LOGIN_TOKEN = gql`
  mutation($password: String!, $name: String!) {
    Login(password: $password, name: $name) {
      accessToken
    }
  }
`;

const AUTH_ME = gql`
  query {
    Me
  }
`;

const loginSchema: any = {
  title: "login",
  type: "object",
  properties: {
    username: {
      type: "string",
      title: "Username",
    },
    password: {
      type: "string",
      title: "password",
    },
  },
};

const loginUiSchema: any = {
  password: {
    "ui:widget": "password",
  },
};

export const Login = () => {
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const [login] = useMutation(GET_LOGIN_TOKEN, {});

  const getAuthToken = ({ formData }: any) => {
    // console.log("LOGGING IN WITH" +formData.username);

    login({
      variables: { password: formData.password, name: formData.username },
    })
      .then((res) => localStorage.setItem("token", res.data.Login.accessToken))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <p style={{ overflowWrap: "anywhere" }}>
              TOKEN : {localStorage.getItem("token")}{" "}
            </p>

            <div>
              {" "}
              {loading ? (
                <p> loading... </p>
              ) : error ? (
                <p> err </p>
              ) : (
                <h2> {data.Me} </h2>
              )}{" "}
              <Button onClick={() => refetch()}> Me Query </Button>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Form
              schema={loginSchema}
              uiSchema={loginUiSchema}
              onSubmit={getAuthToken}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};
