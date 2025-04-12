import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/theme.scss";
import App from "./App.jsx";
// import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
