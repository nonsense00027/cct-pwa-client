import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const TrialsContext = createContext();

export const TrialsContextProvider = ({ children }) => {
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL)
      .then((result) => setTrials(result.data))
      .catch((err) => console.log(err));
  }, []);

  const payload = useMemo(() => ({ trials }), [trials]);
  return (
    <TrialsContext.Provider value={payload}>{children}</TrialsContext.Provider>
  );
};

export const useTrialsContext = () => useContext(TrialsContext);
