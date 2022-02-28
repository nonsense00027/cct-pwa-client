import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trials from "./pages/Trials";
import Messages from "./pages/Messages";
import Login from "./pages/Authentication/Login";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [user, setUser] = useState("mc");
  // const [user, setUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-[100vh] w-[100%] flex flex-col grow-1 shrink-1 basis-100 justify-between bg-[#F9F8F9]">
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
        <BrowserRouter>
          {/* With User */}
          {user && (
            <Switch>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/trials">
                <Trials />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
              <Route path="*">
                <div>
                  <h1>404 not found</h1>
                </div>
              </Route>
            </Switch>
          )}
          {/* No User */}
          {!user && (
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="*">
                <div>
                  <h1>404 not found</h1>
                </div>
              </Route>
            </Switch>
          )}
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
