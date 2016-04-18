import React from 'react';
import PhotoUpload from './formComponents/PhotoUpload.jsx';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardHeader from 'material-ui/lib/card/card-header'
import CardActions from 'material-ui/lib/card/card-actions';

class CreatePartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      location: '',
      time: '',
      cost: '',
      date: '',
      description: '',
      guestlist: [],
      url: '/event',
      inviteList: [],
      image: null,
      imagePreview: null,
    };
  }

  onChange(source, e) {
    const state = Object.assign({}, this.state);
    state[source] = e.target.value;
    this.setState(state);
    console.log(this.state);
  }

  handleCalendar(e, date) {
    let cleanDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    this.setState({
      date: cleanDate,
    });
  }

  handleClock(err, date) {
    var cleanDate = date.toLocaleTimeString('en-US');
    this.setState({
      time: cleanDate,
    });
  }

  handleFormSubmit(event, formInput) {
    event.preventDefault();
    console.log(formInput);
    this.props.optimisticStateUpdate(formInput);
    this.props.postToServer(formInput.url, formInput, function(data) {});
  }


  addPicture(picture, callback) {

    console.log('picture', picture);
    var file = picture;
    var reader = new FileReader();
    reader.onloadend = (event) => {
      this.setState({
        image: reader.result,
        imagePreview: file.preview,
      });
    }

    reader.readAsDataURL(file);

  }

  invitePerson(person) {
    const invited = this.state.inviteList;
    invited.push(person);
    this.setState({ inviteList: invited });
  }

  render() {

    return (
      <Card className='Card'>
      <CardHeader       
        title="Host A Party"
        actAsExpander={true}
        showExpandableButton={true}/>
        
        <CardMedia className="col-md-12" expandable={true}>
        <div className="row">
          <div className="col-md-6">
              <form>
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
                  <DatePicker
                    floatingLabelText="Date"
                    autoOk={true}
                    onChange={this.handleCalendar.bind(this)}
                  />
                </div>
                <div className="row">
                  <TimePicker
                    className="col-md-6"
                    id="time"
                    onChange={this.handleClock.bind(this)}
                    floatingLabelText= 'Time'
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
          </div>
          <div className="col-md-4 col-md-offset-2">
            <CardActions>
              <PhotoUpload picture={this.state.imagePreview}
                addPicture={this.addPicture.bind(this)}
              />
              <RaisedButton
                label="Create Dinner Party"
                onClick={(event) => this.handleFormSubmit(event, this.state)}
              />
            </CardActions>
          </div>
        </div>
        </CardMedia>
      </Card>
    );
  }
}

export default CreatePartyForm;
