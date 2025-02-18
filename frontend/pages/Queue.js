import React from "react";
import "../styles/Queue.css";

const Queue = () => {
  return (
    <div className="queue-container">
      <h2>Liste d'attente</h2>
      <div className="queue-section">Imprimante 1: En cours...</div>
      <div className="queue-section">Imprimante 2: En attente...</div>
    </div>
  );
};
export default Queue;