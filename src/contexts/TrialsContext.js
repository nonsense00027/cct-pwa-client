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
  const [specializations, setSpecializations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrials();
    getSpecializations();
  }, []);
  const getTrials = () => {
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

  const getSpecializations = () => {
    axios
      .get(
        "https://cctclient.com/api/clinic/specializations/" +
          // "http://localhost:8000/api/clinic/specializations/" +
          user.data.user_clinic.clinic_id +
          "?token=" +
          user.token
      )
      .then((response) => {
        setSpecializations(response.data);
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
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getInvestigators = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://cctclient.com/api/investigators/" +
            // "http://localhost:8000/api/investigators/" +
            id +
            "?token=" +
            user.token
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const payload = useMemo(
    () => ({ trials, specializations, loading, getTrial, getInvestigators }),
    [trials, specializations]
  );
  return (
    <TrialsContext.Provider value={payload}>{children}</TrialsContext.Provider>
  );
};

export const useTrialsContext = () => useContext(TrialsContext);
