import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

class Home extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Header as='h1'>Home</Header>
			</div>
		);
	}
}

export default Home;