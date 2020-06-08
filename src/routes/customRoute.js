import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import LoginLayout from "../pages/layout/loginLayout/LoginLayout";
import DefaultLayout from "../pages/layout/defaultLayout/DefaultLayout";

export default function CustomRoute({ component: Component, ...rest }) {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const Layout = isAuthenticated ? LoginLayout : DefaultLayout;
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
