import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../containers/Login";
import SingUp from "../containers/SignUp";
import Home from "../containers/Home";

import PrivateRoute from "./private-route";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
