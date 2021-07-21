import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state) => state);

  return (
    <>
      <ul>
        {todos.length > 0 && (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                highPriority={todo.highPriority}
                isCompleted={todo.isCompleted}
              />
            );
          })
        )}
      </ul>
      {todos.length === 0 && (
        <h3>Nothing to show.</h3>
      )}
    </>
  );
};

export default Todos;
