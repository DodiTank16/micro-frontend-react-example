import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Button from "./Button";
import "./style.css";

const AuthRoutes = () => {
  return (
    <div className="auth-app">
      <h1>First Application MFE</h1>
      <div className="auth-app-content">
        <img
          src="https://blog.nashtechglobal.com/wp-content/uploads/2023/10/react-microfrontend-1024x538.png"
          alt="child Service"
          width="300"
        />
        <Button buttonName="Navigate to Second Service" />
      </div>
    </div>
  );
};

export default function App() {
  const loadRemoteComponent = (importFunc) => {
    return React.lazy(() =>
      importFunc().catch((err) => {
        console.error("❌ Failed to load remote:", err);
        return { default: () => <h2>⚠️ Service is unavailable ⚠️</h2> };
      })
    );
  };
  const SecondApplication = loadRemoteComponent(() =>
    import("SecondModule/Second")
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoutes />} />
        <Route path="/second" element={<SecondApplication />} />
      </Routes>
    </BrowserRouter>
  );
}
