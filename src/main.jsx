import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker registered");
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
import React from "react";
import ReactDOM from "react-dom/client";
import AACAppUI from "./AACAppUI";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AACAppUI />
  </React.StrictMode>
);
