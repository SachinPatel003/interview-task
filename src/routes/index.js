import { useRoutes } from "react-router-dom";

// project import
import AuthRoutes from "./AuthRoutes";
import NotFoundRoutes from "./NotFoundRoutes";
import MainRoutesComponent from "./MainRoutes";

export default function Router() {
  return useRoutes([MainRoutesComponent(), AuthRoutes, NotFoundRoutes]);
}
