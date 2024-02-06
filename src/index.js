import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./context/navigation";
import "typeface-montserrat";
import "typeface-montserrat-alternates";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
