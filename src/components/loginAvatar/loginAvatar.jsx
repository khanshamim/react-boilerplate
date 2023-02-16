import { withStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "./loginAvatar.styles.js";

const LoginAvatar = (props) => {
  const { classes, user } = props;

  const getAbbreviatedName = (name) => {
    return name.charAt(0);
  };

  const abbrName =
    user && user.firstName
      ? `${getAbbreviatedName(user.firstName) + getAbbreviatedName(user.lastName)}`
      : "";

  return (
    <div className={classes.login} data-test="avatar-container">
      <Avatar className={classes.avatar} data-test="avatar">
        {abbrName}
      </Avatar>

      <Typography variant="body2" className={classes.name} data-test="avatar-name">
        {user?.firstName || "User"}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(LoginAvatar);
