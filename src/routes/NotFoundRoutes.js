import React from "react";
import { Navigate } from "react-router-dom";
import NotFoundLayouts from "../layouts/not-found-layouts";
import NoPageFound from "../components/NoPageFound";

const NotFoundRoutes = {
  path: "/",
  element: <NotFoundLayouts />,
  children: [
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "404",
      element: <NoPageFound />,
    },
  ],
};

export default NotFoundRoutes;
