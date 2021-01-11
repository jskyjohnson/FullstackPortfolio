import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { AboutPage } from "pages/AboutPage";
import { page404 } from "pages/404";
import { ContactPage } from "pages/ContactPage";
import { PageHeader } from "components/pageheader/PageHeader";
import { Footer } from "components/footer/Footer";
import { ProjectsPage } from "pages/ProjectsPage";
import { ProjectItemPage } from "pages/ProjectItemPage";
import { ResumePage } from "pages/ResumePage";
import { useQuery, gql } from "@apollo/client";

const FOOTERDATA = gql`
  query{
    GetUser(id:1){
      footerMessage
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(FOOTERDATA);

  return (
    <PageHeader>
      <Router>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={AboutPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={ContactPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/projects"}`}
            component={ProjectsPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resume"}`}
            component={ResumePage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/project-item"}`}
            component={ProjectItemPage}
          />
          <Route exact component={page404} />
        </Switch>
      </Router>

      {data ? <Footer footerMessage={data.GetUser.footerMessage} /> : null}
    </PageHeader>
  );
}

export default App;
