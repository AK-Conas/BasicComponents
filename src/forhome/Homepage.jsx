// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./Toolbar";
import Drawer from "./Drawer";
import Home from "./Home";
import About from "./About";

function Homepage() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer />
        <div style={{ flexGrow: 1 }}>
          <Toolbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Homepage;
