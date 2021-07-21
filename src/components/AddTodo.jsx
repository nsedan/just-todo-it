import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const todo = {
    id: Math.floor(Math.random() * 10000000),
    title: title,
    highPriority: false,
    isCompleted: false,
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTitle("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={title}
        required
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
