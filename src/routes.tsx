import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MealsList from './pages/MealsList';
import Login from './pages/Login';
import Details from './pages/Details';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/categories/:name' component={MealsList} exact />
        <Route path='/categories/:name/:id' component={Details} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default src;
