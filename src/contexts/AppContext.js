import React, { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const payload = useMemo(
    () => ({ showSidebar, openSidebar, closeSidebar }),
    [showSidebar]
  );
  return <AppContext.Provider value={payload}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
