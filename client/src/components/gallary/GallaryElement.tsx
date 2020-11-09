import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import "assets/css/components/ProjectsGallery.scss";
import { Header } from "semantic-ui-react";

export interface GallaryElementProps {
  element: projectsTypes;
  filter: string;
  key:number;
}

export const GallaryElement = ({ element, filter, key }: GallaryElementProps) => {

	let filtered = false;
  if (!(filter.includes(element.filter) || filter.includes("*"))) {
    filtered = true;
  }else{
		filtered = false;
	}
  return (
    <a key={key} className={"gallery_element " +( (!filtered)? "enable" : "disable")} title={element.title} href={"/projects/" + element.id}>
      <div className="element_fit">
        <div className="element_image_cover">
          <img className="element_image" src={element.thumbnail} />
        </div>
      </div>

      <div className="element_hover">
        <div className="element_hover_contents">
          <Header as="h3">{element.title}</Header>
          <span>temp values... yatta</span>
        </div>
      </div>
    </a>
  );
};
