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
import ChampionArt from "../components/ChampionArt";
import ChampionLore from "../components/ChampionLore";
import ChampionItems from "../components/ChampionItems";
import ChampionStats from "../components/ChampionStats";
import ChampionSkills from "../components/ChampionSkills";

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
            <ChampionArt
              img={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${this.state.champInfo.name}.png`}
              name={this.state.champInfo.name}
              title={this.state.champInfo.title}
            />
            <ChampionLore desc={this.state.champInfo.lore} />
            <ChampionItems
              item1={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item1}.png`}
              item2={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item2}.png`}
              item3={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${this.state.champInfo.item3}.png`}
            />
            <ChampionStats
              stat1={this.state.champInfo.stat1}
              stat2={this.state.champInfo.stat2}
              stat3={this.state.champInfo.stat3}
              stat4={this.state.champInfo.stat4}
            />
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="2">
            <Header as="h3">Abilities: </Header>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column width="1"></Grid.Column>
            <ChampionSkills
              skillImg={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/passive/${this.state.champInfo.passiveImg}`}
              skillName={this.state.champInfo.passiveName}
              skillDesc={this.state.champInfo.passiveDesc}
            />
            <ChampionSkills
              skillImg={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.qImg}`}
              skillName={this.state.champInfo.qName}
              skillDesc={this.state.champInfo.qDesc}
            />
            <ChampionSkills
              skillImg={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.wImg}`}
              skillName={this.state.champInfo.wName}
              skillDesc={this.state.champInfo.wDesc}
            />
            <ChampionSkills
              skillImg={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.eImg}`}
              skillName={this.state.champInfo.eName}
              skillDesc={this.state.champInfo.eDesc}
            />
            <ChampionSkills
              skillImg={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${this.state.champInfo.rImg}`}
              skillName={this.state.champInfo.rName}
              skillDesc={this.state.champInfo.rDesc}
            />
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
