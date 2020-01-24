import React from "react";
import { Card, Image } from "semantic-ui-react";

export default class SpecificTeam extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <button>Add to Favorites</button>
          <Image floated="left" size="small" src={this.props.team.logo} />
          <h1>{this.props.team.fullName}</h1>
          <h2>City: {this.props.team.city}</h2>
          <h3>Conference: {this.props.team.leagues.standard.confName}</h3>
          <h3>Division: {this.props.team.leagues.standard.divName}</h3>
          <h4>Players:</h4>
            {this.props.players.map(player => (
              <div key={player.playerId} onClick={() => this.props.seePlayer(player)}>
                {player.firstName} {player.lastName}
              </div>
            ))}
          
        </Card.Content>
      </Card>
    );
  }
}
