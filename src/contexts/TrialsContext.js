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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrials();
  }, []);
  const getTrials = () => {
    // axios
    //   .get("http://localhost:8000/api/trials", {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     Authentication: user.token,
    //   })
    //   .then((response) => {
    //     console.log("trials response: ", response.data);
    //   })
    //   .catch((err) => console.log(err));
    setLoading(true);
    axios
      .get(
        "https://cctclient.com/api/trials?type=open&with[]=specializations&withCount=applications&token=" +
          // "http://localhost:8000/api/trials?type=open&with[]=specializations&withCount=applications&token=" +
          user.token
      )
      .then((response) => {
        setTrials(response.data);
        setLoading(false);
      });
  };

  const getTrial = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://cctclient.com/api/trial/view/" + id + "?token=" + user.token
          // "http://localhost:8000/api/trial/view/" + id + "?token=" + user.token
        )
        .then((response) => {
          console.log("response: ", response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  const payload = useMemo(() => ({ trials, loading, getTrial }), [trials]);
  return (
    <TrialsContext.Provider value={payload}>{children}</TrialsContext.Provider>
  );
};

export const useTrialsContext = () => useContext(TrialsContext);
