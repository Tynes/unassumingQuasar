import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

// TODO:
// third button login/logout, use a ternary
// operator on the session and display login or logout
// could also only display dash if logged in
let labelStyle = {
  color: 'white',
  fontSize: '20px',
};

let style = {
  paddingTop: '12px',
};

const HeaderNavigation = () => (
  <AppBar title="Dinner Party!">
      <FlatButton
        style={style}
        label="Dash"
        labelStyle={labelStyle}
        linkButton={true}
        href="#dash"
      />
      <FlatButton
        style={style}
        label="About"
        labelStyle={labelStyle}
        linkButton={true}
        href="#about"
      />
  </AppBar>
);

export default HeaderNavigation;
