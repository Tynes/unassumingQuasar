import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import RaisedButton from 'material-ui/lib/raised-button';

import googleLogo from '../assets/google-logo.png';

let style = {
  textAlign: 'center',
};

class LoginForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card style={style}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <CardHeader>
              <h2>Login with a Google Account</h2>
            </CardHeader>
            <CardActions>
              <RaisedButton
                className="center"
                linkButton={true}
                href="/auth/google"
                label="Login"
                icon={<img className="google-logo" src={googleLogo} />}
              />
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }

}

export default LoginForm;
