import React from "react";
import Form from "@rjsf/core";

import { useQuery, gql } from "@apollo/client";

const GETPOSTS_QUERY = gql`
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

const schema: any = {
  type: "object",
  properties: {
    GetPosts: {
      type: "array",
      title: "Posts",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          content: {
            type: "array",
            items: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};


export const SampleJSONFormContainer = () => {
  const { loading, error, data } = useQuery(GETPOSTS_QUERY);

  const log = (type: any) => console.log.bind(console, type);

  console.log(data);

  return (
    <div>
      <Form schema={schema} formData={data} />
    </div>
  );
};
