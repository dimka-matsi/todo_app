import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'


export default class App extends React.Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		],
		term: '',
		filter: 'active'
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

	deleteItem = (id) => {
		
		this.setState((state) => {

			const idx = state.todoData.findIndex((el) => el.id === id);

			// let data = state.todoData;
			// data.splice(idx, 1);

			const before = state.todoData.slice(0, idx);
			const after = state.todoData.slice(idx + 1);

			const newArray = [...before, ...after];

			return {
				todoData: newArray
			};
		});
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState((state) => {

			const newArray = [
				...state.todoData,
				newItem
			];

			return {
				todoData: newArray
			};
		});
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {

			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	onToggleDone = (id) => {
		this.setState(({todoData}) => {

			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	search(items, text) {
		if(text.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(text) > -1;
		});
	};

	filter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((el) => !el.done);
			case 'done':
				return items.filter((el) => el.done);
			default:
				return items;
		}
	};

	onFilterSearch = (term) => {
		this.setState({term});
	};

	onFilterChange = (filter) => {
		this.setState({
			filter: filter
		});
	}

	render() {

		const {todoData, term, filter} = this.state;

		const visibleItems = this.filter(this.search(todoData, term), filter);

		const doneCount = this.state.todoData.filter((el) => el.done).length;
		const todoCount = this.state.todoData.filter((el) => !el.done).length;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel 
						filterSearch={this.onFilterSearch} />
					<ItemStatusFilter 
						filter={filter}
						onFilterChange={this.onFilterChange}/>
				</div>
				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />
				<ItemAddForm onAddItem={this.addItem} />
			</div>
		);
	}
}