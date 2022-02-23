import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Clinic from "../clinic/clinic";


const Routing = () => {
    return (
      <Switch>
        <Route path="/clinic">
          <Clinic/>
        </Route>


        <Route path="/">
          <Dashboard/>
        </Route>
      </Switch>
    )
}


export default Routing;
