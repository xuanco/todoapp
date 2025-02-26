import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return <li className="todo-item">{todo}</li>;
};

export default TodoItem;