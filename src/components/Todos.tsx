import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { TodoType, RootState } from "../store/store";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      {todos.map((todo: TodoType) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            highPriority={todo.highPriority}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </>
  );
};

export default Todos;
