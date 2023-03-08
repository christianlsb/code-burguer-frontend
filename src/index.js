import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "styled-components"

import AppProvider from "./hooks"
import RoutesApp from "./router/routes"
import GlobalStyle from "./styles/globalStyle"
import { themes } from "./styles/theme"
const root = ReactDOM.createRoot(document.getElementById("root"))
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
)
