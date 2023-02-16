import * as React from "react";
import ResponsiveAppBar from "./components/appBar/appBar";
import TickerBar from "./components/tickerBar/tickerBar";

import MuiTheme from "./muiTheme";
import AppRoutes from "./routes";

const App = () => {
  const [themeMode, setThemeMode] = React.useState("light");

  const handleThemeMode = () => {
    setThemeMode((mode) => {
      return mode === "light" ? "dark" : "light";
    });
  };

  return (
    <MuiTheme themeMode={themeMode}>
      <ResponsiveAppBar onModeChange={handleThemeMode} />
      <TickerBar />
      <AppRoutes />
    </MuiTheme>
  );
};

export default React.memo(App);
