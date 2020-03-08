import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
	state = {
		input: ""
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.input);
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Username Search</label>
						<Input
							value={this.state.input}
							onChange={e => this.setState({ input: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
