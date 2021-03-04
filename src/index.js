import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from "./mocks/offers";
import {comments} from "./mocks/comments";
import {city} from "./mocks/city";


ReactDOM.render(
    <App offers={offers} city={city} comments={comments}/>,
    document.querySelector(`#root`),
);
