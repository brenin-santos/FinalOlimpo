import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";

import RoutesSystem from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <RoutesSystem />
    </BrowserRouter>
  </React.StrictMode>
);
