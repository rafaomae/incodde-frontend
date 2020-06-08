import React from "react";
import { Switch } from "react-router-dom";
import Route from "./customRoute";

import SignIn from "../pages/signin/SignIn";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
