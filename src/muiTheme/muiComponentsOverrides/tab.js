const Tab = (theme) => {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          fontSize: "0.75rem",
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            fontWeight: 600,
          },
        },
      },
    },
  };
};

export default Tab;
