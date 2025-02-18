import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Mon Profil</h2>
      <button className="profile-btn">Confidentialité</button>
      <button className="profile-btn">Mes Projets</button>
      <button className="profile-btn">Déconnexion</button>
    </div>
  );
};
export default Profile;