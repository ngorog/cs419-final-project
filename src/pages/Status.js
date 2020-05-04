import React, { createRef } from "react";
import { Grid, Loader, Dimmer, Header, Label, List } from "semantic-ui-react";

class Status extends React.Component {
	state = { loaded: false };

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

	onUserClick = user => {
		this.props.history.push(`/search/${user}`); // or whatever string path
		window.location.reload();
	};

	setStatusInfo = result => {
		this.setState({ statusInfo: result });
	};

	componentDidMount() {
		let api_key = "RGAPI-ba171e45-0f12-4fe6-802a-141cba692fa4";
		this.doCORSRequest(
			{
				method: "GET",
				url: `https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${api_key}`
			},
			this.setStatusInfo
		).then(() => this.setState({ loaded: true }));
	}

	contextRef = createRef();

	render() {
		return this.state.loaded ? (
			<div>
				<Grid>
					<Grid.Row>
						<Grid.Column textAlign='center'>
							<Header as='h1'>North America Server Status</Header>
							<List divided selection>
								<List.Item>
									<Label color='green' horizontal>
										<Header as='h2'>
											Game {this.state.statusInfo.services[0].status}
										</Header>
									</Label>
								</List.Item>
								<List.Item>
									<Label color='green' horizontal>
										<Header as='h2'>
											Store {this.state.statusInfo.services[1].status}
										</Header>
									</Label>
								</List.Item>
								<List.Item>
									<Label color='green' horizontal>
										<Header as='h2'>
											Website {this.state.statusInfo.services[2].status}
										</Header>
									</Label>
								</List.Item>
								<List.Item>
									<Label color='green' horizontal>
										<Header as='h2'>
											Client {this.state.statusInfo.services[3].status}
										</Header>
									</Label>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		) : (
			<Dimmer active>
				<Loader />
			</Dimmer>
		);
	}
}

export default Status;
