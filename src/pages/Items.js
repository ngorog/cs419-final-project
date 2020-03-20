import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Header, Card, Grid, Loader, Dimmer } from "semantic-ui-react";
import axios from "axios";
import ItemCard from "../components/ItemCard";

class ItemsPage extends React.Component {
  state = { items: [], loaded: false };

  componentDidMount() {
    axios
      .get(`http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/item.json`)
      .then(res => {
        const items = res.data.data;
        this.setState({ items });
        this.setState({ loaded: true });
        console.log(this.state.items);
      });
  }

  //Array to text
  parseTags(arr) {
    let tags = "";
    arr.forEach(function(item, index) {
      tags += item;
      tags += "/";
    });
    return tags.substring(0, tags.length - 1);
  }

  //Some descriptions start lowercase, make uppercase
  parseDesc(desc) {
    let newDesc = desc.substring(1, desc.length);
    return "T" + newDesc;
  }

  render() {
    return this.state.loaded ? (
      <div>
        <Grid centered>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="14">
            <Card.Group>
              {Object.keys(this.state.items).map((key, index) => {
                const item = this.state.items[key];
                return (
                  <ItemCard
                    img={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${key}.png`}
                    id={key}
                    name={item.name}
                    gold={item.gold.total}
                    desc={item.plaintext}
                  />
                );
              })}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    ) : (
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    );
  }
}

export default ItemsPage;
