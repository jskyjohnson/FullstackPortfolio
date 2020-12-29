import { Login } from "component/Login";
import { SampleCrudContainer } from "containers/SampleCrudContainer";
import { SampleJSONFormContainer } from "containers/SampleJSONFormContainer";
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

      {/* <SampleCrudContainer /> */}

      {/* <SampleJSONFormContainer /> */}

      {/* Content for all the other stuff */}

      {/* This to pull 

          Projects - Menus

          Blogs

          Keep up <- content

      */}
      
      {/* UserData */}

      <UserData />
      {/* Homepage Data */}

      {/* Project Menu Info */}

      {/* Socials Media Info */}

      {/* Projects */}

      {/* Blog posts??? secondary */}
    </div>
  );
}

export default App;
