import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Containers/homePage';
import TripPage from './Containers/servicePage';
import UserPage from './Containers/userPage';
import Page404 from './Containers/Page404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/Page404" component={Page404} exact />
      <Route path="/trip/:id" component={TripPage} exact />
      <Route path="/user/:id" component={UserPage} exact />
      <Redirect to="/Page404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
