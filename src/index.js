import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./context/modalContext";
import { ThemeContextProvider } from "./context/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
