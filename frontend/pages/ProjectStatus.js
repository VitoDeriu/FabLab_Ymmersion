import React from "react";
import "../styles/ProjectStatus.css";

const ProjectStatus = () => {
  return (
    <div className="status-container">
      <h2>État du projet</h2>
      <div className="status-bar">
        <div className="step completed">Envoi</div>
        <div className="step">Validation</div>
        <div className="step">Fabrication</div>
        <div className="step">Finalisation</div>
      </div>
    </div>
  );
};
export default ProjectStatus;
