import React from "react";
import { Header, Grid, Icon } from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
	state = {};

	componentDidUpdate() {
		console.log(this.state.input);
	}

	onSearchSubmit = term => {
		this.setState({ input: term });
		this.props.history.push(`/search/${term}`); // or whatever string path
	};

	render() {
		return (
			<Grid centered>
				<Grid.Row>
					<Header as='h2' icon textAlign='center'>
						<Icon name='gamepad' circular />
						<Header.Content>League of Legends</Header.Content>
					</Header>{" "}
				</Grid.Row>
				<Grid.Column width='12'>
					<SearchBar onSubmit={this.onSearchSubmit} />
				</Grid.Column>
				<Grid.Row>
					<Grid.Column width='8'>
						<Grid>
							<Grid.Row>
								<Grid.Column width='4'>Test</Grid.Column>
								<Grid.Column width='4'>Test</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
					<Grid.Column width='8'>Test</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default withRouter(Home);
