import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import App from './App';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactRedux = ReactRedux;
global.Redux = Redux;

ReactDOM.render(<App />, document.querySelector('.app'));
