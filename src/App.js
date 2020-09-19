import React, { Component } from "react";
import HomePage from "./HomePage"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Button, Paper } from "@material-ui/core";


export default class App extends Component {

  render() {
    return (
      <Router>
        <Paper>
          <Button component={Link} to="/">
            Home
          </Button>
        </Paper>
        <Route path="/" Component={HomePage}/>
      </Router>
    );
  }
}
