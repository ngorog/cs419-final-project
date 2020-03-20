import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";

class NavBar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/champion"
          name="champion"
          active={activeItem === "champion"}
          onClick={this.handleItemClick}
        >
          Champions
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/item"
          name="item"
          active={activeItem === "item"}
          onClick={this.handleItemClick}
        >
          Items
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
