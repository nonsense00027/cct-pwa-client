import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useAuthContext } from "../shared/contexts/AuthContext";
import axios from "axios";

const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    setLoading(true);
    axios
      .get(
        "https://cctclient.com/api/messages?token=" + user.token
        // "http://localhost:8000/api/messages?token=" + user.token
      )
      .then((response) => {
        setMessages(response.data);
        setLoading(false);
      });
  };

  const payload = useMemo(() => ({ messages, loading }), [messages]);
  return (
    <MessageContext.Provider value={payload}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
