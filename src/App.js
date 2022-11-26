import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoItem } from "./components/ToDoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { ToDoList } from "./components/ToDoList";
import { ToDoSearch } from "./components/ToDoSearch";
import "./scss/App.scss";

const defaultToDos = [
	{ Text: "cortar Cebolla", Completed: false },
	{ Text: "Hacer una Cosa", Completed: false },
	{ Text: "jajjaja", Completed: false },
	{ Text: "hacer otRa cosa", Completed: false },
	{ Text: "No puEde ser", Completed: false },
];

function App() {
	const [ToDo, setTodo] = React.useState(defaultToDos);

	const completeTodos = (text) => {
		const findIndex = ToDo.findIndex((todo) => todo.Text === text);
		const newToDo = [...ToDo];
		newToDo[findIndex].Completed = true;
		setTodo(newToDo);
		console.log(`se completo ${text}`);
	};

	/* const [count, setCount] = React.useState(0) */

	const completedToDos = ToDo.filter(todo => !!todo.Completed).length;
	const totalToDos = ToDo.length;

	/* setCount(completedToDos) */

	return (
		<React.Fragment>
			<ToDoCounter 
				completed={completedToDos} 
				total={totalToDos} 
			/>
			<ToDoSearch />
			<ToDoList>
				{defaultToDos.map((ToDos) => (
					<ToDoItem
						key={ToDos.Text}
						Text={ToDos.Text}
						Completed={ToDos.Completed}
						OnComplete={() => completeTodos(ToDos.Text)}
					/>
				))}
			</ToDoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
