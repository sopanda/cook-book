import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import { store } from "./helpers/store";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.min.css";

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
);
