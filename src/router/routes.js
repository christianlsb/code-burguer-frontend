import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "../containers/Login";
import SingUp from "../containers/SignUp";


export default function RoutesApp() {
 return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/singup" element={<SingUp />}/>
        </Routes>
    </BrowserRouter>
  );
}