import React from "react";
import { Route } from "react-router-dom";
import AnotherHeader from "./AnotherHead";
import Header3 from "./Header3";
import Exam from "./Exam";

const header = () => (
  <div>
    <h1 className="text-primary">The Header of Dapson</h1>
    <Route path="/" component={AnotherHeader} />
    <Route path="/innerhead" component={Header3} />
    <Route path="/io" component={Exam} />
  </div>
);

export default header;
