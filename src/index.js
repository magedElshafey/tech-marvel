import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import AppRouter from "./routes/AppRouter";
import "./languages/i18n";
import AppInitialzation from "./components/common/app/AppInitialzation";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppInitialzation />
    <AppRouter />
  </>
);
