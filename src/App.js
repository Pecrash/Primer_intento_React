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
	/* Estado de la lista de ToDos */
	const [ToDo, setTodo] = React.useState(defaultToDos);
	/* Estado de los ToDos buscados */
	const [searchValue, setSearchValue] = React.useState('')

	const completedToDos = ToDo.filter(todo => !!todo.Completed).length;
	const totalToDos = ToDo.length;
	let searchedTodos = []

	if (!searchValue.length >= 1) {
		searchedTodos = ToDo
	} else {
		searchedTodos = ToDo.filter(todo => {
			const searchText = searchValue.toLowerCase()
			const todoText = todo.Text.toLowerCase()

			return todoText.includes(searchText)
		})
	}

	const completeTodo = (text) => {
		const findIndex = ToDo.findIndex((todo) => todo.Text === text);
		const newToDo = [...ToDo];
		newToDo[findIndex].Completed = true;
		setTodo(newToDo);
		console.log(`se completo ${text}`);
	};

	const deleteTodo = (text) => {
		const findIndex = ToDo.findIndex((todo) => todo.Text === text);
		const newToDo = [...ToDo];
		newToDo.splice(findIndex, 1)
		setTodo(newToDo)
	}

	return (
		<React.Fragment>
			<ToDoCounter 
				completed={completedToDos} 
				total={totalToDos} 
			/>
			<ToDoSearch 
				searchValues={searchValue}
				setSearchValues={setSearchValue}
			/>
			<ToDoList>
				{searchedTodos.map((ToDos) => (
					<ToDoItem
						key={ToDos.Text}
						Text={ToDos.Text}
						Completed={ToDos.Completed}
						OnComplete={() => completeTodo(ToDos.Text)}
						OnDelete={() => deleteTodo(ToDos.Text)}
					/>
				))}
			</ToDoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
