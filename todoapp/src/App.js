import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoInput item={item} handleChange={handleChange} handleAddItem={handleAddItem} />
      <TodoList list={list} />
    </div>
  );
};

export default App;