import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ item, handleToggle, onDelete }) {
	const { id, text, completed } = item;
	const labelId = `checkbox-list-label-${id}`;
	return (
		<ListItem
			key={id}
			secondaryAction={
				<IconButton edge="end" aria-label="comments">
					<DeleteIcon onClick={onDelete} />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} onClick={handleToggle} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={completed}
						tabIndex={-1}
						disableRipple
						slotProps={{ input: { "aria-labelledby": labelId } }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={text} />
			</ListItemButton>
		</ListItem>
	);
}
