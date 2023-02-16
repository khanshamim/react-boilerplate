import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../../src/redux/store";
import MuiTheme from "../../src/muiTheme";
import { useTheme } from "@mui/styles";

const AllTheProviders = ({ children }) => {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <HashRouter>
        <MuiTheme theme={theme} themeMode={children?.props?.mode || "light"}>
          {children}
        </MuiTheme>
      </HashRouter>
    </Provider>
  );
};

export const renderWithProviders = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};
