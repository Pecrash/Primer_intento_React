import React from "react";

const ToDoSearch = () => {
	const [searchValue, setSearchValue] = React.useState('');

	const onchange = (event) => {
		/* console.log(event.target.value); */
		setSearchValue(event.target.value);

	};

	if (!searchValue.length >= 1) {
		console.log("holi");
        console.log("wtf")
	}else {
        console.log('joder')
    }

	return (
		<input
			className="todoInput"
			placeholder="Cebolla"
			onChange={onchange}
			value={searchValue}
		></input>
	);
};

export { ToDoSearch };
