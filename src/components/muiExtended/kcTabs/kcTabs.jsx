import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./tabPanel";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const KCTabs = (props) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper sx={{ boxShadow: "none" }} {...props?.paperProps}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        {...props?.tabsProps}
      >
        {props.tabs?.map((tab, indx) => {
          return (
            <Tab
              key={`tabLbl${indx}`}
              id={`fullWidthTab${indx}`}
              label={tab?.label}
              aria-controls={`fullWidthTabpanel${indx}`}
              {...props?.tabProps}
            />
          );
        })}
      </Tabs>
      <Divider />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        {...props?.swipeableViewsProps}
      >
        {props.tabs?.map((tab, indx) => {
          return (
            <TabPanel
              key={`tabPnl${indx}`}
              value={value}
              index={indx}
              dir={theme.direction}
              {...props?.tabPanelProps}
            >
              {tab?.panel}
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Paper>
  );
};

KCTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      panel: PropTypes.node.isRequired,
    })
  ).isRequired,
  paperProps: PropTypes.object,
  tabsProps: PropTypes.object,
  tabProps: PropTypes.object,
  swipeableViewsProps: PropTypes.object,
  tabPanelProps: PropTypes.object,
};

export default React.memo(KCTabs);
