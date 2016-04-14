import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';

class uploadSnackbar extends React.component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message="Picture added to event"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

}

export default uploadSnackbar;
