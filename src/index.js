import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { LoginContex } from "./storage/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginContex>
    <App></App>
  </LoginContex>
);
