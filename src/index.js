import React from "react";
import ReactDOM from "react-dom/client";

import { themes } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";

import AppProvider from "./hooks";

import { ToastContainer } from "react-toastify";

import RoutesApp from "./router/routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  </>
);
