import { createRoot } from "react-dom/client";
import UICommon from "some";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./app";
import { getUser } from "./utils/storageUtils";
import { HashRouter } from "react-router-dom";

function renderApp() {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}

let startedApp = false;

function startReact() {
  if (startedApp) {
    return;
  }

  try {
    startedApp = true;
    window._current_user_ = getUser();
    renderApp();
  } catch (error) {
    renderError(`A system error has occurred: ${error.message}`);
  }
}

const validateTokenCallback = (isValid) => {
  startedApp = false;
  window._current_user_ = getUser();
  if (isValid) {
    startReact();
  } else {
    UICommon.authenticateWithSingleSignOn(window._env_.serviceHostName);
  }
};

const main = () => {
  UICommon.registerTokenUpdatedCallback(startReact);
  UICommon.validateExistingToken(window._env_.serviceHostName, validateTokenCallback);
};

main();
