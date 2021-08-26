import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import UsersList from "./pages/Users";
import UserDetails from "./pages/Details";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const Routes = (props) => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={UsersList} />
      <Route exact path="/user/:id" component={UserDetails} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
