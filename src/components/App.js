import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import NavBar from "./NavBar";
import ChampionsPage from "./ChampionsPage";
import Champion from "./Champion";
import Home from "./Home";
import User from "./User";

class App extends React.Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<NavBar />

				<Switch>
					<Route
						path='/champion/:id'
						render={props => <Champion {...props} id={props.match.params.id} />}
					/>

					<Route exact path='/champion'>
						<ChampionsPage />
					</Route>

					<Route
						exact
						path='/search/:user'
						render={props => <User {...props} id={props.match.params.id} />}
					/>

					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='*'>
						<Home />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
