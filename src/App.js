import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trials from "./pages/Trials";
import Messages from "./pages/Messages";
import Login from "./pages/Authentication/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuthContext } from "./shared/contexts/AuthContext";

function App() {
  // const [user, setUser] = useState("mc");
  // const [user, setUser] = useState(null);
  const { user } = useAuthContext();
  const [showSidebar, setShowSidebar] = useState(false);
  console.log("user: ", user);

  return (
    <div className="min-h-[100vh] w-[100%] flex flex-col grow shrink-1 basis-100 justify-between bg-[#F9F8F9]">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
      <BrowserRouter>
        {/* With User */}
        {user && (
          <Switch>
            <Route exact path="/messages">
              <Messages />
            </Route>
            <Route exact path="/trials">
              <Trials />
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
              <Login />
            </Route>
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
