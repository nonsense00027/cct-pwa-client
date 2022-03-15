import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trials from "./pages/Trials";
import Messages from "./pages/Messages";
import Login from "./pages/Authentication/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuthContext } from "./shared/contexts/AuthContext";
import Notifications from "./pages/Notifications";
import Records from "./pages/Records";
import Applications from "./pages/Applications";
import { TrialsContextProvider } from "./contexts/TrialsContext";
import CreateTrials from "./pages/CreateTrials";
import Subscription from "./pages/Subscription";
import Trial from "./pages/Trials/Trial";

function App() {
  // const [user, setUser] = useState("mc");
  // const [user, setUser] = useState("hello");
  const { user } = useAuthContext();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* With User */}
        {user && (
          <Switch>
            <Route exact path="/financial">
              <Records />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/subscription">
              <Subscription />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
            <Route exact path="/applications">
              <Applications />
            </Route>
            <Route exact path="/trials/:id">
              <TrialsContextProvider>
                <Trial />
              </TrialsContextProvider>
            </Route>
            <Route exact path="/trials">
              <TrialsContextProvider>
                <Trials />
              </TrialsContextProvider>
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            {/* <Route path="*">
              <div>
                <h1>404 not found</h1>
              </div>
            </Route> */}
          </Switch>
        )}
        {/* No User */}
        {!user && (
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              {/* <Login /> */}
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
