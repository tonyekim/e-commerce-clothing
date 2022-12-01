import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hats" element={<HatPage />} />
      </Routes>
    </div>
  );
}

export default App;
