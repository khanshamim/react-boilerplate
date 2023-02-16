import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import muiComponentsOverrides from "./muiComponentsOverrides";

const generateClassName = createGenerateClassName({
  productionPrefix: "lakc",
});

const MuiTheme = (props) => {
  const themePalette = palette(props.themeMode);
  const themeTypography = typography(`Arial, sans-serif`);

  const themeOptions = useMemo(() => {
    return {
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 48,
        },
      },
      palette: themePalette,
      typography: themeTypography,
    };
  }, [themePalette, themeTypography]);

  const appliedThemes = responsiveFontSizes(createTheme(themeOptions));
  appliedThemes.components = muiComponentsOverrides(appliedThemes);

  return (
    <StyledEngineProvider injectFirst>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={appliedThemes}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </StylesProvider>
    </StyledEngineProvider>
  );
};

export default MuiTheme;
