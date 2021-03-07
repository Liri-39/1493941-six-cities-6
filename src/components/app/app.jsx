import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {reviewsPropTypes} from "../../prop-types/reviews-prop-types";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = ({offers, city, comments}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers} center={city}/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route path="/offer/:id" exact render={(routeProps) => {
          return <OfferScreen offer={offers.find((item) => item.id === Number(routeProps.match.params.id))} comments={comments}/>;
        }}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.arrayOf(PropTypes.number),
  comments: PropTypes.arrayOf(reviewsPropTypes)
};

export default App;
