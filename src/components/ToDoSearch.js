import React from "react";

const ToDoSearch = ({ searchValues, setSearchValues }) => {

	const onchange = (event) => {
		setSearchValues(event.target.value);

	};

	return (
		<input
			className="todoInput"
			placeholder="Cebolla"
			onChange={onchange}
			value={searchValues}
		></input>
	);
};

export { ToDoSearch };
