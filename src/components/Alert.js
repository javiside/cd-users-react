import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function NotFound({ msg, severity }) {
  return (
    <Alert
      variant={severity ? "outlined" : "filled"}
      severity={severity || "error"}
    >
      <AlertTitle>{msg || "PAGE NOT FOUND"}</AlertTitle>{" "}
      {!severity && <a href="/">Return to Homepage</a>}
    </Alert>
  );
}
