import { temp_blogPosts } from "data/temp/temp_blogs";
import React from "react";
import { Card, Container, Grid, Header } from "semantic-ui-react";

import { BlogHomeElement } from "components/blog/BlogHomeElement";

export const BlogsHome = () => {
  return (
    <div className="home_blog">
      <Header as="h3" className="blogging_header">
        Blogging<span className="dot">.</span>
        <div className="line" />
      </Header>

      <Container>
        <Card.Group stackable itemsPerRow="3" centered>
          {temp_blogPosts.map((value) => (
            <BlogHomeElement {...value} />
          ))}
        </Card.Group>
      </Container>
    </div>
  );
};
