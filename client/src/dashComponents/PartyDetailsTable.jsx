import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import AutoCompleteGuests from './AutoCompleteGuests.jsx';
import CardMedia from 'material-ui/lib/card/card-media';


class PartyDetailsTable extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {this.props.PartyDetailsData.map((party, i) => (
          <Card>
            <CardHeader 
              title={party.eventName} 
              key={party.id} 
              actAsExpander={true}
              showExpandableButton={true} />
            <CardMedia expandable={true}>
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
            <div className="row">
                <img className='cardImage' src={party.image}></img>
            </div>
            <div className="row">
              <div className="col-md-6">
                <CardText>
                  <p className="large-text">Location: {party.location}</p>
                  <p className="large-text">Date: {party.date}</p>
                  <p className="large-text">Time: {party.time}</p>
                  <p className="large-text">Cost: {party.cost}</p>
                  <p className="large-text">Description: {party.description}</p>
                </CardText>
              </div>
              <div className="col-md-6">
                <CardActions>
                  <AutoCompleteGuests getFromSever={this.props.getFromSever.bind(this)}
                    postToServer={this.props.postToServer.bind(this)}
                    id={party.id}
                    otimisticGuestUpdate={this.props.otimisticGuestUpdate.bind(this)}
                    index={i}
                  />
                </CardActions>
                <List>
                  {party.guestlist.map((guest, i) => (
                    <ListItem key={guest.id} primaryText={guest.name} index={i}/>

                  ))}
                </List>
              </div>
            </div>
            </CardMedia>
          </Card>
        ))};
      </div>
    )
  }
}

export default PartyDetailsTable;
