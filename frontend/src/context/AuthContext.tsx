import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Correct import

// Type definitions for Auth context
interface AuthContextType {
  user: { id: string; username: string } | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (username: string, password: string) => Promise<void>;
}

interface DecodedToken {
  userId: string;
  username: string;
  exp: number; // Expiry time in seconds (Unix timestamp)
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ id: string; username: string } | null>(
    null
  );

  // Check if there's a JWT in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token); 

        // Check if token is expired
        if (decoded.exp * 1000 < Date.now()) {
          logout();
        } else {
          setUser({ id: decoded.userId, username: decoded.username });
        }
      } catch (err) {
        console.error("Error decoding token:", err);
        logout();
      }
    }
  }, []);

  // Login function
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("/api/login", { username, password });
      const { token } = response.data; // Assume JWT token is returned
      localStorage.setItem("token", token); // Store the JWT in localStorage

      const decoded = jwtDecode<DecodedToken>(token); // Decode JWT to extract user info
      setUser({ id: decoded.userId, username: decoded.username }); // Set user info
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Sign up function
  const signup = async (username: string, password: string) => {
    try {
      const response = await axios.post("/api/signup", { username, password });
      const { token } = response.data; // Assume JWT token is returned
      localStorage.setItem("token", token); // Store the JWT in localStorage

      const decoded = jwtDecode<DecodedToken>(token); // Decode JWT to extract user info
      setUser({ id: decoded.userId, username: decoded.username }); // Set user info
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
