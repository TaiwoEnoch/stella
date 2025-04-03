import React from "react";
import ReactDOM from "react-dom/client";  // Import createRoot from react-dom/client
import { BrowserRouter as Router } from "react-router-dom";  // Import BrowserRouter
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));  // Use createRoot instead of render

root.render(
  <Router>
    <App />
  </Router>
);
