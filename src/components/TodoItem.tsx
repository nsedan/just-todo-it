import React from "react";
import { useDispatch } from "react-redux";
import { todosActions, TodoType } from "../store/todo-slice";
import classes from "./TodoItem.module.css";

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
    <li className={classes.listItem}>
      <h3 className={classes.itemTitle}>{title}</h3>
      <div className={classes.itemActions}>
        <button onClick={onTogglePriority}>{highPriority ? "!" : "-"}</button>
        <button onClick={onToggleCompleted}>{isCompleted ? "✓" : "x"}</button>
        <button onClick={onDeleteHandler}>x</button>
      </div>
    </li>
  );
};

export default TodoItem;
