import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Loader, Dimmer, Header, Image, Divider } from "semantic-ui-react";
import axios from "axios";

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
					.get("http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion.json")
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

	render() {
		return this.state.loaded ? (
			<Grid id='single-match' centered divided='vertically'>
				<Grid.Row id={this.state.stats.win ? 'win-game' : 'lose-game'} centered verticalAlign='middle'>
					<Grid.Column id='user-item' width={1} />
					<Grid.Column id='user-item' textAlign='center' width={2}>
						{this.props.matchData.gameMode}
						<br />
						<br />
						{this.state.day}
						<br />
						{this.state.time}
						<br />
						<Divider id="divider" section />
						<span id={this.state.stats.win ? 'win-text' : 'lose-text'}>{this.state.stats.win ? "Victory" : "Defeat"}</span>
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
							<span id="deaths">{this.state.stats.deaths}</span>
							{" / "}
							{this.state.stats.assists}
						</Header>
							KDA
					</Grid.Column>

					<Grid.Column id='user-item' width={1} />

					<Grid.Column id='user-item' textAlign='center' width={6}>
						{this.state.stats.item0 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item0}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item1 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item1}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item2 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item2}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item3 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item3}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item4 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item4}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item5 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item5}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}

						{this.state.stats.item6 !== 0 ? (
							<Image
								id='item-img'
								src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.state.stats.item6}.png`}
								rounded
								floated='left'
								centered
							/>
						) : (
							<Image
								id='item-img'
								src={process.env.PUBLIC_URL + '/blankitem.png'}
								floated='left'
								centered
							/>
						)}
					</Grid.Column>
				</Grid.Row>

				{this.state.championList.map((champ, index) => {
					if (index === 4) {
						var emptyRow = (
							<Grid.Row />
						);
					}
					return (
						<Fragment key={index.toString()}>
							<Grid.Row id="score-row" centered verticalAlign='middle'>
								<Grid.Column id='user-item' width={2} />
								<Grid.Column textAlign='center' width={2}>
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
									{this.props.matchData.participantIdentities[index].player.summonerName}
								</Grid.Column>

								<Grid.Column textAlign='center' width={2}>
									<Header as='h4'>
										{this.props.matchData.participants[index].stats.kills}
										{" / "}
										<span id="deaths">{this.props.matchData.participants[index].stats.deaths}</span>
										{" / "}
										{this.props.matchData.participants[index].stats.assists}
									</Header>
									KDA
								</Grid.Column>

								<Grid.Column width={1} />

								<Grid.Column textAlign='center' width={6}>
									{this.props.matchData.participants[index].stats.item0 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item0}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item1 !== 0 ? (

										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item1}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item2 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item2}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item3 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item3}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item4 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item4}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item5 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item5}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}

									{this.props.matchData.participants[index].stats.item6 !== 0 ? (
										<Image
											id='item-img'
											src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${this.props.matchData.participants[index].stats.item6}.png`}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									) : (
										<Image
											id='item-img'
											src={process.env.PUBLIC_URL + '/blankitem.png'}
											rounded
											floated='left'
											centered
											size='mini'
										/>
									)}
								</Grid.Column>
							</Grid.Row>
							{emptyRow}
						</Fragment>
					);
				})}
			</Grid>
		) : (
			<Dimmer active>
				<Loader />
			</Dimmer>
		);
	}
}

export default MatchHistory;
