import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils";

const Auth = (ComposedComponent) => {
  const Authentication = () => {
    const token = getToken();

    let content;

    if (token) {
      content = <ComposedComponent />;
    } else {
      content = <Navigate to={"/login"} />;
    }
    return content;
  };
  return Authentication;
};
export default Auth;
