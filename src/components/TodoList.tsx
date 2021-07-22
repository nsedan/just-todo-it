import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { TodoType } from "../store/todo-slice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootStateOrAny) => state.todos);

  return (
    <>
      <ul>
        {todos.length > 0 &&
          todos.map((todo: TodoType) => {
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
