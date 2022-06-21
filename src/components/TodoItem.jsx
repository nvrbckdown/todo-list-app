import React from "react";

function TodoItem(props) {
	return (
		<div
			onClick={() => {
				props.isChecked(props.id);
			}}
		>
			<li>{props.text}</li>
		</div>
	);
}

export default TodoItem;
