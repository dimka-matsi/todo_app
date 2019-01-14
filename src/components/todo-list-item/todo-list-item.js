import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

	// constructor() {
	// 	super();

	// 	this.onLabelClick = () => {
	// 		console.log('clicked', this)
	// 	}
	// }

	state = {
		done: false,
		important: false
	};

	onLabelClick = () => {
		this.setState((state) => {
			return {
				done: !state.done
			};
		});
	};

	onMarkImportant= () => {
		this.setState((state) => {
			return {
				important: !state.important
			};
		});
	};

	render() {

		const {label} = this.props;
		const {done, important} = this.state;
		console.log({done});

		let classNames = 'todo-list-item';

		if( done ) {
			classNames += ' done';
		}

		if( important ) {
			classNames += ' important';
		}

		return (
			<span className={classNames}>
				<span
					className="todo-list-item-label"
					onClick={this.onLabelClick}>
					{label}
				</span>
				<button type="button"
						className="btn btn-outline-success btn-sm"
						onClick={this.onMarkImportant}>
					<i className="fa fa-exclamation" />
				</button>
				<button type="button"
						className="btn btn-outline-danger btn-sm">
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}