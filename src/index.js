import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {offers} from "./mocks/offers";
import {comments} from "./mocks/comments";
import {CityList} from "./mocks/const";
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} cityList={CityList} comments={comments}/>,
    </Provider>,
    document.querySelector(`#root`)
);
