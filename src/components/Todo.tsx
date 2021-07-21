import React from "react";
import { TodoType } from "../store/store";

const Todo = ({ title, highPriority, isCompleted }: TodoType) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Priority: {highPriority ? "High" : "Low"}</p>
      <p>{isCompleted ? "Completed" : "Pending"}</p>
    </>
  );
};

export default Todo;
