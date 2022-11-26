import React from "react";

const ToDoCounter = ({total, completed}) => {

	return <h1 className="counter">Has completado {completed} de {total} ToDos</h1>;
};

export { ToDoCounter };
