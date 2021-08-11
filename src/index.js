import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./index.scss";
import Routes from "./router";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Routes />
  </StylesProvider>,
  document.getElementById("root")
);
