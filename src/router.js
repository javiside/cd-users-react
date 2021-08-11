import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/user/:id" component={UserDetails} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
