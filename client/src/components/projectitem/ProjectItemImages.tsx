import React from "react";
import { Container, Image } from "semantic-ui-react";
import { isUrl } from "utils/isUrl";

export const ProjectItemImages = ({ ...images }: { images: string[] }) => {
  //images.images.map((value) => console.log(value));
  return (
    <Container>
      {images.images.map((value: string, key: number) => (
        <Image
          key={key}
          //src={require(`assets/images/${value}`).default}
          src={isUrl(value) ? value : require(`assets/images/${value}`).default}
          fluid
          className="project_image"
        />
      ))}
    </Container>
  );
};
