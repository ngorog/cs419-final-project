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

function ChampionLore(props) {
  return (
    <Grid.Column width="3" verticalAlign="middle">
      <Card>
        <Card.Content>
          <Card.Header>Lore:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>{props.desc}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ChampionLore;
