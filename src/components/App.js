import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import NavBar from "./NavBar";
import Champions from "../pages/Champions";
import Champion from "../pages/Champion";
import Home from "../pages/Home";
import User from "../pages/User";
import Items from "../pages/Items";
//import Status from "../pages/Status";

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
            path="/champion/:id"
            render={props => <Champion {...props} id={props.match.params.id} />}
          />

          <Route exact path="/champion">
            <Champions />
          </Route>

          <Route exact path="/item">
            <Items />
          </Route>

          <Route
            exact
            path="/search/:user"
            render={props => <User {...props} id={props.match.params.id} />}
          />

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
