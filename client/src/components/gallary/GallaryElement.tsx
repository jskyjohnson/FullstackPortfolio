import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import "assets/css/components/ProjectsGallery.scss";
import { Header } from "semantic-ui-react";

export interface GallaryElementProps {
  element: projectsTypes;
  filter: string;
}

export const GallaryElement = ({ element, filter }: GallaryElementProps) => {
  if (!(filter.includes(element.filter) || filter.includes("*"))) {
    return <div />;
  }
  return (
    <div key={element.id} className="gallery_element">
      <div className="element_fit">
        <div className="element_image_cover">
          <img className="element_image" src={element.thumbnail} />
        </div>
      </div>

      {/* <div className="element_hover">
				<Header as="h3" > {element.title}</Header>
				<p>temp values... yatta</p>
			</div> */}
    </div>
  );
};
