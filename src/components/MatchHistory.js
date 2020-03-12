import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Loader,
	Dimmer,
	Header,
	Image,
	Divider
} from "semantic-ui-react";
import axios from "axios";
import ItemBar from "./ItemBar";
import "./MatchHistory.css";

class MatchHistory extends React.Component {
	state = { championList: [], loaded: false };

	componentDidMount() {
		this.getChampionName()
			.then(res => {
				this.setState({
					championList: res
				});
			})
			.then(() => this.getUserData())
			.then(() => this.getTime())
			.then(() => this.setState({ loaded: true }));
	}

	getChampionName = async () => {
		let promises = [];
		Object.entries(this.props.matchData.participants).map(function(
			participant,
			idx
		) {
			promises.push(
				axios
					.get(
						"http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion.json"
					)
					.then(res => {
						let list = res.data.data;
						let name = "";
						let num = participant[1].championId;
						for (var i in list) {
							if (list[i].key == num) {
								name = list[i].id;
								return name;
							}
						}
					})
			);
		});
		return Promise.all(promises);
	};

	getUserData() {
		let i = 0;
		for (i = 0; i < 10; i++) {
			if (
				this.props.matchData.participantIdentities[i].player.summonerName ===
				this.props.userName
			) {
				// console.log("Name: ", i, this.state.championList[i]);
				this.setState({ playedChamp: this.state.championList[i] });
				this.setState({ stats: this.props.matchData.participants[i].stats });
			}
		}
	}

	getTime() {
		var date = new Date(this.props.matchData.gameCreation);
		var day = date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		var time = date.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit"
		});
		this.setState({ day: day, time: time });
	}

	getTeams() {
		let arr = [];

		this.state.championList.map((champ, index) => {
			arr.push(
				<Grid.Row>
					<Grid.Column textAlign='center' width='3'>
						<Image
							src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${champ}.png`}
							circular
							centered
							verticalAlign='middle'
							size='mini'
							as={Link}
							to={`/champion/${champ}`}
						/>
						<br />
						<p
							as={Link}
							to={`/search/${this.props.matchData.participantIdentities[index].player.summonerName}`}
						>
							{
								this.props.matchData.participantIdentities[index].player
									.summonerName
							}
						</p>
					</Grid.Column>

					<Grid.Column textAlign='center' width='3'>
						<Header as='h4'>
							{this.props.matchData.participants[index].stats.kills}
							{" / "}
							<span id='deaths'>
								{this.props.matchData.participants[index].stats.deaths}
							</span>
							{" / "}
							{this.props.matchData.participants[index].stats.assists}
						</Header>
						KDA
					</Grid.Column>

					<Grid.Column width={1} />

					<ItemBar
						stats={this.props.matchData.participants[index].stats}
						size='mini'
					/>
				</Grid.Row>
			);
		});
		let team1 = arr.slice(0, 5);
		let team2 = arr.slice(5);
		const jsx = (
			<Fragment>
				<Grid.Column width={8}>
					<Grid>{team1}</Grid>
				</Grid.Column>
				<Grid.Column width={8}>
					<Grid>{team2}</Grid>
				</Grid.Column>
			</Fragment>
		);
		return jsx;
	}

	render() {
		return this.state.loaded ? (
			<Grid id='single-match' centered divided='vertically'>
				<Grid.Row
					id={this.state.stats.win ? "win-game" : "lose-game"}
					centered
					verticalAlign='middle'
				>
					<Grid.Column id='user-item' width={1} />
					<Grid.Column id='user-item' textAlign='center' width={2}>
						{this.props.matchData.gameMode}
						<br />
						<br />
						{this.state.day}
						<br />
						{this.state.time}
						<br />
						<Divider id='divider' section />
						<span id={this.state.stats.win ? "win-text" : "lose-text"}>
							{this.state.stats.win ? "Victory" : "Defeat"}
						</span>
					</Grid.Column>

					<Grid.Column id='user-item' textAlign='center' width={3}>
						<Image
							src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${this.state.playedChamp}.png`}
							circular
							centered
							as={Link}
							to={`/champion/${this.state.playedChamp}`}
						/>
						<p>{this.state.playedChamp}</p>
					</Grid.Column>

					<Grid.Column id='user-item' textAlign='center' width={2}>
						<Header as='h3'>
							{this.state.stats.kills}
							{" / "}
							<span id='deaths'>{this.state.stats.deaths}</span>
							{" / "}
							{this.state.stats.assists}
						</Header>
						KDA
					</Grid.Column>

					<Grid.Column id='user-item' width={1} />
					<ItemBar stats={this.state.stats} />
				</Grid.Row>
				<Grid.Row id='score-row' centered verticalAlign='middle'>
					{this.getTeams()}
				</Grid.Row>
			</Grid>
		) : (
			<Dimmer active>
				<Loader />
			</Dimmer>
		);
	}
}

export default MatchHistory;
