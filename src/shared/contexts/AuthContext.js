import React, { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();
const cookieToken = Cookies.get("token") || null;
const cookieEmail = Cookies.get("email") || null;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ token: cookieToken, email: cookieEmail });

  const login = (email, password) => {
    axios
      .post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        },
        {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      )
      .then((response) => {
        setUser({ token: response.data.token, email });
        Cookies.set("token", response.data.token);
        Cookies.set("email", email);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
    Cookies.remove("email");
  };

  const payload = useMemo(() => ({ user, login, logout }), [user]);
  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
