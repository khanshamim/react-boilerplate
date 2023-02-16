import * as React from "react";
import { styled } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./mainMenu.styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => {
  return {
    "& .MuiPaper-root": {
      marginTop: theme.spacing(1),
      minWidth: 200,
      border: `1px solid ${theme.palette.common.white}`,
      "& .MuiMenuItem-root": {
        height: theme.spacing(4),
        minHeight: theme.spacing(4),
        "&:hover": {
          backgroundColor: theme.palette.common.mustardYellow,
        },
      },
    },
  };
});

const MainMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { mainMenu } = props;

  const location = useLocation();

  const isSubMenuActive = React.useMemo(() => {
    const subMenuPaths = (mainMenu?.subMenus || []).map((sm) => {
      return sm.path;
    });
    return subMenuPaths?.includes(location.pathname.substring(1));
  }, [location]);

  const hasSubMenu = React.useMemo(() => {
    return !!(mainMenu?.subMenus && mainMenu.subMenus?.length);
  }, [mainMenu]);

  const handleMainMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    // Close side drawer on main menu selection.
    if (!hasSubMenu && props?.onMenuClick && props?.onMenuClick instanceof Function) {
      props.onMenuClick();
    }
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
    // Close side drawer on sub menu selection.
    if (props?.onMenuClick && props?.onMenuClick instanceof Function) {
      props.onMenuClick();
    }
  };

  const renderSubMenus = () => {
    const { subMenus } = mainMenu;
    const subMenusLength = subMenus.length || 0;

    return (
      <StyledMenu
        id={`${mainMenu.key}SubMenus`}
        MenuListProps={{
          "aria-labelledby": mainMenu.key,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleSubMenuClose}
        onClick={handleSubMenuClose}
      >
        {subMenus.map((sm, index) => {
          return (
            <NavLink
              key={`${sm.key}MenuItem`}
              to={sm?.path}
              className={({ isActive }) =>
                isActive
                  ? `${props.classes.subMenuItem} ${props.classes.activeSubMenu}`
                  : props.classes.subMenuItem
              }
              data-testid="navSubMenu"
            >
              <MenuItem key={sm.key} sx={{ bgcolor: "inherit" }}>
                <Typography variant="body1">{sm.label}</Typography>
              </MenuItem>
              {++index !== subMenusLength && <Divider flexItem />}
            </NavLink>
          );
        })}
      </StyledMenu>
    );
  };

  const renderMainMenu = (label, isActive) => {
    return (
      <Box sx={{ p: { xs: props.theme.spacing(0.5, 1), lg: 0 } }}>
        <Button
          id={mainMenu.key}
          aria-controls={open ? `${mainMenu.key}SubMenus` : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="text"
          onClick={handleMainMenuClick}
          endIcon={hasSubMenu && <KeyboardArrowDownIcon sx={{ ml: -0.5 }} />}
          style={{
            color: isActive
              ? props.theme.palette.common.mustardYellow
              : props.theme.palette.common.white,
          }}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          data-testid="btnMainMenu"
        >
          <Typography variant="body1" color="inherit">
            {label}
          </Typography>
        </Button>
        <div className={isActive ? props.classes.activeMainMenu : undefined} />
      </Box>
    );
  };

  return (
    <>
      {hasSubMenu ? (
        renderMainMenu(mainMenu.label, isSubMenuActive)
      ) : (
        <NavLink to={mainMenu?.path} className={props.classes.mainMenuItem}>
          {({ isActive }) => renderMainMenu(mainMenu.label, isActive || isSubMenuActive)}
        </NavLink>
      )}
      {hasSubMenu && renderSubMenus()}
    </>
  );
};

export default React.memo(withStyles(styles, { withTheme: true })(MainMenu));
