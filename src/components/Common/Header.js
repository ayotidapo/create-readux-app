import React from "react";
import { Route } from "react-router-dom";
import AnotherHeader from "./AnotherHead";
import Header3 from "./Header3";

const header = () => (
  <div>
    <h1 className="text-primary">The Header of Dapson</h1>
    <Route path="/innerhead" component={Header3} />
    <Route path="/" component={AnotherHeader} />
  </div>
);

export default header;
