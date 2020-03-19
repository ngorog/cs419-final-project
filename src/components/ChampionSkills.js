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
    <Grid.Column width="3">
      <Card>
        <Card.Content textAlign="center">
          <Image src={props.skillImg} wrapped ui={false} />
        </Card.Content>
        <Card.Content>
          <Card.Header>{props.skillName}</Card.Header>
          <Card.Description>{props.skillDesc}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ChampionItems;
