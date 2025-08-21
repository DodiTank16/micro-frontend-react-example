import React, { Suspense } from "react";
import "./style.css";
import Layout from "./components/Layout/Index.jsx";
import ErrorBoundary from "./components/ErrorBoundary/Index.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  const loadRemoteComponent = (importFunc) => {
    return React.lazy(() =>
      importFunc().catch((err) => {
        console.error("❌ Failed to load remote:", err);
        return { default: () => <h2>⚠️ Service is unavailable ⚠️</h2> };
      })
    );
  };

  const AuthApplication = loadRemoteComponent(() => import("AuthModule/Auth"));

  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<h2>Loading Service...</h2>}>
            <Routes>
              <Route path="/" element={<AuthApplication />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
}
