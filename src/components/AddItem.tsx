import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todo-slice";
import classes from "./AddItem.module.css";

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
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input
        className={classes.input}
        type="text"
        onChange={(e) => onChangeHandler(e)}
        value={title}
        placeholder="Insert a task..."
        required
      />
      <button className="button">Add</button>
    </form>
  );
};

export default AddItem;
