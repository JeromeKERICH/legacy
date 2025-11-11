import { useState, useEffect } from "react";
import { getUserFromToken, clearToken } from "../utils/auth";

export default function useAuth() {
  const [user, setUser] = useState(getUserFromToken());

  useEffect(() => {
    const onStorage = () => setUser(getUserFromToken());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return { user, logout, setUser };
}
