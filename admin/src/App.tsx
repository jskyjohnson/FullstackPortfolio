import { Login } from "component/Login";
import { HomepageData } from "containers/HomepageData";
import { ProjectData } from "containers/ProjectData";
import { ProjectMenuData } from "containers/ProjectMenuData";
import { SocialsData } from "containers/SocialsData";
import { UserData } from "containers/UserData";
import React from "react";
import { Button, Container, Divider, Header } from "semantic-ui-react";


function App() {
  const [showUserData, setShowUserData] = React.useState(false);
  const onShowUserData = () => setShowUserData(!showUserData);

  return (
    <div className="App">
      <Container>
        <Header as="h1"> Welcome to the admin portal </Header>
      </Container>

      <Container>
        <Divider />
        <Login />
        <p> Show user data?</p>
        <Button icon="eye" onClick={() => onShowUserData()} />
        {showUserData ? (
          <>
            {" "}
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
          </>
        ) : null}
      </Container>

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
