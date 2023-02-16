import { lazy } from "react";
import { Loadable } from "../components";
import { MinimalLayout } from "../layouts";
import { ROUTE_CONSTANTS } from "./routeConstants";

const Dashboard = Loadable(lazy(() => import("../modules/dashboard/dashboard")));

// ==============================|| AUTH ROUTING ||============================== //

const dashboardRoutes = {
  path: ROUTE_CONSTANTS.ROOT,
  element: <MinimalLayout />,
  children: [
    {
      path: ROUTE_CONSTANTS.ROOT,
      element: <Dashboard />,
    },
  ],
};

export default dashboardRoutes;
