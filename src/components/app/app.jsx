import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers}/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route path="/offer/:id" exact render={(routeProps) => {
          const offerId = Number(routeProps.match.params.id);
          return <OfferScreen offer={offers.find((item) => item.id === offerId)}/>;
        }}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default App;
