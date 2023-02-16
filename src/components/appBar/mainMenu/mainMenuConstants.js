import { ROUTE_CONSTANTS } from "../../../routes/routeConstants";

export const MAIN_MENUS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: ROUTE_CONSTANTS.ROOT,
  },
  {
    key: "productCenter",
    label: "Product Center",
    subMenus: [
      {
        key: "productList",
        label: "Product List",
        path: ROUTE_CONSTANTS.PRODUCT_LIST,
      },
      {
        key: "mutualFundComparison",
        label: "Mutual Fund Comparison",
        path: ROUTE_CONSTANTS.MUTUAL_FUND_COMPARISON,
      },
      {
        key: "ofshoreFundComparison",
        label: "Ofshore Fund Comparison",
        path: ROUTE_CONSTANTS.OFSHORE_FUND_COMPARISON,
      },
      {
        key: "institutionalComparison",
        label: "Institutional Comparison",
        path: ROUTE_CONSTANTS.INSTITUTIONAL_COMPARISON,
      },
      {
        key: "compositeComparison",
        label: "Composite Comparison",
        path: ROUTE_CONSTANTS.COMPOSITE_COMPARISON,
      },
      {
        key: "performanceDailyReport",
        label: "Performance Daily Report",
        path: ROUTE_CONSTANTS.PERFORMANCE_DAILY_REPORT,
      },
      {
        key: "productNews",
        label: "Product News",
        path: ROUTE_CONSTANTS.PRODUCT_NEWS,
      },
    ],
  },
  {
    key: "dailyMutualFundFlow",
    label: "Daily Mutual Fund Flow",
    path: ROUTE_CONSTANTS.DAILY_MUTUAL_FUND_FLOW,
  },
  {
    key: "assetsUnderManagement",
    label: "Assets Under Management",
    subMenus: [
      {
        key: "overview",
        label: "Overview",
        path: ROUTE_CONSTANTS.OVERVIEW,
      },
      {
        key: "reportBuilder",
        label: "Report Builder",
        path: ROUTE_CONSTANTS.REPORT_BUILDER,
      },
      {
        key: "definations",
        label: "Definations",
        path: ROUTE_CONSTANTS.DEFINATIONS,
      },
    ],
  },
  {
    key: "managedAccounts",
    label: "Managed Accounts",
    path: ROUTE_CONSTANTS.MANAGED_ACCOUNTS,
  },
];
