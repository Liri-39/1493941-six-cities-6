import React from 'react';
import {Link} from "react-router-dom";

const LoadingScreen = () => {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Loading ...</b>
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </div>
  );
};

export default LoadingScreen;
