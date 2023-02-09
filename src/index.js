import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Login from "./containers/Login";
import GlobalStyle from "./styles/globalStyle";
import { themes } from "./styles/theme";

import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <Login />
      <GlobalStyle /> 
      <ToastContainer/>
    </ThemeProvider>
  </>
);
