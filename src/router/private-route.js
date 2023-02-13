import React from "react";

import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = localStorage.getItem("codeburguer:userData");

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
