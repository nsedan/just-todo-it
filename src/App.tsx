import React from "react";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <main className="outerContainer">
      <div className="innerContainer">
        <AddItem />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
