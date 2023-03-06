import React from "react";
import check_icon from "../scss/assets/images/check-icon.svg"

const ToDoItem = (props) => {

	return (
		<li className={`todoItem ${props.Completed && 'completeTodo'}`}>
			<span className={`check_icon`} onClick={props.OnComplete}>
				<img src={check_icon} alt="icon"></img>
			</span>
			<p>{props.Text}</p>
			<span className="close_icon" onClick={props.OnDelete}></span>
		</li>
	);
};

export { ToDoItem };
