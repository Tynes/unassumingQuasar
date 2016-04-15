import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import dash from './views/dash.jsx';
import login from './views/login.jsx';
import about from './views/about.jsx';

import HeaderNavigation from './shared/HeaderNavigation.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import 'bootstrap/less/bootstrap.less';
// see this on adding inline css - https://github.com/gajus/react-css-modules
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/dash" component={dash} />
      <Route path="/about" component={about} />
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
