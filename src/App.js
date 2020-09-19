import React, { Component } from "react";
import HomePage from "./HomePage"
import Insert from "./Insert";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Button, Paper } from "@material-ui/core";


export default class App extends Component {

  render() {
    return (
      <Router>
        <Button component={Link} to="/insert">
          Add
        </Button>
        <Route exact path="/" component={HomePage}/>
        <Route path="/insert" component={Insert}/>
      </Router>
    );
  }
}
