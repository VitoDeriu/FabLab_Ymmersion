'use client';

import React, { useState } from "react";
import { loginUser } from "../../services/api";
import "../../styles/Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login / Register</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="input-field" 
      />
      <br />
      <input 
        type="password" 
        placeholder="Mot de passe" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="input-field" 
      />
      <br />
      <button 
        onClick={handleLogin} 
        className="login-button"
      >
        Login
      </button>
    </div>
  );
}
