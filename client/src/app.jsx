import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dash from './views/dash.jsx';
import login from './views/login.jsx';
import About from './views/about.jsx';

import HeaderNavigation from './shared/HeaderNavigation.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './assets/styles.css';
import 'flexboxgrid/dist/flexboxgrid.css';
// see this on adding inline css - https://github.com/gajus/react-css-modules


const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/dash" component={Dash} />
      <Route path="/about" component={About} />
      <Route path="/login" component={login} />
      <Redirect from="/" to="/login" />
    </Router>
  );
};


ReactDOM.render(<div>
                  <HeaderNavigation />
                  <App />
                </div>,
  document.getElementById('app'));
