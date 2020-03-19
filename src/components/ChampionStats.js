import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import {
  Header,
  Card,
  Grid,
  Loader,
  Dimmer,
  Container,
  Divider,
  Image,
  GridColumn
} from "semantic-ui-react";

function ChampionItems(props) {
  return (
    <Grid.Column width="3" verticalAlign="middle">
      <Card>
        <Card.Content>
          <Card.Header>Attack:</Card.Header>
          <Card.Description>{props.stat1}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Header>Defense:</Card.Header>
          <Card.Description>{props.stat2}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Header>Magic:</Card.Header>
          <Card.Description extra>{props.stat3}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Header>Difficulty:</Card.Header>
          <Card.Description>{props.stat4}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ChampionItems;
