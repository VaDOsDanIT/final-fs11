import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ isPublic, ...route }) => {
  if (isPublic) {
    return <Route {...route} />;
  }

  return <Route {...route} />;
};

export default PrivateRoute;