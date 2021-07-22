import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <>
      <ul className={classes.list}>
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                highPriority={todo.highPriority}
                isCompleted={todo.isCompleted}
              />
            );
          })}
      </ul>
      {todos.length === 0 && <h3>Nothing to show.</h3>}
    </>
  );
};

export default TodoList;
