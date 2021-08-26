import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import Alert from "./Alert";

const LoadingWrapper = ({ loading, error, users }) => {
  if (loading) {
    return (
      <Skeleton
        width={"100%"}
        height={users ? "80vh" : "33vh"}
        style={{ transform: "none" }}
      />
    );
  } else if (error) {
    return <Alert msg={error} />;
  }
  return <Alert severity="info" msg="No Results" />;
};

export default LoadingWrapper;
