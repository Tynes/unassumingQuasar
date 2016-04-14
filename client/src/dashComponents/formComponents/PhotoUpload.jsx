import React from 'react';
import Dropzone from 'react-dropzone';

import Snackbar from 'material-ui/lib/snackbar';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onDrop(file) {
    this.props.addPicture(file[0]);
    console.log('Drop successful', file);
    this.showSnackbar();
  }

  // a Snackbar is a small popup from the bottom of the screen
  // see http://www.material-ui.com/#/components/snackbar
  showSnackbar() {
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
        <Dropzone multiple={false} onDrop={this.onDrop.bind(this)}>
          <div>Click or drag a photo here to add it to your event!</div>
        </Dropzone>
        <Snackbar
          open={this.state.open}
          message="Photo added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    );
  }
}

export default PhotoUpload;
