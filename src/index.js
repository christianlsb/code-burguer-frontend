import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import SingUp from "./containers/SignUp";
import GlobalStyle from "./styles/globalStyle";
import { themes } from "./styles/theme";

import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <SingUp />
      <GlobalStyle /> 
      <ToastContainer/>
    </ThemeProvider>
  </>
);
