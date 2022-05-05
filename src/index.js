import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Quiz from "./components/Quiz";
import HighscoreView from "./components/HighscoreView";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="highscores" element={<HighscoreView />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
