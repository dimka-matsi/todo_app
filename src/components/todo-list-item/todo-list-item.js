import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {

	// constructor() {
	// 	super();

	// 	this.onLabelClick = () => {
	// 		console.log('clicked', this)
	// 	}
	// }

	// state = {
	// 	done: false,
	// 	important: false
	// };

	// onLabelClick = () => {
	// 	this.setState((state) => {
	// 		return {
	// 			done: !state.done
	// 		};
	// 	});
	// };

	// onMarkImportant= () => {
	// 	this.setState((state) => {
	// 		return {
	// 			important: !state.important
	// 		};
	// 	});
	// };


	// const {label, onToggleImportant, onToggleDone, important, done} = this.props;
	const {label, onToggleImportant, onToggleDone, important, done} = props;
	// const {done, important} = this.state;

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
				onClick={onToggleDone}>
				{label}
			</span>
			<button type="button"
					className="btn btn-outline-success btn-sm"
					onClick={onToggleImportant}>
				<i className="fa fa-exclamation" />
			</button>
			<button type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={props.onDeleted}>
				<i className="fa fa-trash-o" />
			</button>
		</span>
	);
};

export default TodoListItem;