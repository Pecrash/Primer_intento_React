import React from "react";
import check_icon from "../scss/assets/images/check-icon.svg"

const ToDoItem = (props) => {

	return (
		<li className={`todoItem `}>
			<span className={`check_icon`} onClick={props.OnComplete}>
				<img src={check_icon} alt="icon"></img>
			</span>
			<p className={`${props.Completed && 'completeTodo'}`}>{props.Text}</p>
			<span className="close_icon"></span>
		</li>
	);
};

export { ToDoItem };
