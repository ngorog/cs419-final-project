import React from "react";
import Rank from "./Rank.js";
import { Grid, Loader, Dimmer, Header, Image, Card } from "semantic-ui-react";
import UserInfo from "./userInfo";
import RankData from "./rankData";

class User extends React.Component {
	state = { matchData: [], loaded: false };

	doCORSRequest = (options, setResult) => {
		var cors_api_url = "https://cors-anywhere.herokuapp.com/";
		var x = new XMLHttpRequest();
		return new Promise((resolve, reject) => {
			x.onload = x.onerror = () => {
				if (typeof setResult === "function") {
					setResult(JSON.parse(x.responseText));
				}
				this.setState({ status: x.status });
				resolve(x);
				return;
			};
			this.setState({ status: x.status });
			x.open(options.method, cors_api_url + options.url);
			x.send();
		});
	};

	setUserInfo = result => {
		this.setState({ userInfo: result });
	};

	setRankData = result => {
		this.setState({ rankData: result[0] });
	};

	setMatchHistoryData = result => {
		this.setState({ matchHistoryData: result });
	};

	setMatchData = result => {
		this.setState({
			matchData: this.state.matchData.concat(result)
		});
		this.setState({ loaded: true });
	};

	componentDidMount() {
		let api_key = "RGAPI-c8cc45c3-3e41-49b0-b1f4-91e097b9d035";
		let username = this.props.match.params.user;

		this.doCORSRequest(
			{
				method: "GET",
				url: `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`
			},
			this.setUserInfo
		)
			.then(() => {
				if (this.state.status === 404) {
					this.setState({ loaded: true });
					return Promise.reject("User does not exist");
				} else {
					this.doCORSRequest(
						{
							method: "GET",
							url: `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.userInfo.id}?api_key=${api_key}`
						},
						this.setRankData
					);
				}
			})
			.then(() =>
				this.doCORSRequest(
					{
						method: "GET",
						url: `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.state.userInfo.accountId}?api_key=${api_key}`
					},
					this.setMatchHistoryData
				)
			)
			.then(() => {
				var i;
				for (i = 0; i < 1; i++) {
					this.doCORSRequest(
						{
							method: "GET",
							url: `https://na1.api.riotgames.com/lol/match/v4/matches/${this.state.matchHistoryData.matches[i].gameId}?api_key=${api_key}`
						},
						this.setMatchData
					);
				}
			});
	}

	parseRank = rank => {
		let newRank = rank.toLowerCase();
		newRank = newRank[0].toUpperCase() + newRank.slice(1);
		return newRank;
	};

	render() {
		return this.state.loaded ? (
			<div>
				{this.state.status === 200 ? (
					<Grid centered>
						<Grid.Column width='12'>
							<Card>
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/${this.state.userInfo.profileIconId}.png`}
									wrapped
									ui={false}
								/>
								<Card.Content>
									<Card.Header>{this.state.userInfo.name}</Card.Header>
									<Card.Meta>
										<span className='date'>
											Level {this.state.userInfo.summonerLevel}
										</span>
									</Card.Meta>
								</Card.Content>
								<Card.Content extra>
									<Rank rankData={this.state.rankData} />
								</Card.Content>
							</Card>
						</Grid.Column>
					</Grid>
				) : (
					<Grid centered>
						<Header as='h1' textAlign='center'>
							Username not found. Try again.
						</Header>
					</Grid>
				)}
			</div>
		) : (
			<Dimmer active>
				<Loader />
			</Dimmer>
		);
	}
}

export default User;
