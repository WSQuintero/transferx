import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorage = useLocalStorage();
  const [session, setSession] = useState(null);

  const isAuthenticated = () => !!session;

  const signin = async (user) => {
    localStorage.set("session", JSON.stringify(user));
    setSession(user);
  };


  const logout = async () => {
    localStorage.remove("session");
    setSession(null);
  };

  const validateSession = async () => {
    const localSession = await localStorage.get("session");

    if (localSession) {
      setSession(JSON.parse(localSession));
    }
  };

  useEffect(() => {
    validateSession();
  }, []);

  return <AuthContext.Provider value={[session, { signin, logout, isAuthenticated }]}>{children}</AuthContext.Provider>;
};
