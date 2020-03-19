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
import ItemData from "../data/itemData";

class Champion extends React.Component {
  state = {
    champions: [],
    loaded: false
  };

  componentDidMount() {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/${this.props.id}.json`
      )
      .then(res => {
        var champions = res.data.data;
        this.setState({ champions });
        console.log(this.state.champions);

        const { id } = this.props.match.params;

        const champInfo = {
          name: champions[id].id,
          title: champions[id].title,
          lore: champions[id].lore,
          passiveName: champions[id].passive.name,
          passiveDesc: champions[id].passive.description,
          passiveImg: champions[id].passive.image.full,
          qName: champions[id].spells[0].name,
          qDesc: champions[id].spells[0].description,
          qImg: champions[id].spells[0].image.full,
          wName: champions[id].spells[1].name,
          wDesc: champions[id].spells[1].description,
          wImg: champions[id].spells[1].image.full,
          eName: champions[id].spells[2].name,
          eDesc: champions[id].spells[2].description,
          eImg: champions[id].spells[2].image.full,
          rName: champions[id].spells[3].name,
          rDesc: champions[id].spells[3].description,
          rImg: champions[id].spells[3].image.full,
          item1: champions[id].recommended[0].blocks[1].items[0].id,
          item2: champions[id].recommended[0].blocks[1].items[1].id,
          item3: champions[id].recommended[0].blocks[2].items[0].id,
          stat1: champions[id].info.attack,
          stat2: champions[id].info.defense,
          stat3: champions[id].info.magic,
          stat4: champions[id].info.difficulty
        };

        this.setState({
          champInfo: champInfo
        });
      })
      .then(() => this.setState({ itemData: ItemData }))
      .then(() => this.setState({ loaded: true }));
  }

  render() {
    return this.state.loaded ? (
      <div>
        {console.log(this.state.itemData[1055].name)}

        <Grid>
          <Grid.Row>
            <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="2">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${this.state.champInfo.name}.png`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.name}</Card.Header>
                  <Card.Meta>{this.state.champInfo.title}</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="4" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Card.Header>Lore:</Card.Header>
                </Card.Content>

                <Card.Content extra>{this.state.champInfo.lore}</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="3" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Header as="h3">Recommended Items: </Header>
                </Card.Content>
                <Card.Content extra>
                  <Image
                    spaced="right"
                    src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item1}.png`}
                    wrapped
                  />

                  <Image
                    spaced="right"
                    src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item2}.png`}
                    wrapped
                  />
                  <Image
                    spaced="right"
                    src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item3}.png`}
                    wrapped
                  />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="3" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Card.Header>Attack:</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.stat1}</Card.Content>

                <Card.Content>
                  <Card.Header>Defense:</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.stat2}</Card.Content>
                <Card.Content>
                  <Card.Header>Magic:</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.stat3}</Card.Content>
                <Card.Content>
                  <Card.Header>Difficulty:</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.stat4}</Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column width="1">
            <ul>
              <Header as="h3">Abilities: </Header>
            </ul>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="2">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/passive/${this.state.champInfo.passiveImg}`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.passiveName}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  {this.state.champInfo.passiveDesc}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="2" textAlign="left">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.qImg}`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.qName}</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.qDesc}</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="2">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.wImg}`}
                  wrapped
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.wName}</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.wDesc}</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="2">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.eImg}`}
                  wrapped
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.eName}</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.eDesc}</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="2">
              <Card>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.rImg}`}
                  wrapped
                />
                <Card.Content>
                  <Card.Header>{this.state.champInfo.rName}</Card.Header>
                </Card.Content>
                <Card.Content extra>{this.state.champInfo.rDesc}</Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    ) : (
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    );
  }
}

export default Champion;
