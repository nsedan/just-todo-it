import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ title, highPriority, isCompleted, id }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const onTogglePriority = () => {
    dispatch({ type: "TOGGLE_PRIORITY", payload: id })
  };

  const onToggleCompleted = () => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id })
  };

  return (
    <li>
      <button onClick={onTogglePriority}>Change Priority</button>
      <button onClick={onToggleCompleted}>Change Status</button>
      <button onClick={onDeleteHandler}>x</button>
      <h3>{title}</h3>
      <p>Priority: {highPriority ? "High" : "Low"}</p>
      <p>Status: {isCompleted ? "Completed" : "Pending"}</p>
    </li>
  );
};

export default Todo;
