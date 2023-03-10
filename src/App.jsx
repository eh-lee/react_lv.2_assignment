import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Home from "./components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
