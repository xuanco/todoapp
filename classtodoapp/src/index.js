import React from "react";
import ReactDOM from "react-dom/client"; // Dùng "react-dom/client" thay vì "react-dom"
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
