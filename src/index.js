import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//
import Router from './router/index.jsx'

// react-redux
import { Provider } from 'react-redux'
import store from './store'

// 配置文件
import registerServiceWorker from './registerServiceWorker';
import './assets/css/common.less'
import './assets/css/font.css'

// ant-design
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

const configureStore = store()

ReactDOM.render(
  <Provider store={configureStore}>
    <Router/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
