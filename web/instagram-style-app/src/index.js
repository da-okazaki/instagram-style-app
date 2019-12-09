import React from 'react';
import ReactDOM from 'react-dom';
import LoginApp from './LoginApp';
import { BrowserRouter as Router } from "react-router-dom";

//import registerServiceWorker from './registerServiceWorker'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config)

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Router><ButtonApp /></Router>,rootElement);
//ReactDOM.render(<LoginApp />, document.getElementById('root'));
//ReactDOM.render(<Route><LoginApp /></Route>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
