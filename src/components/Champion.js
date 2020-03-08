import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

class Champion extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Header as='h1'>Champions Name</Header>
			</div>
		);
	}
}

export default Champion;
