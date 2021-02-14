import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return <React.Fragment>
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Page not found.</b>
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        <p className="favorites__status-description">let&apos;s start over?</p>
      </Link>
    </div>
  </React.Fragment>;
};

export default NotFoundScreen;
