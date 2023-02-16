import { lazy } from "react";
import { Loadable } from "../components";
import { MinimalLayout } from "../layouts";
import { ROUTE_CONSTANTS } from "./routeConstants";

const ProductList = Loadable(
  lazy(() => import("../modules/productCenter/productList/productList"))
);

// ==============================|| MAIN ROUTING ||============================== //

const productCenterRoutes = {
  path: ROUTE_CONSTANTS.ROOT,
  element: <MinimalLayout />,
  children: [
    {
      path: ROUTE_CONSTANTS.PRODUCT_LIST,
      element: <ProductList />,
    },
  ],
};

export default productCenterRoutes;
