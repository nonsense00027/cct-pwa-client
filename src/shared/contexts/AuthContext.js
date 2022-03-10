import React, { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    axios
      .post("https://cctclient.com/api/auth/login", {
        email: "admin@system.com",
        password: "bobo2010",
      })
      .then((response) => {
        console.log("response: ", response.headers);
      });
    setUser({ id: 1, email: "admin@system.com", password: "bobo2010" });
  };

  const payload = useMemo(() => ({ user, login }), [user]);
  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
