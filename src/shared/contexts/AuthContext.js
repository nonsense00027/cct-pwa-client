import React, { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();
const cookieToken = Cookies.get("token") || null;
const cookieEmail = Cookies.get("email") || null;
const cookieUser = () => {
  const result = Cookies.get("user");
  if (result) {
    return JSON.parse(result);
  } else {
    return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    cookieToken && cookieEmail && cookieUser
      ? { token: cookieToken, email: cookieEmail, data: cookieUser() }
      : null
  );

  const login = (email, password) => {
    axios
      .post(
        "https://cctclient.com/api/auth/login",
        // "http://localhost:8000/api/auth/login",
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
        if (response.data.token) {
          setUser({
            token: response.data.token,
            email,
            data: response.data.user,
          });
          Cookies.set("token", response.data.token);
          Cookies.set("email", email);
          Cookies.set("user", JSON.stringify(response.data.user));
        }
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
