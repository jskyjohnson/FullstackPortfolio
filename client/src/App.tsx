import React from "react";
import "assets/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { page404 } from "pages/404";
import { Contact } from "pages/Contact";

function App() {
  return (
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
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={Contact}
        />
        <Route exact component={ page404 }/>
      </Switch>
    </Router>
  );
}

export default App;
