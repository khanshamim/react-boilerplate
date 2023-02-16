export default (theme) => ({
  appBar: {
    boxShadow: "none",
    minHeight: 40,
    backgroundColor: theme.palette.veryLightGrey,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${theme.spacing(2)}`,
  },
  logoContainer: {
    height: 40,
    minHeight: 0,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "100%",
  },
  appName: {
    color: theme.palette.darkGrey,
    marginLeft: "10px",
  },
});
