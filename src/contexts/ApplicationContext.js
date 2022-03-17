import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import axios from "axios";
import { useAuthContext } from "../shared/contexts/AuthContext";

const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications();
  }, []);

  const getApplications = () => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/applications?filter=my&token=` +
          user.token
      )
      .then((response) => {
        setApplications(response.data);
        setLoading(false);
      });
  };

  // const getTrial = (id) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(
  //         // "https://cctclient.com/api/trial/view/" + id + "?token=" + user.token
  //         "http://localhost:8000/api/trial/view/" + id + "?token=" + user.token
  //       )
  //       .then((response) => {
  //         console.log("response: ", response);
  //         resolve(response);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };
  const payload = useMemo(() => ({ applications, loading }), [applications]);
  return (
    <ApplicationContext.Provider value={payload}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
