import React, { useState } from 'react';

function SearchBox({ searchTodo }) {
	const [typing, setTyping] = useState();
	const [input, setInput] = useState('');
	
	const onChange = e => {
		setInput(e.target.value);
		searchTodo(e.target.value);
		e.target.value.length > 0 ? setTyping(true) : setTyping(false);
	};

	let class_name = typing ? 'fa fa-times' : 'fa fa-search';

	return (
		<form id="searchForm" onSubmit={e => e.preventDefault()}>
			<input
				type="text"
				placeholder="Search For Task..."
				value={input}
				onChange={onChange}
			/>
			<i
				className={class_name}
				onClick={() => {
					setInput('');
					searchTodo('');
					setTyping(false);
				}}
			></i>
		</form>
	);
}

export default SearchBox;
