import { temp_blogPosts } from "data/temp/temp_blogs";
import React from "react";
import { Card, Grid } from "semantic-ui-react";

export const Blogs = () => {
  return (
    <div>
      <Grid columns={3} >
        <Grid.Row>
          {temp_blogPosts.map((value, key) => (
            <Grid.Column key={key} width={4}>
              <Card
                image={value.thumbnail}
                header={value.title}
                meta={value.date}
                extra={value.category}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};
