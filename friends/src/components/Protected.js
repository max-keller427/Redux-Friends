import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const Protected = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default Protected;
