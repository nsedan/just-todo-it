import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todo-slice";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const todo = {
    id: Math.floor(Math.random() * 10000000),
    title: title,
    highPriority: false,
    isCompleted: false,
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(todosActions.addTodo(todo));
    setTitle("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e)}
        value={title}
        required
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddItem;
