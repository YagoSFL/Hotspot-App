import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import App from './main/App';
import rootReducer from './main/reducers';

const store = applyMiddleware(thunk)(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));
