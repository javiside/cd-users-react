import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import "./index.scss";

import Routes from "./router";
import store from "./store/index";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <Routes />
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
