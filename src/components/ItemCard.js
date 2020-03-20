import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

function ItemCard(props) {
  return (
    <Card>
      <Card.Content textAlign="center">
        <Image src={props.img} wrapped ui={false} />
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">Cost: {props.gold} gold</span>
        </Card.Meta>
        <Card.Description>{props.desc}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ItemCard;
