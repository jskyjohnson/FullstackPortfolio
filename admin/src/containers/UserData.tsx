import { gql, NetworkStatus, useMutation, useQuery } from "@apollo/client";
import Form from "@rjsf/bootstrap-4";
import React from "react";
import { Button, Container, Grid, Header } from "semantic-ui-react";

// const userDataUiSchema: any = {
//   content: {
//     items: {
//       items: [{}, { "ui:widget": "textarea" }],
//       "ui:options": { removable: false, addable: false },
//     },
//   },
// };

//Authentication
const AUTH_ME = gql`
  query {
    getID
  }
`;

//UserDataQuery
const USER_DATA = gql`
  query($id: Float!) {
    GetUser(id: $id) {
      id
      title_name
      first_name
      last_name
      footerMessage
      about {
        about_pic
        about_header_message
        experience
        # {
        #   id
        #   organization
        #   date
        #   location
        # }
        softwares
        # {
        #   id
        #   category
        #   list
        # }
        info
        bios
      }
      contact {
        email
        location
        lat
        long
        contactMessage
        services
        # {
        #   app
        #   account
        #   profileUrl
        # }
      }
    }
  }
`;

//UserDataUpdateMutation
const UPDATE_USER_DATA = gql`
  mutation($content: UserInfoInput!) {
    UpdateUserData(content: $content) {
      message
      success
      user {
        title_name
        first_name
        last_name
        footerMessage
        about {
          about_pic
          about_header_message
          info
          bios
          experience
          softwares
        }
        contact {
          email
          location
          lat
          long
          contactMessage
          services
        }
      }
    }
  }
`;

//ReactForm Json
const userDataSchema: any = {
  type: "object",
  properties: {
    title_name: { type: "string" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    contact: {
      type: "object",
      properties: {
        email: { type: "string" },
        location: { type: "string" },
        lat: { type: "string" },
        long: { type: "string" },
        contactMessage: { type: "array", items: { type: "string" } },
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              app: { type: "string" },
              account: { type: "string" },
              profileUrl: { type: "string" },
            },
          },
        },
      },
    },
    about: {
      type: "object",
      properties: {
        about_pic: { type: "string" },
        about_header_message: { type: "string" },
        bios: {
          type: "array",

          title: "Bio Sections",
          description: "The first box is a header",
          items: {
            type: "array",
            minLength: 2,
            maxLength: 2,
            items: { type: "string" },
          },
        },
        info: {
          type: "array",
          minLength: 2,
          maxLength: 2,
          title: "items",
          items: {
            type: "array",
            minLength: 2,
            maxLength: 2,
            items: [
              {
                title: "Highlight",
                type: ["string", "null"],
              },
              { title: "", type: "string" },
            ],
          },
        },
        softwares: {
          type: "array",
          items: {
            type: "object",
            properties: {
              // id: { type: "string" },
              category: { type: "string" },
              list: { type: "array", items: { type: "string" } },
            },
          },
        },
        experience: {
          type: "array",
          items: {
            type: "object",
            properties: {
              // id: { type: "string" },
              job: { type: "string" },
              organization: { type: "string" },
              date: { type: "string" },
              location: { type: "string" },
            },
          },
        },
      },
    },
    footerMessage: { type: "string" },
  },
};

export const UserData = () => {
  //Queries
  const { loading, error, data, refetch } = useQuery(AUTH_ME);

  const {
    loading: userLoading,
    error: userError,
    data: userData,
    refetch: userRefetch,
    networkStatus: userNetworkStatus,
  } = useQuery(USER_DATA, {
    skip: !data,
    variables: { id: +data?.getID },
    // onCompleted: editData,
  });

  const editData: any = (data: any) => {
    const editedUserData = {
      first_name: data.GetUser.first_name,
      title_name: data.GetUser.title_name,
      last_name: data.GetUser.last_name,
      footerMessage: data.GetUser.footerMessage,
      about: {
        about_pic: data.GetUser.about.about_pic,
        about_header_message: data.GetUser.about.about_header_message,
        experience: JSON.parse(data.GetUser.about.experience),
        softwares: JSON.parse(data.GetUser.about.softwares),
        info: data.GetUser.about.info,
        bios: data.GetUser.about.bios,
      },
      contact: {
        email: data.GetUser.contact.email,
        location: data.GetUser.contact.location,
        lat: data.GetUser.contact.lat,
        long: data.GetUser.contact.long,
        contactMessage: data.GetUser.contact.contactMessage,
        services: JSON.parse(data.GetUser.contact.services),
      },
    };
    //console.log(editedUserData);
    return editedUserData;
  };

  //Mutations
  const [updateUserInfo] = useMutation(UPDATE_USER_DATA);

  //State
  const [showResults, setShowResults] = React.useState(false);
  const onShow = () => setShowResults(!showResults);

  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    updateUserInfo({ variables: { content: formData } })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container>
        <Header> User Data </Header>
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
            <p> user data status : </p>
            {userNetworkStatus === NetworkStatus.refetch ? (
              <p>Fetching!</p>
            ) : userLoading ? (
              <p> loading User Data... </p>
            ) : userError ? (
              <p> Err On User Data, waiting for login </p>
            ) : (
              <h2> USER DATA RETRIEVED </h2>
            )}
            <Button onClick={() => userRefetch()}> Get User Data </Button>
          </Grid.Column>
        </Grid>

        <Button icon="eye" onClick={() => onShow()} />
        {showResults ? (
          <div>
            {userData ? (
              <Form
                schema={userDataSchema}
                // uiSchema={userDataUiSchema}
                formData={editData(userData)}
                onSubmit={onSubmit}
              />
            ) : (
              <p>Waiting for User Data...</p>
            )}
          </div>
        ) : (
          <p> Form Data Hidden </p>
        )}
      </Container>
    </div>
  );
};
