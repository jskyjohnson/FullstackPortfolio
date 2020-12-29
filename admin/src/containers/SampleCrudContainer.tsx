import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

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

export const SampleCrudContainer = () => {
  const { loading, error, data } = useQuery(GETPOSTS_QUERY);

  // console.log(data);

  return (
    <div>
      <Container>
        <Header>Sample Cruds...</Header>

        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          []
            .concat(data.GetPosts)
            .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
            .map(({ id, title, content }: any, key: number) => (
              <div key={key}>
                <h3>
                  {" "}
                  POST ID {id} : {title}
                </h3>
                {content.map((v: string[], key: number) => (
                  <div key={key}>
                    <h5>{v[0]}</h5> <p>{v[1]}</p>
                  </div>
                ))}

                <Divider />
              </div>
            ))
        )}
      </Container>
    </div>
  );
};
