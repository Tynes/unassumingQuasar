import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';

class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div>
        {this.props.PartyDetailsData.map((party) => (
          <Card>
            <CardHeader title={party.eventName} key={party.id} />
            <CardText>
              <p>Location: {party.location}</p>
              <p>Time: {party.time}</p>
              <p>Cost: {party.cost}</p>
              <p>Description: {party.description}</p>
            </CardText>
            <CardActions>
              <AutoCompleteGuests getFromSever={this.props.getFromSever.bind(this)}
                postToServer={this.props.postToServer.bind(this)}
              />
            </CardActions>
            <List>
              {party.guestlist.map(guest => (
                <ListItem key={guest.id} primaryText={guest.name} />
              ))}
            </List>
          </Card>
        ))};
      </div>
    );
  }
}

export default PartyDetailsTable;
