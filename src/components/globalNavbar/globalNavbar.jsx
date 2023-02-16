import { memo } from "react";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import LALogo from "../../../public/images/png/laLogo.png";
import styles from "./globalNavbar.styles";
import LoginAvatar from "../loginAvatar/loginAvatar";

const GlobalNavbar = (props) => {
  const { appBar, appName, logoContainer, logo } = props.classes;

  return (
    <div className={appBar} data-test="globalNavbarContainer">
      <div className={logoContainer} data-test="goToRoot">
        <img className={logo} src={LALogo} data-test="logo" />
        <Typography variant="body2" className={appName} data-test="appName">
          PRODUCT KNOWLEDGE CENTER
        </Typography>
      </div>
      <LoginAvatar user={window._current_user_} />
    </div>
  );
};

export default memo(withStyles(styles, { withTheme: true })(GlobalNavbar));
