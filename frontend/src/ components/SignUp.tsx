// src/components/SignUp.tsx

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(username, password);
      alert("Sign up successful!");
    } catch (error) {
      console.error(error);
      alert("Error during sign-up.");
    }
  };

  return (
    <div className="signup-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
