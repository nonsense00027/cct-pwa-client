import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import axios from "axios";
import { useAuthContext } from "../shared/contexts/AuthContext";

const TrialsContext = createContext();

export const TrialsContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    getTrials();
  }, []);
  const getTrials = () => {
    axios
      .get("http://localhost:8000/api/trials", {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authentication: user.token,
      })
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((err) => console.log(err));
  };
  const payload = useMemo(() => ({ trials }), [trials]);
  return (
    <TrialsContext.Provider value={payload}>{children}</TrialsContext.Provider>
  );
};

export const useTrialsContext = () => useContext(TrialsContext);
