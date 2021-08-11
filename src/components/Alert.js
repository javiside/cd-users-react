import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function NotFound(props) {
  return (
    <Alert variant={props.error ? "filled" : "outlined"} severity="error">
      <AlertTitle>{props.error || "PAGE NOT FOUND"}</AlertTitle>{" "}
      <a href="/">Return to Homepage</a>
    </Alert>
  );
}
