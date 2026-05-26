import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";

const initialTodos = [
	{ id: uuid(), text: "Empty the bin", completed: true },
	{ id: uuid(), text: "Wipe the windows", completed: false },
	{ id: uuid(), text: "Wipe the counters", completed: true },
	{ id: uuid(), text: "Buy groceries", completed: true },
	{ id: uuid(), text: "Order a painiting", completed: false },
];

const getInitialData = () => {
	const data = JSON.parse(localStorage.getItem("todos"));
	if (!data) return [];
	return data;
};
export default function TodoList() {
	const [todos, setTodos] = useState(getInitialData);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleToggle = (id) => {
		setTodos((oldTodos) =>
			oldTodos.map((value) => {
				if (value.id === id) return { ...value, completed: !value.completed };
				else return value;
			}),
		);
	};

	const onDelete = (id) => {
		setTodos((oldTodos) => oldTodos.filter((value) => value.id !== id));
	};

	const createTodo = (newTodo) => {
		setTodos((oldTodos) => [
			...oldTodos,
			{ id: uuid(), text: newTodo, completed: false },
		]);
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				m: 3,
			}}
		>
			<Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
				Todos
			</Typography>
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				{todos.map((value) => {
					return (
						<TodoItem
							key={value.id}
							item={value}
							handleToggle={() => handleToggle(value.id)}
							onDelete={() => onDelete(value.id)}
						/>
					);
				})}
				<TodoForm createTodo={createTodo} />
			</List>
		</Box>
	);
}
