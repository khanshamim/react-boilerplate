import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import laLogo from "../../../public/images/png/laLogo.png";
import { MAIN_MENUS } from "./mainMenu/mainMenuConstants";
import MainMenu from "./mainMenu/mainMenu";
import SwipeableSideDrawer from "./sideDrawer/sideDrawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "160px",
  },
}));

const ResponsiveAppBar = (props) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const desktopAccountMenuId = "primarySearchAccountMenu";
  const renderDesktopMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={desktopAccountMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      data-testid="desktopMenu"
    >
      <MenuItem sx={{ m: 0 }} onClick={handleMenuClose} data-testid="desktopProfileMenu">
        <Typography variant="body2">Profile</Typography>
      </MenuItem>
      <Divider flexItem />
      <MenuItem sx={{ m: 0 }} onClick={handleMenuClose}>
        <Typography variant="body2">My account</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileAccountMenuId = "primarySearchAccountMenuMobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileAccountMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      data-testid="mobileMenu"
    >
      <MenuItem sx={{ m: 0 }} onClick={props.onModeChange}>
        <IconButton size="small" color="inherit">
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Typography variant="body2">Change Mode</Typography>
      </MenuItem>
      <MenuItem sx={{ m: 0 }}>
        <IconButton size="small" color="inherit" aria-label="show 4 new notifications">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="body2">Notifications</Typography>
      </MenuItem>
      <MenuItem sx={{ m: 0 }} onClick={handleProfileMenuOpen}>
        <IconButton
          size="small"
          color="inherit"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="body2">Profile</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="appBarBox">
      <AppBar position="static">
        <Toolbar disableGutters sx={{ p: theme.spacing(0, 2) }}>
          <img src={laLogo} alt="Lord Abbett" height={32} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              ml: 1,
              display: { xs: "none", lg: "flex" },
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            LORD ABBET
          </Typography>
          <Box sx={{ flexGrow: 1, alignItems: "center", display: { xs: "flex", lg: "none" } }}>
            <SwipeableSideDrawer />
          </Box>
          <Box
            sx={{ flexGrow: 1, alignItems: "center", ml: 1, display: { xs: "none", lg: "flex" } }}
          >
            {MAIN_MENUS.map((mm) => {
              return <MainMenu key={`${mm.key}MainMenu`} mainMenu={mm} />;
            })}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Divider orientation="vertical" flexItem />
            <IconButton
              size="large"
              color="inherit"
              onClick={props.onModeChange}
              data-testid="changeMode"
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon data-testid="lightModeIcon" />
              ) : (
                <DarkModeIcon data-testid="darkModeIcon" />
              )}
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton size="large" color="inherit" aria-label="show 4 new notifications">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              size="large"
              color="inherit"
              edge="end"
              aria-label="account of current user"
              aria-controls={desktopAccountMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              data-testid="btnProfile"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="show more"
              aria-controls={mobileAccountMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              data-testid="btnMobileMenu"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderDesktopMenu}
    </Box>
  );
};

export default ResponsiveAppBar;
