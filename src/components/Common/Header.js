import React from "react";
import { Route } from "react-router-dom";
import AnotherHeader from "./AnotherHead";
import Header3 from "./Header3";
import Exam from "./Exam";

const header = () => (
  <div>
    <h1 className="text-primary">The Header of Dapson 1</h1>
    <Route exact path="/" component={AnotherHeader} />
    <Route path="/header/innerhead" component={Header3} />
    <Route path="/header/innertwo" component={Exam} />
    <Route path="/io" component={Exam} />
  </div>
);

export default header;
