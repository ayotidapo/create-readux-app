import React, { Component } from "react";
import AllRoutes from "./routes";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <em>Just a Testing App</em>
        </h1>
        <Link to="/header" activeStyle={{ color: "red" }}>
          link1
        </Link>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home1
        </Link>
        <Link to="/header/innerhead" activeStyle={{ color: "red" }}>
          link2
        </Link>
        <Link to="/dummycompo" activeStyle={{ color: "red" }}>
          dummy
        </Link>
        <AllRoutes />
      </div>
    );
  }
}

export default App;
