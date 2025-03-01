import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/getUser/${userId}`, { withCredentials: true });
        if (response.status === 200) {
          setUser(response.data);          
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("id", response.data._id);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        localStorage.removeItem("id");
        setUser(null);
      }
      
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
