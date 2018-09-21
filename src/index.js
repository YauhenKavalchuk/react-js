import React from 'react';
import ReactDOM from 'react-dom';
import App from './24_redux_todo_app/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './24_redux_todo_app/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
