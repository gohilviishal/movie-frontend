import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading user data from local storage:", error);
      } finally {
        setLoading(false);
      }
    }, []);
  
    const login = (userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
    };

    if (loading) {
      return null;
    }
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
  

export function useAuth() {
  return useContext(AuthContext);
}
