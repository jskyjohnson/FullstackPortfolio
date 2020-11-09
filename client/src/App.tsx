import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { page404 } from "pages/404";
import { Contact } from "pages/Contact";
import { PageHeader } from "components/pageheader/PageHeader";
import { Footer } from "components/footer/Footer";

function App() {
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
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route exact component={page404} />
        </Switch>
      </Router>
      <Footer />
    </PageHeader>
  );
}

export default App;
