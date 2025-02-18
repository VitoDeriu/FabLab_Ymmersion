import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProjectStatus from "./pages/ProjectStatus";
import SubmitProject from "./pages/SubmitProject";
import Profile from "./pages/Profile";
import Queue from "./pages/Queue";
import Projects from "./pages/Projects";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project-status" element={<ProjectStatus />} />
          <Route path="/submit-project" element={<SubmitProject />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
