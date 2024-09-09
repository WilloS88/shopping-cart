import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
