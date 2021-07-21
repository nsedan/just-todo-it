import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ title, highPriority, isCompleted, id }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  return (
    <>
      <button onClick={onDeleteHandler}>x</button>
      <h3>{title}</h3>
      <p>Priority: {highPriority ? "High" : "Low"}</p>
      <p>{isCompleted ? "Completed" : "Pending"}</p>
    </>
  );
};

export default Todo;
