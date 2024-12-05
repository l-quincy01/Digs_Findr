import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

// Define the User type based on your Mongoose schema
interface User {
  name: string;
  email: string;
  password: string; // You probably won't expose this in the frontend; include it only if necessary
  phoneNumber?: string; // Optional
  governmentID?: string; // Optional
  gender?: string; // Optional, could use "male" | "female" if restricted
  userAddress?: string; // Optional
}

// Define the context value type
interface UserContextValue {
  user: User | null; // `null` means no user is logged in
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Function to update the user state
  ready: boolean; // Indicates whether user data is fully loaded
}

// Create the context with default values
export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {}, // Placeholder, actual implementation in the provider
  ready: false,
});

// Define the props for the provider
interface UserContextProviderProps {
  children: ReactNode; // React children (components, fragments, etc.)
}

// UserContextProvider component
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null); // State for the logged-in user
  const [ready, setReady] = useState(false); // State for readiness

  useEffect(() => {
    if (!user) {
      // Fetch user profile if not already set
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data); // `data` should match the `User` interface
          setReady(true);
        })
        .catch((err) => {
          console.error("Failed to fetch user profile:", err);
          setReady(true); // Still set ready to true to prevent indefinite loading
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
