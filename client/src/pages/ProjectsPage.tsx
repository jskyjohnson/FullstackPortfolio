import { ProjectsGallary } from 'components/gallary/ProjectsGallary'
import React from 'react'
import { Header } from 'semantic-ui-react'

import "assets/css/pages/ProjectsPage.scss"

export const ProjectsPage = () => {
	return (
		<div>
      <Header as="h2" className="projects_header">
        Projects<span className="dot">.</span>
        <div className="line" />
      </Header>
      <div className="h_projects_clone">Projects</div>
      <ProjectsGallary />
    </div>
	)
}
