import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = props =>
  props.shouldRedirect ? (
    <Route {...props} />
  ) : (
    <Redirect to={`${props.redirect}`} />
  );
