import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ list }) => {
  return (
    <ul className="todo-list">
      {list.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;