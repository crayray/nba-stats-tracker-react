import React from "react";
import { Card, Image } from "semantic-ui-react";


export default class TeamCard extends React.Component {
  render() {
    return (
    
      <Card onClick={() => this.props.seeTeam(this.props.team)}>
        <Card.Content>
          <Image floated="left" size="small" src={this.props.team.logo} />
          <h3><Card.Header floated="right" className='ui header'>{this.props.team.fullName}</Card.Header></h3>
        </Card.Content>
      </Card>
    
  );}
}
