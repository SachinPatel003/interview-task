import React from "react";
import AuthLayouts from "../layouts/auth-layouts";
import Login from "../components/login/Login";
import Redirect from "../hoc/Redirect";

const AuthRoutes = {
  path: "/",
  element: <AuthLayouts />,
  children: [
    {
      path: "/login",
      element: <Redirect ComposedComponent={Login} />,
    },
  ],
};

export default AuthRoutes;
