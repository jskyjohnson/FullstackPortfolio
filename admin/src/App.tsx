import { Login } from "component/Login";
import { HomepageData } from "containers/HomepageData";
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

      <Divider />

      {/* UserData */}

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

      <Divider />

      {/* Projects */}

      {/* Blog posts??? secondary */}

      <Container>
        <div style={{ height: "5vh" }} />
      </Container>
    </div>
  );
}

export default App;
