import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (parsedUser?.id) {
          const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/user/getUser/${parsedUser.id}`, 
            { withCredentials: true }
          );
          if (response.status === 200) {
            setUser(response.data);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    } else {
      setUser(null);
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
