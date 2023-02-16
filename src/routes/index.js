import { useRoutes } from "react-router-dom";

// project import
import dashboardRoutes from "./dashboardRoutes";
import productCenterRoutes from "./productCenterRoutes";

// ==============================|| ROUTING RENDER ||============================== //

const AppRoutes = () => {
  return useRoutes([dashboardRoutes, productCenterRoutes]);
};

export default AppRoutes;
