import { blogPostTypes } from "data/temp/temp_blogs";
import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";

import "assets/css/components/BlogHome.scss";

export const BlogHomeElement = ({ ...props }: blogPostTypes) => {
  return (
    <Card className="blog_home_element" href={"blog/" + props.id}>
			<Image src={props.thumbnail} wrapperd className="element_fit" />
      <Card.Content>
        

        <Card.Meta>{props.category}</Card.Meta>

        <Card.Header>{props.title}</Card.Header>
      </Card.Content>

      <Card.Content extra>{props.date.toDateString()}</Card.Content>
    </Card>
  );
};
