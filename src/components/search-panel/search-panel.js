import React from 'react';
import './search-panel.css';



class SearchPanel extends React.Component {

	state = {
		term: ''
	}

	filterSearch = (event) => {
		const term = event.target.value;
		this.setState({
			term: term
		});
		this.props.filterSearch(term);
		// this.props.todos.forEach((el) => {
		// 	if(el.label.toLowerCase().indexOf(event.target.value) !== -1) {
		// 		console.log(el.label);
		// 	}
		// });
	};

	render() {
		return <input 
			className="search-input" 
			placeholder="search"
			onChange={this.filterSearch}
			value={this.state.term} />;
	}
};

export default SearchPanel;