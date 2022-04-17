/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import store from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.scss';

ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
