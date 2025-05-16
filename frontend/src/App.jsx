import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Home />}></Routes>
    </BrowserRouter>
  );
};

export default App;
