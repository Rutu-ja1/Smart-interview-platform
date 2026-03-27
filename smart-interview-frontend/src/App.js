import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import ProblemDetail from "./pages/ProblemDetail";
import AIInterview from "./pages/AIInterview";
import VideoInterview from "./pages/VideoInterview";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";

function App() {

  return (

    <Router>

      <Routes>

        {/* Authentication Page */}
        <Route path="/" element={<Auth />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Coding Problems */}
        <Route
          path="/problems"
          element={
            <Layout>
              <Problems />
            </Layout>
          }
        />

        {/* Problem Detail */}
        <Route
          path="/problems/:id"
          element={
            <Layout>
              <ProblemDetail />
            </Layout>
          }
        />

        {/* AI Interview */}
        <Route
          path="/ai-interview"
          element={
            <Layout>
              <AIInterview />
            </Layout>
          }
        />

        {/* Video Interview */}
        <Route
          path="/video-interview"
          element={
            <Layout>
              <VideoInterview />
            </Layout>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />

      </Routes>

    </Router>

  );
}

export default App;