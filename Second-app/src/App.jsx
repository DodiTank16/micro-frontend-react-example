import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Button from "./Button";
import "./style.css";

const SecondService = () => {
  return (
    <div className="auth-app">
      <h1>Second Application MFE</h1>
      <div className="auth-app-content">
        <img
          src="https://cdn.vectorstock.com/i/1000v/03/87/number-2-sign-design-template-elements-black-icon-vector-13370387.jpg"
          alt="child Service second"
          width="300"
        />
        <Button buttonName="Navigate to Third Service" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/second" element={<SecondService />} />
      </Routes>
    </BrowserRouter>
  );
}
