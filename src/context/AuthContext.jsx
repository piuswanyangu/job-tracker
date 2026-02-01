import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, getProfile } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const res = await loginUser(credentials);
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    await fetchProfile();
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setUser(res.data);
    } catch {
      logout();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
