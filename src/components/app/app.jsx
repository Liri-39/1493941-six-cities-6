import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <Route exact path="/favorites">
          <FavoritesScreen/>
        </Route>
        <Route exact path="/offer/:id" component={OfferScreen}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
