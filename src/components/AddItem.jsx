import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todo-slice";

const AddItem = () => {
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
    dispatch(todosActions.addTodo(todo));
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

export default AddItem;
