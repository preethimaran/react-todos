import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function TodoForm({ createTodo }) {
	const [task, setTask] = useState("");

	const onChange = (evt) => {
		setTask(evt.target.value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		if (task.trim() !== "") {
			createTodo(task);
		}
		setTask("");
	};

	return (
		<ListItem>
			<form onSubmit={onSubmit}>
				<TextField
					id="outlined-basic"
					type="text"
					label="Add Todo"
					variant="outlined"
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton aria-label="Add Task" edge="end" type="submit">
										<AddIcon />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
					value={task}
					onChange={onChange}
				/>
			</form>
		</ListItem>
	);
}
