import React from 'react'; 

const AddTaskButton = ({ onAdd, showAddForm }) => {
	let btnCss = showAddForm
		? { transform: 'rotate(0deg)' }
		: { transform: 'rotate(225deg)' };
	return (
		<div className="addTaskButton" onClick={onAdd}>
			<span style={btnCss}>&times;</span>
		</div>
	);
};

export default AddTaskButton;
