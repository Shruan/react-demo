import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './router/index.jsx'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const configureStore = store()

ReactDOM.render(
  <Provider store={configureStore}>
    <Router/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
