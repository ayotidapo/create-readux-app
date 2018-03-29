import React from "react";
import { Switch, Route } from "react-router";

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
