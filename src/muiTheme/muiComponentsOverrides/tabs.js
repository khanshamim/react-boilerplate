import { tabsClasses } from "@mui/material/Tabs";

const Tabs = (theme) => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.MuiTabs-scrollButtons": {
              color: theme.palette.primary.main,
            },
            "&.Mui-disabled": { opacity: 0.3 },
          },
        },
      },
    },
  };
};

export default Tabs;
