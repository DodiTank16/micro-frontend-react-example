import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary/Index.jsx";
import Layout from "./components/Layout/Index.jsx";
import "./style.css";
// import SecondApplication from "SecondModule/Second";

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
  const SecondApplication = loadRemoteComponent(() => import("Second/Second"));

  // console.log("🚀 Shell-frontend running", SecondApplication);

  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <div className="shell-frontend">
            <h1>Child services</h1>
            <Suspense fallback={<h2>Loading Service...</h2>}>
              <Routes>
                <Route path="/" element={<AuthApplication />} />
                <Route path="/second" element={<SecondApplication />} />
                <Route
                  path="/third"
                  element={
                    <div>
                      <h1>Third Service</h1>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
}
