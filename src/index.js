import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

/*
const OFFERS_COUNT = 5;

ReactDOM.render(
    <App offersCount={OFFERS_COUNT} />,
    document.querySelector(`#root`),
);
*/

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    ReactDOM.render(
        <App
          offers = {response}
        />,
        document.querySelector(`#root`)
    );
  });
