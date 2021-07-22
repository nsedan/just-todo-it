import React from "react";
import { useDispatch } from "react-redux";
import { todosActions, TodoType } from "../store/todo-slice";

const TodoItem = (props: TodoType) => {
  const { title, highPriority, isCompleted, id } = props;
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(todosActions.removeTodo(id));
  };

  const onTogglePriority = () => {
    dispatch(todosActions.togglePriority(id));
  };

  const onToggleCompleted = () => {
    dispatch(todosActions.toggleCompleted(id));
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

export default TodoItem;
