import React from "react";
import { Link } from "react-router-dom";
const header3 = () => (
  <div>
    <Link to="/header">link1</Link>
    <Link to="/">Home1</Link>
    <Link to="/header/innerheader">link2</Link>
    <Link to="/dummycompo">dummy</Link>
    <h1>Header3</h1>
  </div>
);

export default header3;
