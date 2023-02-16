export default (theme) => ({
  mainMenuItem: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  activeMainMenu: {
    color: theme.palette.common.mustardYellow,
    borderBottom: `4px solid`,
    borderRadius: "4px",
  },
  subMenuItem: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  activeSubMenu: {
    backgroundColor: theme.palette.common.mustardYellow,
  },
});
