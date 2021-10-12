import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Pages/homePage';
import ServicesPage from './Pages/servicesPage';
import UserPage from './Pages/userPage';
import Page404 from './Pages/Page404';
import Nav from './Containers/navBar';

require('./Assets/styles/homePage.css');

const Routes = () => (
  <BrowserRouter>
    <div className="d-flex fullHeight">
      <div>
        <Nav />
      </div>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Page404" component={Page404} exact />
          <Route path="/category/:category" component={ServicesPage} exact />
          <Route path="/user/:id" component={UserPage} exact />
          <Redirect to="/Page404" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
