import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
