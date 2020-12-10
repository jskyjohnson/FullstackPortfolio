import React from "react";
import { Container, Header } from "semantic-ui-react";

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
	
	console.log(data);

  return (
    <div>
      <Container>
        <Header>Sample Cruds...</Header>

        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          data.GetPosts.map(({ title, content }: any) => <h3>{title}</h3>)
        )}
      </Container>
    </div>
  );
};
