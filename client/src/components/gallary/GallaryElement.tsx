import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import "assets/css/components/ProjectsGallery.scss";
import { Header, Image } from "semantic-ui-react";
import { isUrl } from "utils/isUrl";

export interface GallaryElementProps {
  element: projectsTypes;
  filter: string;
}

export const GallaryElement = ({ element, filter }: GallaryElementProps) => {
  let filtered = false;
  if (!(filter.includes(element.filter) || filter.includes("*"))) {
    filtered = true;
  } else {
    filtered = false;
  }
  return (
    <a
      key={element.id}
      className={"gallery_element " + (!filtered ? "enable" : "disable")}
      title={element.title}
      href={"/project-item/?id=" + element.id}
    >
      <div className="element_fit">
        <div className="element_image_cover">
          <Image
            className="element_image"
            // src={require(`assets/images/${element.thumbnail}`).default}
            src={
              isUrl(element.thumbnail)
                ? element.thumbnail 
                : require(`assets/images/${element.thumbnail}`).default
            }
          />
        </div>
      </div>

      <div className="element_hover">
        <div className="element_hover_contents">
          <Header as="h3">{element.title}</Header>
          <span>{element.subtitle}</span>
        </div>
      </div>
    </a>
  );
};
