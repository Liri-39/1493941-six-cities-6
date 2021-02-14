import React from 'react';
import ReactDOM from 'react-dom';
import {adaptToClient} from './utils.js';
import App from './components/app/app';

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    ReactDOM.render(
        <App
          offers = {response.map((offer) => adaptToClient(offer))}
        />,
        document.querySelector(`#root`)
    );
  });
