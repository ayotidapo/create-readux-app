import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/common/header";
import Header3 from "./components/common/header3";
import AnotherHeader from "./components/common/anotherhead";
import No from "./components/common/no";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/header3" component={Header3} />

        <Route exact path="/header" component={Header} />
        <Route path="/header/:y" component={AnotherHeader} />
        <Route exact path="/" component={Header} />
        <Route component={No} />
      </Switch>
    );
  }
}

export default App;
