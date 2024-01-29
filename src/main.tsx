import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/general.scss";
import App from "./App.tsx";
import "./index.css";
import { AppWrapper } from "./contexts/AppContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
