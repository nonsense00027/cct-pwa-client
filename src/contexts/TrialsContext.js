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
        `${process.env.REACT_APP_BACKEND_URL}/api/trials?type=open&with[]=specializations&withCount=applications&token=` +
          user.token
      )
      .then((response) => {
        setTrials(response.data);
        setLoading(false);
      });
  };

  const filterTrials = (q, spec, sort, view) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/trials?q=` +
            q +
            "&spec=" +
            spec +
            "&sort=" +
            sort +
            "&type=open&with[]=specializations&withCount=applications&view=" +
            view +
            "&token=" +
            user.token
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => reject(err));
    });
  };

  const getSpecializations = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/clinic/specializations/` +
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
          `${process.env.REACT_APP_BACKEND_URL}/api/trial/view/` +
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

  const getInvestigators = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/investigators/` +
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

  const getReminders = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/trial-reminders/trial/` +
            id +
            "?token=" +
            user.token
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });
  };

  const getReferrals = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/referrals?trial=` +
            id +
            "?token=" +
            user.token
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });
  };

  const getApplications = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/applications/trial/` +
            id +
            "?filter=mine&token=" +
            user.token
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });
  };

  const payload = useMemo(
    () => ({
      trials,
      specializations,
      loading,
      getTrial,
      filterTrials,
      getInvestigators,
      getReminders,
      getReferrals,
      getApplications,
    }),
    [trials, specializations]
  );
  return (
    <TrialsContext.Provider value={payload}>{children}</TrialsContext.Provider>
  );
};

export const useTrialsContext = () => useContext(TrialsContext);
