import { SampleCrudContainer } from "containers/SampleCrudContainer";
import React from "react";

import { Container, Header } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1"> Welcome to the admin portal </Header>
      </Container>

      <SampleCrudContainer />
      {/* Content for all the other stuff */}

      {/* This to pull 

          Projects - Menus

          Blogs

          Keep up <- content

      */}

      {/* Sample CRUD */}
    </div>
  );
}

export default App;
