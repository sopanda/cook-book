import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import { store } from "./helpers/store";
import "./index.css";

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
