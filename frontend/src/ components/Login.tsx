import React, { useState } from "react";

interface LoginProps {
  signIn: (username: string, password: string) => Promise<void>; // Accept the signIn function as a prop
  onSuccess: () => void; // Accept the onSuccess callback as a prop
}

const Login: React.FC<LoginProps> = ({ signIn, onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Handle errors
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn(username, password); // Use signIn passed as a prop
      onSuccess(); // Trigger onSuccess after successful login
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      setError("Error during login.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Show error message */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border-2 p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 p-2 w-full"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brown-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition"
        >
          {isSubmitting ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
