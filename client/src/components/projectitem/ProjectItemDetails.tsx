import { projectsTypes } from "data/temp/temp_projects";
import React from "react";
import { Header } from "semantic-ui-react";

import "assets/css/components/ProjectItems.scss";
import { isUrl } from "utils/isUrl";

export const ProjectItemDetails = ({
  ...project
}: {
  project: projectsTypes;
}) => {
  const pr = project.project;
  return (
    <div className="project_details">
      <div>
        <span className="date_day">{pr.date.getDay()}</span>
        <span className="date_month">
          {pr.date.toLocaleString("default", { month: "short" })}
        </span>
        <span className="date_year">{pr.date.getFullYear()}</span>
      </div>
      <Header as="h1" className="project_title">
        {pr.title}
      </Header>

      <Header as="h2" className="project_subtitle">
        {pr.subtitle}
      </Header>

      <Header as="h3" className="project_category">
        {pr.category}
      </Header>

      {pr.description.map((e) => (
        <div>
          {e[0] ? (
            <div>
              <Header as="h4" className="project_description_header">
                {e[0]}
              </Header>
              <p className="project_description"> {e[1]} </p>
            </div>
          ) : (
            <div>
              <p className="project_description">{e[1]} </p>
            </div>
          )}
        </div>
      ))}

      {Object.keys(pr.meta).map((e) => (
        <div className="project_detail_item">
          {isUrl(pr.meta[e]) ? (
            <>
              <span className="project_detail_header">
                {e.charAt(0).toUpperCase() + e.slice(1)}:
              </span>
              <a href={pr.meta[e]} target="_blank" rel="noopener noreferrer">
                <p className="project_detail">{pr.meta[e]}</p>
              </a>
            </>
          ) : (
            <>
              <span className="project_detail_header">
                {e.charAt(0).toUpperCase() + e.slice(1)}:
              </span>
              <p className="project_detail">{pr.meta[e]}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
