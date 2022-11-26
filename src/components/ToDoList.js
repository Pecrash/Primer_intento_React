import React from "react";

const ToDoList = (props) => {
	return (
		<section>
			<ul className="todoList">{props.children}</ul>
		</section>
	);
};

export { ToDoList };
