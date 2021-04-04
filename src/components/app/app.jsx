import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import OfferScreen from "../offer-screen/offer-screen";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN_SCREEN}>
          <MainScreen/>
        </Route>
        <Route path={AppRoute.LOGIN_SCREEN} exact component={LoginScreen} />
        <PrivateRoute exact
          path={AppRoute.FAVORITES_SCREEN}
          render={()=><FavoritesScreen/>}
        />
        <Route exact path={AppRoute.OFFER_SCREEN} component={OfferScreen}/>
        <Route path={AppRoute.NOT_FOUND} exact>
          <NotFoundScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
