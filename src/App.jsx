import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./static/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
