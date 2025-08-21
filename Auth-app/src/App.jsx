import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Button from "./Button";
import "./style.css";

const AuthRoutes = () => {
  return (
    <div className="auth-app">
      <h1>Auth Application MFE</h1>
      <Button buttonName="Navigate to Apps Service" />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
