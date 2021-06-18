import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Designs from "./components/Designs";
import Nav from "./components/Nav";
import Setouts from "./components/Setouts";

const App = () => (
  <div className="app-body">
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={App}>
          <Route path="/designs" component={Designs} />
          <Route path="/setouts" component={Setouts} />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
