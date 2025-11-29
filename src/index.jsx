import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
