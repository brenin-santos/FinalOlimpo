import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import RoutesSystem from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <RoutesSystem />
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>
);
