import React from "react";
import { Grid, Loader, Dimmer, Header, Image, Card } from "semantic-ui-react";
import axios from "axios";
import ChampionCard from "./ChampionCard";

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
			.then(() => this.setState({ loaded: true }));
		// this.getTime();
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
				console.log("Name: ", i, this.state.championList[i]);
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
		var fullDate = day + "\n" + time;
		this.setState({ time: fullDate });
	}

	render() {
		return this.state.loaded ? (
			<Grid.Row>
				{console.log(this.props.matchData.participantIdentities)}
				{console.log(this.props.userName)}
				{console.log(this.props.matchData)}
				{console.log(this.props.matchData.participants[7].championId)}
				{console.log(this.state.championList)}
				{console.log(this.state.time)}
				{console.log(this.state.playedChamp)}
				{console.log(this.state.stats)}
				<Grid.Column textAlign='center'>
					{this.props.matchData.gameMode}
					<br />
					{this.state.time}
					<br />
					<hr />
					{this.state.stats.win ? "Victory" : "Defeat"}
				</Grid.Column>
				<Grid.Column textAlign='center'>
					<Image
						src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${this.state.playedChamp}.png`}
						wrapped
						circular
						ui={false}
					/>
					<p>{this.state.playedChamp}</p>
				</Grid.Column>
				<Grid.Column textAlign='center'>
					{this.state.stats.kills}
					{" / "}
					{this.state.stats.deaths}
					{" / "}
					{this.state.stats.assists}
					<br />
					KDA
				</Grid.Column>
				<Grid.Column textAlign='center'>
					<Grid.Column>
						<Grid.Row>
							{this.state.stats.item0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item0}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}{" "}
							{this.state.stats.item1 !== 0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item1}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}{" "}
							{this.state.stats.item2 !== 0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item2}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}
						</Grid.Row>

						<Grid.Row>
							{this.state.stats.item3 !== 0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item3}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}{" "}
							{this.state.stats.item4 !== 0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item4}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}{" "}
							{this.state.stats.item5 !== 0 ? (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item5}.png`}
									wrapped
									ui={false}
								/>
							) : (
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
									wrapped
									hidden
									ui={false}
								/>
							)}
						</Grid.Row>
					</Grid.Column>
					<Grid.Column>
						{this.state.stats.item6 !== 0 ? (
							<Image
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item6}.png`}
								wrapped
								ui={false}
							/>
						) : (
							<Image
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1001.png`}
								wrapped
								hidden
								ui={false}
							/>
						)}
					</Grid.Column>
				</Grid.Column>
			</Grid.Row>
		) : (
			<Dimmer active>
				<Loader />
			</Dimmer>
		);
	}
}

export default MatchHistory;
