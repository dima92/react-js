import React from 'react';
import ReactDOM from 'react-dom';
import App from './20_redux_modules/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './20_redux_modules/store';

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
