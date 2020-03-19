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

function ChampionArt(props) {
  return (
    <Grid.Column width="2">
      <Card>
        <Image src={props.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.title}</Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ChampionArt;
