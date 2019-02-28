import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import { store, history } from "./helpers";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
);
