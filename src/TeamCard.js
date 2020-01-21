import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function TeamCard({ team }) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="left" size="small" src={team.logo} />
          <h3><Card.Header floated="right" className='ui header'>{team.fullName}</Card.Header></h3>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
