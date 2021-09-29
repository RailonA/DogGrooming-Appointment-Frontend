import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Containers/homePage';
import ServicesPage from './Containers/servicesPage';
import UserPage from './Containers/userPage';
import Page404 from './Containers/Page404';
import Nav from './Components/navBar';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/Page404" component={Page404} exact />
      <Route path="/category/:category" component={ServicesPage} exact />
      <Route path="/user/:id" component={UserPage} exact />
      <Redirect to="/Page404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
