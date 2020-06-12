import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, getToken } from "../services/auth";
import LoginLayout from "../pages/layout/loginLayout/LoginLayout";
import DefaultLayout from "../pages/layout/defaultLayout/DefaultLayout";

export default function CustomRoute({
  component: Component,
  requireAuth,
  ...rest
}) {
  if (requireAuth) {
    if (!isAuthenticated()) {
      return <Redirect to="/" />;
    }
  }

  if (isAuthenticated() && rest.path === "/") {
    return <Redirect to="/home" />;
  }
  if (isAuthenticated() && !getToken().isAdmin && rest.path.includes("admin")) {
    return <Redirect to="/permissao" />;
  }

  const Layout = !isAuthenticated() ? LoginLayout : DefaultLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
