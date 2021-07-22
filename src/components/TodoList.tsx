import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { todosActions } from "../store/todo-slice";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  const onDeleteAllHandler = () => {
    console.log('asd')
    dispatch(todosActions.removeAllTodo());
  }

  return (
    <>
      {todos.length > 0 &&
        <ul className={classes.list}>
          {todos.map((todo) => {
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
      }
      {todos.length > 0 &&
        <button className="button" onClick={onDeleteAllHandler}>Clear All</button>
      }
      {todos.length === 0 && <h3>Nothing to show.</h3>}
    </>
  );
};

export default TodoList;
