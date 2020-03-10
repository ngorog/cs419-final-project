import React from "react";
import { Grid, Loader, Dimmer, Header, Image, Card } from "semantic-ui-react";
import axios from "axios";
import ChampionCard from "./ChampionCard";

class MostPlayed extends React.Component {
	state = { championList: [] };

	setUserInfo = result => {
		this.setState({ userInfo: result });
	};

	componentDidMount() {
		let i = 0;
		for (i = 0; i < 3; i++) {
			this.getChampionName(this.props.mostPlayed[i].championId, i);
		}
	}

	getChampionName = (id, idx) => {
		axios
			.get(
				"http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion.json"
			)
			.then(res => {
				let list = res.data.data;
				let obj = {
					name: "",
					points: this.props.mostPlayed[idx].championPoints
				};

				for (var i in list) {
					if (list[i].key == id) {
						obj.name = list[i].id;
					}
				}
				this.setState({
					championList: this.state.championList.concat(obj)
				});
				this.setState({ loaded: true });
			});
	};

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
		return (
			<Grid.Row>
				<Grid.Column width='16'>
					<Header as='h1' textAlign='center'>
						Most Played Champions
					</Header>
					<Card.Group verticalAlign='middle' centered>
						{Object.keys(this.state.championList).map((key, index) => {
							const champion = this.state.championList[key];
							return (
								<ChampionCard
									img={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`}
									name={champion.name}
									desc={"Mastery Points: " + champion.points}
								/>
							);
						})}
					</Card.Group>
				</Grid.Column>
			</Grid.Row>
		);
	}
}

export default MostPlayed;
