import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">{project.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
