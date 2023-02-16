import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const TabPanel = (props) => {
  const { children, value, index, ...restProps } = props;

  return (
    value === index && (
      <Box
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`fullWidthTabpanel${index}`}
        {...restProps}
        sx={{ p: 2 }}
      >
        {children}
      </Box>
    )
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default React.memo(TabPanel);
