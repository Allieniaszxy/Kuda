import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./static/Navbar";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Company from "./pages/Company";
import Help from "./pages/Help";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/company" element={<Company />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
