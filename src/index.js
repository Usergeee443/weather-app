import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./components/WeatherApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
