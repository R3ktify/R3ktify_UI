import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// STYLE
import "./index.css";
import "./styles/index.scss";
// import "./assets/fonts/line-awesome-1.3.0/css/line-awesome.min.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
