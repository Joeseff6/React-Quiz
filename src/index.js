import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
