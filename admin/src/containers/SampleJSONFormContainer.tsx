import React from "react";
import Form from "@rjsf/bootstrap-4";

import { useQuery, gql, useMutation } from "@apollo/client";
import { Button, Container, Divider } from "semantic-ui-react";

const GETSAMPLECRUDS_QUERY = gql`
  query {
    GetPosts {
      id
      title
      datePosted
      lastUpdate
      content
    }
  }
`;

const CREATE_SAMPLECRUD = gql`
  mutation($title: String!, $content: [[String!]!]!) {
    CreateSampleCRUDPost(title: $title, content: $content)
  }
`;

const UPDATE_SAMPLECRUD_AUTH = gql`
  mutation($id: Int!, $title: String!, $content: [[String!]!]!) {
    UpdateSampleCRUDPost(id: $id, title: $title, content: $content) {
      message
      success
      post {
        id
        title
        content
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation($id: Int!) {
    DeleteSampleCrudPost(id: $id)
  }
`;

const postUiSchema: any = {
  content: {
    items: {
      items: [{}, { "ui:widget": "textarea" }],
      "ui:options": { removable: false, addable: false },
    },
  },
};

const postSchema: any = {
  type: "object",
  properties: {
    title: { type: "string" },
    content: {
      type: "array",
      minLength: 2,
      maxLength: 2,
      title: "paragraphs",
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
  },
};

export const SampleJSONFormContainer = () => {
  const { loading, error, data } = useQuery(GETSAMPLECRUDS_QUERY);

  const [updateCRUDs] = useMutation(UPDATE_SAMPLECRUD_AUTH);
  const [deleteCRUD] = useMutation(DELETE_POST);
  const [createCRUD] = useMutation(CREATE_SAMPLECRUD);

  const onCreate: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    createCRUD({
      variables: {
        title: formData.title,
        content: formData.content,
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  const onSubmit: any = ({ formData }: any, e: any) => {
    e.preventDefault();
    const id_v: number = +formData.id;
    updateCRUDs({
      variables: {
        id: id_v,
        title: formData.title,
        content: formData.content,
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  const onDelete: any = (id_v: number) => {
    const id_: number = +id_v;
    // console.log(typeof (id_ as number)  );
    deleteCRUD({ variables: { id: id_ } })
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container>
        {/* <Form schema={schema} formData={data} uiSchema={uiSchema} /> */}

        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          <div>
            {[]
              .concat(data.GetPosts)
              .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
              .map((value: any, key: number) => (
                <div key={key}>
                  <Divider />
                  <h1> POST ID : {value.id}</h1>
                  <Form
                    schema={postSchema}
                    uiSchema={postUiSchema}
                    formData={value}
                    onSubmit={onSubmit}
                  />

                  {/* <button type="submit">Submit</button>
                  <button type="button">
                    delete
                  </button>
                  <Button> submit </Button> */}
                  <Button onClick={() => onDelete(value.id as number)}>
                    Delete
                  </Button>
                </div>
              ))}
          </div>
        )}

        <Divider />
        <h1> CREATE NEW POST!</h1>

        <Form schema={postSchema} uiSchema={postUiSchema} onSubmit={onCreate} />
      </Container>
    </div>
  );
};

// const schema: any = {
//   type: "object",
//   properties: {
//     GetPosts: {
//       type: "array",
//       title: "Posts",
//       items: {
//         type: "object",
//         title: "POST:",
//         properties: {
//           title: {
//             type: "string",
//           },
//           content: {
//             type: "array",
//             minLength: 2,
//             maxLength: 2,
//             title: "paragraphs",
//             items: {
//               type: "array",
//               items: [
//                 {
//                   title: "Paragraph Header",
//                   description:
//                     "Either fill out a title or leave it blank to continue the paragraph",
//                   type: ["string", "null"],
//                 },
//                 {
//                   title: "paragraph",
//                   type: "string",
//                 },
//               ],
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const uiSchema: any = {
//   GetPosts: {
//     items: {
//       content: {
//         items: {
//           items: [
//             {},
//             {
//               "ui:widget": "textarea",
//             },
//           ],
//           "ui:options": {
//             removable: false,
//             addable: false,
//           },
//         },
//       },
//     },
//   },
// };
