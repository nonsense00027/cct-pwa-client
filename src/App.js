import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trials from "./pages/Trials";
import Messages from "./pages/Messages";
import Login from "./pages/Authentication/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <BrowserRouter>
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
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
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
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
