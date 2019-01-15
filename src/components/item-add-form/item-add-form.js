import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

	state = {
		label: ''
	};

	onLabelChange = (event) => {
		this.setState({
			label: event.target.value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAddItem(this.state.label);
		this.setState({
			label: ''
		});
	};

	render() {
		return (
			<form 	className="item-add-form d-flex"
					onSubmit={this.onSubmit}>
				<input 	type="text"
						className="form-control"
						onChange={this.onLabelChange}
						placeholder="What needs to be done"
						value={this.state.label} />
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={() => this.props.onAddItem(this.state.label)}>Add Item
				</button>
			</form>
		);
	}
};