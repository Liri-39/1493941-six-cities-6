import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <PrivateRoute exact
          path="/favorites"
          render={()=><FavoritesScreen/>}
        />
        <Route exact path="/offer/:id" component={OfferScreen}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
