import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export function useAuthHandler() {
  const { setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data); // Set user context
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login error. Please try again.");
    }
  };

  return { login, redirect };
}
