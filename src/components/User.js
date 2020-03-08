import React from "react";
import { Link } from "react-router-dom";
import { Grid, Loader, Dimmer } from "semantic-ui-react";
import axios from "axios";
import API from "../api";

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
				this.setState({ loaded: true });
				resolve(x);
				return;
			};
			x.open(options.method, cors_api_url + options.url);
			x.send();
		});
	};

	setUserInfo = result => {
		this.setState({ userInfo: result });
	};

	setMatchHistoryData = result => {
		this.setState({ matchHistoryData: result });
	};

	setMatchData = result => {
		this.setState({
			matchData: this.state.matchData.concat(result)
		});
	};

	componentDidMount() {
		let api_key = "RGAPI-f6c4d9e9-d5e2-4151-bdca-116d9ecbd861";
		let username = this.props.match.params.user;
		this.doCORSRequest(
			{
				method: "GET",
				url: `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`
			},
			this.setUserInfo
		)
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
				for (i = 0; i < 10; i++) {
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

	render() {
		return this.state.loaded ? (
			<div>
				{console.log(this.state.userInfo)}
				{console.log(this.state.matchHistoryData)}
				{console.log(this.state.matchData)}

				<Grid centered>
					<Grid.Column width='12'>{this.props.username}</Grid.Column>
				</Grid>
			</div>
		) : (
			<Dimmer active>
				{console.log(this.state.champions)}
				<Loader />
			</Dimmer>
		);
	}
}

export default User;
