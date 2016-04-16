import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';
import CardMedia from 'material-ui/lib/card/card-media';


class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      PartyDetailsData: [],
    };
  }

  componentWillMount() {
    this.loadCommentsFromServer('http://localhost:3000/eventlist', (data) => { this.setState({ PartyDetailsData: data }); });
  }

  componentDidMount() {
    console.log('dataaa', this.state);
  }
  loadCommentsFromServer(url, stateKey) {
    console.log('ajax');

    $.ajax ({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: stateKey,
      error: (data) => { console.log('no dinner party for you!', data); },
    });
  }

  render() {
  {console.log('so stately', this.state.PartyDetailsData);}

    return (
      <div>
        {this.state.PartyDetailsData.map((party) => (
          <Card>
            <div className="row">
              <CardMedia>
                <p>picture coming in</p>
              </CardMedia>
            </div>
            <div className="row">
              <h2 className="col-md-12">Upcoming Parties</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <CardText>
                  <p className="large-text">Location: {party.location}</p>
                  <p className="large-text">Time: {party.time}</p>
                  <p className="large-text">Cost: {party.cost}</p>
                  <p className="large-text">Description: {party.description}</p>
                </CardText>
              </div>
              <div className="col-md-6">
                <CardActions>
                  <AutoCompleteGuests />
                  <FlatButton label="Invite people!" backgroundColor="green" />
                </CardActions>
                <List>
                  {party.guestlist.map(guest => (
                    <ListItem primaryText={guest.name} />
                  ))}
                </List>
              </div>
            </div>
          </Card>
        ))};
      </div>
    );
  }
}

export default PartyDetailsTable;
