import React from 'react';
import ajaxPost from '../utils/ajaxPost.jsx';
// import get from '../utils/get.js';
import InviteFriendForm from './InviteFriendForm.jsx';
import PhotoUpload from './formComponents/PhotoUpload.jsx';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

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
      picture: null,
    };
  }

  handleFormSubmit(event, formInput) {
    event.preventDefault();
    let url = formInput.url;
    let context = this;

    ajaxPost(url, function(data, context) {
      this.state = { stateAtribute: data };
      this.setState({ stateAtribute: data });
    }, context, formInput);
    console.log(this.state).bind(this);
  }

  addPicture(picture, callback) {
    this.setState({
      picture: picture,
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
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(event, this.state)}>
          <TextField
            id="eventName"
            type="text"
            placeholder="Event Name"
            floatingLabelText={this.state.eventName}
            onChange={this.onChange.bind(this, 'eventName')}
          />
          <TextField
            id="location"
            type="text"
            placeholder="Location"
            floatingLabelText={this.state.location}
            onChange={this.onChange.bind(this, 'location')}
          />
          <TextField
            id="date"
            type="text"
            floatingLabelText="Date"
            onChange={this.onChange.bind(this, 'text')}
          />
          <TextField
            id="time"
            type="text"
            placeholder="Time"
            floatingLabelText={this.state.time}
            onChange={this.onChange.bind(this, 'time')}
          />
          <TextField
            id="cost"
            type="text"
            placeholder="Cost"
            floatingLabelText={this.state.cost}
            onChange={this.onChange.bind(this, 'cost')}
          />
          <TextField
            id="description"
            type="textarea"
            label="Describe the party!"
            placeholder="Description"
            floatingLabelText={this.state.description}
            onChange={this.onChange.bind(this, 'description')}
          />
          <PhotoUpload
            addPicture={this.addPicture.bind(this)}
          />
          <RaisedButton
            type="submit"
            label="Create Dinner Party"
          />
        </form>
      </div>
    );
  }
}

export default CreatePartyForm;
