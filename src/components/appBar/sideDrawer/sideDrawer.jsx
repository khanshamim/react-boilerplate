import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MainMenu from "../mainMenu/mainMenu";
import { MAIN_MENUS } from "../mainMenu/mainMenuConstants";

const SwipeableSideDrawer = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        color="inherit"
        data-testid="sideDrawerIcon"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        data-testid="sideDrawerMenu"
      >
        <Box sx={{ height: "100%", bgcolor: "primaryBg.main" }}>
          {MAIN_MENUS.map((mm) => {
            return (
              <div key={`${mm.key}SideMainMenus`}>
                <MainMenu mainMenu={mm} onMenuClick={toggleDrawer(false)} />
                <Divider />
              </div>
            );
          })}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default SwipeableSideDrawer;
