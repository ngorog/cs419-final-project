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
          <Header as="h3">Recommended Items: </Header>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Image spaced="right" src={props.item1} wrapped />
          <Image spaced="right" src={props.item2} wrapped />
          <Image spaced="right" src={props.item3} wrapped />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ChampionItems;
