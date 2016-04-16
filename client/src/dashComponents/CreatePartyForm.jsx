import React from 'react';
import ajaxPost from '../utils/ajaxPost.jsx';
// import get from '../utils/get.js';
import InviteFriendForm from './InviteFriendForm.jsx';
import PhotoUpload from './formComponents/PhotoUpload.jsx';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';

import CardActions from 'material-ui/lib/card/card-actions';

class CreatePartyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      location: '',
      time: '',
      cost: '',
      date: '',
      description: '',
      inviteList: [],
      url: 'http://localhost:3000/event',
      image: null,
    };
  }

  handleFormSubmit(event, formInput) {
    event.preventDefault();
    let url = formInput.url;
    let context = this;

    ajaxPost(url, function(data, context) {
      console.log('FORM INPUT', formInput);
      this.state = { stateAtribute: data };
      this.setState({ stateAtribute: data });
    }, context, formInput);
    console.log(this.state).bind(this);
  }

  addPicture(picture, callback) {
    this.setState({
      image: picture,
    });
  }

  onChange(source, e) {
    let state = Object.assign({}, this.state);
    state[source] = e.target.value;
    console.log(state);
    this.setState(state);
  }

  invitePerson(person) {
    let invited = this.state.inviteList;
    invited.push(person);
    this.setState({ inviteList: invited });
    console.log(this.state.inviteList).bind(this);
  }

  render() {
    return (
      <Card>
        <div className="row">
          <h2 className="col-md-12">Create an Event</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <CardMedia>
              <form onSubmit={(event) => this.handleFormSubmit(event, this.state)}>
                <div className="row">
                  <TextField
                    className="col-md-6"
                    id="eventName"
                    type="text"
                    floatingLabelText= 'Event Name'
                    onChange={this.onChange.bind(this, 'eventName')}
                  />
                </div>
                <div className="row">
                  <TextField
                    className="col-md-6"
                    id="location"
                    type="text"
                    floatingLabelText= 'Location'
                    onChange={this.onChange.bind(this, 'location')}
                  />
                  <TextField
                    className="col-md-6"
                    id="date"
                    type="text"
                    floatingLabelText="Date"
                    onChange={this.onChange.bind(this, 'text')}
                  />
                </div>
                <div className="row">
                  <TextField
                    className="col-md-6"
                    id="time"
                    type="text"
                    floatingLabelText= 'Time'
                    onChange={this.onChange.bind(this, 'time')}
                  />
                  <TextField
                    className="col-md-6"
                    id="cost"
                    type="text"
                    floatingLabelText= 'Cost'
                    onChange={this.onChange.bind(this, 'cost')}
                  />
                </div>
                <div className="row">
                  <TextField
                    className="col-md-12"
                    id="description"
                    type="textarea"
                    multiLine={true}
                    rows={4}
                    floatingLabelText= 'Description'
                    onChange={this.onChange.bind(this, 'description')}
                  />
                </div>
              </form>
            </CardMedia>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <CardActions>
              <PhotoUpload
                addPicture={this.addPicture.bind(this)}
              />
              <br /> <br />
              <RaisedButton
                type="submit"
                label="Create Dinner Party"
              />
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }
}

export default CreatePartyForm;
