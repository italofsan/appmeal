import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Meals from './pages/Meals';
import Details from './pages/Details';
import Categories from './pages/Categories';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Categories} exact />
        <Route path='/categories/listmeals' component={Meals} exact />
        <Route path='/mealName/details' component={Details} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default src;
