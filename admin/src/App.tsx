import { Login } from "component/Login";
import { HomepageData } from "containers/HomepageData";
import { ProjectData } from "containers/ProjectData";
import { ProjectMenuData } from "containers/ProjectMenuData";
import { SampleCrudContainer } from "containers/SampleCrudContainer";
import { SampleJSONFormContainer } from "containers/SampleJSONFormContainer";
import { SocialsData } from "containers/SocialsData";
import { UserData } from "containers/UserData";
import React from "react";

import { Container, Divider, Header } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1"> Welcome to the admin portal </Header>
      </Container>

      <Divider />
      <Login />

      {/* UserData */}
      <Divider />
      <UserData />
      {/* Homepage Data */}
      <Divider />
      <HomepageData />

      {/* Socials Media Info */}

      <Divider />
      <SocialsData />

      {/* Project Menu Info */}

      <Divider />
      <ProjectMenuData />

      {/* Projects */}
      <Divider />
      <ProjectData />

      {/* Blog posts??? secondary */}
      <Divider />
      <Container>
        <div style={{ height: "5vh" }} />
      </Container>
    </div>
  );
}

export default App;
