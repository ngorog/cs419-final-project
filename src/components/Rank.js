import React from "react";
import { Grid, Loader, Dimmer, Header, Image, Card } from "semantic-ui-react";
import RankedIcons from "../data/RankedIcons";

class User extends React.Component {
	state = { matchData: [], loaded: false };

	setRankData = result => {
		this.setState({ rankData: result });
	};

	componentDidMount() {
		this.setRankData(this.props.rankData);
	}

	parseRank = rank => {
		let newRank = rank.toLowerCase();
		newRank = newRank[0].toUpperCase() + newRank.slice(1);
		return newRank;
	};

	render() {
		return this.state.rankData ? (
			<Card.Content extra>
				<Card.Header textAlign='center'>
					<Header as='h2'>
						{this.parseRank(this.state.rankData.tier)}{" "}
						{this.state.rankData.rank}
					</Header>
					Record:
					<p>
						{this.state.rankData.wins} Wins - {this.state.rankData.losses}{" "}
						Losses
					</p>
					<Image
						src={RankedIcons[this.state.rankData.tier].src}
						wrapped
						ui={true}
						size='medium'
					/>
				</Card.Header>
			</Card.Content>
		) : (
			<Header as='h2' textAlign='center'>
				No Ranked Data
			</Header>
		);
	}
}

export default User;
