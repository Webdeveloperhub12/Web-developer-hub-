import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Team } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="team" element={<Team/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
