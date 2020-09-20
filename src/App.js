import React, { Component } from "react";
import HomePage from "./HomePage"
import Insert from "./Insert";
import WorkerPage from "./WorkerPage"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Button, Paper } from "@material-ui/core";


export default class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/insert" component={Insert}/>
        <Route path="/workerPage" component={WorkerPage}/>
      </Router>
    );
  }
}
