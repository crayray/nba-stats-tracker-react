import React from "react";
import { Card, Image, Button } from "semantic-ui-react";


export default class SpecificTeam extends React.Component {
  render() {
    return (
      <Card>
        {/* <Card.Content> */}
        <Button size= "small" align="center"basic color='green' onClick={() => this.props.addFav(this.props.team.teamId)}>
            Add to Favorites
          </Button>
          <Card.Content>{this.props.team.fullName} <Image  float="right" size="mini" src={this.props.team.logo} />
          </Card.Content>
          <Card.Content textAlign="center" >
          <h4>City:</h4><p>{this.props.team.city}</p>
          <h4>Conference:</h4><p> {this.props.team.leagues.standard.confName}</p>
          <h4>Division:</h4><p> {this.props.team.leagues.standard.divName}</p>
          </Card.Content>
          <Card.Content>
          <h4>Players:</h4>
            {this.props.players.map(player => (
              <Button  fluid color="teal" className="player" key={player.playerId} onClick={() => this.props.seePlayer(player)}>
                {player.firstName} {player.lastName}
              </Button>
            ))}
          
        </Card.Content>
      </Card>
    );
  }
}
