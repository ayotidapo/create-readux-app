import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Common/Header";
import Header3 from "./components/Common/Header3";
import AnotherHeader from "./components/Common/AnotherHead";
import DummyFile from "./components/DummyFolder/DummyFile";
import No from "./components/Common/No";
const routes = () => (
  <Switch>
    <Route path="/header3" component={Header3} />
    <Route path="/dummycompo" component={DummyFile} />

    <Route path="/header" component={Header} />
    <Route path="/header/:y" component={AnotherHeader} />
    <Route exact path="/" component={Header3} />
    <Route component={No} />
  </Switch>
);

export default routes;
