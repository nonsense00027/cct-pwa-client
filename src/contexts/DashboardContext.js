import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useAuthContext } from "../shared/contexts/AuthContext";
import axios from "axios";

const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/dashboard/stats?date=all&doctor=all&token=` +
          user.token
      )
      .then((response) => {
        setStats(response.data);
      });
  };

  const payload = useMemo(() => ({ stats }), [stats]);
  return (
    <DashboardContext.Provider value={payload}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
