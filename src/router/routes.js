import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Login, SignUp, Home, Products, Cart } from "../containers/"
import PrivateRoute from "./private-route"

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
