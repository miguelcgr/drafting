import React, { Component } from "react";
import "./App.css";

import { Switch, Route, Router } from "react-router-dom";

import Designs from "./components/Designs";
import Setouts from "./components/Setouts";
import Listing from "./components/Listing";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <Nav />
        <Route path="/listing" component={Listing} />
      </div>
    );
  }
}

export default App;
