import React from 'react';
import ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import App from './App';

global.React = React;
global.ReactDom = ReactDom;
global.ReactRedux = ReactRedux;
global.Redux = Redux;

ReactDom.render(<App />, document.querySelector('.app'));
