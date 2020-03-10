import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Header, Card, Grid, Loader, Dimmer } from "semantic-ui-react";
import axios from "axios";
import ChampionCard from "../components/ChampionCard";

class ChampionsPage extends React.Component {
	state = { champions: [], loaded: false };

	componentDidMount() {
		axios
			.get(
				`http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion.json`
			)
			.then(res => {
				const champions = res.data.data;
				this.setState({ champions });
				this.setState({ loaded: true });
				console.log(this.state.champions);
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
					<Grid.Column width='2'></Grid.Column>
					<Grid.Column width='14'>
						<Card.Group>
							{Object.keys(this.state.champions).map((key, index) => {
								const champion = this.state.champions[key];
								return (
									<ChampionCard
										img={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
										name={champion.name}
										desc={this.parseDesc(champion.title)}
										class={this.parseTags(champion.tags)}
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

export default ChampionsPage;
