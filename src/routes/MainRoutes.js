import React from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "../layouts/app-layouts";
import Team from "../components/team/Team";
import Auth from "../hoc/Auth";

let path = {
  TEAM: "/team",
};

const ArrayRoute = () => [
  {
    name: "Team",
    path: path.TEAM,
    component: Team,
    hoc: Auth,
  },
];

const MainRoutesComponent = () => {
  const RouteMap = ArrayRoute().map((route) => {
    const WrappedComponent = route.hoc(route.component);
    return { path: route.path, element: <WrappedComponent /> };
  });

  return {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <Navigate to={path.TEAM} />,
        index: true,
      },
      ...RouteMap,
    ],
  };
};

export default MainRoutesComponent;
